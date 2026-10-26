"use client";

import { useMemo, useState } from "react";
import {
  Check,
  ChevronLeft,
  ChevronRight,
  Calendar,
  MessageCircle,
  Phone,
  MapPin,
} from "lucide-react";
import { Button } from "./Button";
import { serviceCategories, inr } from "@/data/services";
import { stylists } from "@/data/stylists";
import { contactInfo } from "@/data/site";
import { cn } from "@/lib/utils";

const STEPS = ["Service", "Specialist", "Date", "Time", "Details", "Review"] as const;

const TIME_SLOTS = [
  "10:00 AM",
  "10:45 AM",
  "11:30 AM",
  "12:15 PM",
  "02:00 PM",
  "02:45 PM",
  "03:30 PM",
  "04:15 PM",
  "05:00 PM",
  "05:45 PM",
  "06:15 PM",
];

type Details = { name: string; email: string; phone: string; notes: string };
type DetailErrors = Partial<Record<keyof Details, string>>;

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRe = /^[+()\-\s0-9]{7,18}$/;

const allServices = serviceCategories.flatMap((c) =>
  c.services.map((s) => ({ ...s, category: c.title }))
);

function todayISO() {
  const d = new Date();
  return d.toISOString().split("T")[0];
}

export function BookingForm() {
  const [step, setStep] = useState(0);
  const [serviceSlug, setServiceSlug] = useState<string | null>(null);
  const [stylistSlug, setStylistSlug] = useState<string | null>("any");
  const [date, setDate] = useState("");
  const [time, setTime] = useState<string | null>(null);
  const [details, setDetails] = useState<Details>({
    name: "",
    email: "",
    phone: "",
    notes: "",
  });
  const [errors, setErrors] = useState<DetailErrors>({});
  const [confirmed, setConfirmed] = useState(false);

  const service = useMemo(
    () => allServices.find((s) => s.slug === serviceSlug) ?? null,
    [serviceSlug]
  );
  const stylist = useMemo(
    () =>
      stylistSlug === "any"
        ? null
        : stylists.find((s) => s.slug === stylistSlug) ?? null,
    [stylistSlug]
  );

  const canAdvance = (() => {
    switch (step) {
      case 0:
        return !!serviceSlug;
      case 1:
        return !!stylistSlug;
      case 2:
        return !!date;
      case 3:
        return !!time;
      case 4:
        return Object.keys(validateDetails(details)).length === 0;
      default:
        return true;
    }
  })();

  function validateDetails(v: Details): DetailErrors {
    const e: DetailErrors = {};
    if (!v.name.trim()) e.name = "Please enter your name.";
    if (!v.phone.trim()) e.phone = "Please enter your phone number.";
    else if (!phoneRe.test(v.phone)) e.phone = "Enter a valid phone number.";
    if (v.email.trim() && !emailRe.test(v.email))
      e.email = "Enter a valid email address.";
    return e;
  }

  function next() {
    if (step === 4) {
      const e = validateDetails(details);
      setErrors(e);
      if (Object.keys(e).length) return;
    }
    if (canAdvance) setStep((s) => Math.min(s + 1, STEPS.length - 1));
  }
  function back() {
    setStep((s) => Math.max(s - 1, 0));
  }

  if (confirmed) {
    return (
      <Confirmation
        service={service?.name}
        stylist={stylist?.name}
        date={date}
        time={time}
        details={details}
      />
    );
  }

  return (
    <div>
      {/* Progress indicator */}
      <ol
        className="mb-10 flex flex-wrap items-center gap-y-3"
        aria-label="Booking progress"
      >
        {STEPS.map((label, i) => {
          const done = i < step;
          const activeStep = i === step;
          return (
            <li key={label} className="flex items-center">
              <div className="flex items-center gap-2">
                <span
                  className={cn(
                    "flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium transition-colors",
                    done && "border-bronze bg-bronze text-ivory",
                    activeStep && "border-espresso bg-espresso text-ivory",
                    !done && !activeStep && "border-espresso/25 text-espresso/40"
                  )}
                  aria-current={activeStep ? "step" : undefined}
                >
                  {done ? <Check size={14} /> : i + 1}
                </span>
                <span
                  className={cn(
                    "hidden text-xs font-medium uppercase tracking-[0.14em] sm:inline",
                    activeStep ? "text-espresso" : "text-espresso/40"
                  )}
                >
                  {label}
                </span>
              </div>
              {i < STEPS.length - 1 && (
                <span
                  className="mx-2 h-px w-5 bg-espresso/15 sm:w-8"
                  aria-hidden
                />
              )}
            </li>
          );
        })}
      </ol>

      <div className="min-h-[320px]">
        {/* STEP 1 — Service */}
        {step === 0 && (
          <StepShell
            title="Choose a service"
            hint="Select the hair, skin, grooming or bridal treatment you would like."
          >
            <div className="grid gap-3 sm:grid-cols-2">
              {allServices.map((s) => (
                <button
                  key={s.slug}
                  onClick={() => setServiceSlug(s.slug)}
                  className={cn(
                    "flex flex-col items-start gap-1 border p-4 text-left transition-colors",
                    serviceSlug === s.slug
                      ? "border-bronze bg-bronze/5 shadow-sm"
                      : "border-espresso/15 hover:border-espresso/40"
                  )}
                >
                  <span className="text-[0.65rem] uppercase tracking-[0.14em] text-bronze">
                    {s.category}
                  </span>
                  <span className="font-display text-lg text-espresso">
                    {s.name}
                  </span>
                  <span className="text-xs text-mocha">
                    from {inr(s.priceFrom)} · {s.duration}
                  </span>
                </button>
              ))}
            </div>
          </StepShell>
        )}

        {/* STEP 2 — Specialist */}
        {step === 1 && (
          <StepShell
            title="Choose a specialist"
            hint="Select your preferred artist or let us pair you with the best available."
          >
            <div className="grid gap-3 sm:grid-cols-2">
              <button
                onClick={() => setStylistSlug("any")}
                className={cn(
                  "flex flex-col items-start gap-1 border p-4 text-left transition-colors",
                  stylistSlug === "any"
                    ? "border-bronze bg-bronze/5"
                    : "border-espresso/15 hover:border-espresso/40"
                )}
              >
                <span className="font-display text-lg text-espresso">
                  Any Available Beautician
                </span>
                <span className="text-xs text-mocha">
                  We will assign the specialist best suited for your service.
                </span>
              </button>
              {stylists.map((s) => (
                <button
                  key={s.slug}
                  onClick={() => setStylistSlug(s.slug)}
                  className={cn(
                    "flex flex-col items-start gap-1 border p-4 text-left transition-colors",
                    stylistSlug === s.slug
                      ? "border-bronze bg-bronze/5"
                      : "border-espresso/15 hover:border-espresso/40"
                  )}
                >
                  <span className="font-display text-lg text-espresso">
                    {s.name}
                  </span>
                  <span className="text-xs text-mocha">{s.title}</span>
                </button>
              ))}
            </div>
          </StepShell>
        )}

        {/* STEP 3 — Date */}
        {step === 2 && (
          <StepShell
            title="Choose a date"
            hint="Select your preferred appointment day at our Bardoli salon."
          >
            <div className="max-w-xs">
              <label
                htmlFor="booking-date"
                className="mb-2 block text-[0.7rem] font-medium uppercase tracking-[0.16em] text-espresso/70"
              >
                Appointment date
              </label>
              <div className="relative">
                <input
                  id="booking-date"
                  type="date"
                  min={todayISO()}
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full border border-espresso/20 bg-ivory px-4 py-3 text-sm text-espresso focus:border-bronze focus:outline-none focus:ring-1 focus:ring-bronze"
                />
                <Calendar
                  size={16}
                  className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-stone"
                />
              </div>
            </div>
          </StepShell>
        )}

        {/* STEP 4 — Time */}
        {step === 3 && (
          <StepShell
            title="Choose a time slot"
            hint="Pick an available time slot for your appointment."
          >
            <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
              {TIME_SLOTS.map((t) => (
                <button
                  key={t}
                  onClick={() => setTime(t)}
                  className={cn(
                    "border py-3 text-sm font-medium transition-colors",
                    time === t
                      ? "border-bronze bg-bronze text-ivory"
                      : "border-espresso/15 text-espresso hover:border-espresso/40"
                  )}
                >
                  {t}
                </button>
              ))}
            </div>
            <p className="mt-4 text-xs text-stone">
              Salon timings: Mon–Sat 9:30 AM – 7:00 PM · Sun 10:00 AM – 2:00 PM
            </p>
          </StepShell>
        )}

        {/* STEP 5 — Details */}
        {step === 4 && (
          <StepShell
            title="Your details"
            hint="Tell us who the appointment is for so we can confirm."
          >
            <div className="grid max-w-xl gap-5">
              <BookingField id="b-name" label="Full name *" error={errors.name}>
                <input
                  id="b-name"
                  type="text"
                  autoComplete="name"
                  value={details.name}
                  onChange={(e) =>
                    setDetails((d) => ({ ...d, name: e.target.value }))
                  }
                  className={bInput(!!errors.name)}
                  placeholder="e.g. Kinjal Patel"
                />
              </BookingField>
              <div className="grid gap-5 sm:grid-cols-2">
                <BookingField
                  id="b-phone"
                  label="Phone / WhatsApp number *"
                  error={errors.phone}
                >
                  <input
                    id="b-phone"
                    type="tel"
                    autoComplete="tel"
                    value={details.phone}
                    onChange={(e) =>
                      setDetails((d) => ({ ...d, phone: e.target.value }))
                    }
                    className={bInput(!!errors.phone)}
                    placeholder="+91 99251 72388"
                  />
                </BookingField>
                <BookingField
                  id="b-email"
                  label="Email (optional)"
                  error={errors.email}
                >
                  <input
                    id="b-email"
                    type="email"
                    autoComplete="email"
                    value={details.email}
                    onChange={(e) =>
                      setDetails((d) => ({ ...d, email: e.target.value }))
                    }
                    className={bInput(!!errors.email)}
                    placeholder="you@example.com"
                  />
                </BookingField>
              </div>
              <BookingField id="b-notes" label="Special requests / Notes">
                <textarea
                  id="b-notes"
                  rows={3}
                  value={details.notes}
                  onChange={(e) =>
                    setDetails((d) => ({ ...d, notes: e.target.value }))
                  }
                  className={cn(bInput(false), "resize-none")}
                  placeholder="Hair length, occasion details, wedding date, or skin sensitivities..."
                />
              </BookingField>
            </div>
          </StepShell>
        )}

        {/* STEP 6 — Review */}
        {step === 5 && (
          <StepShell
            title="Review &amp; Confirm"
            hint="Please check your appointment details below."
          >
            <dl className="divide-y divide-espresso/12 border-y border-espresso/12">
              <Row
                label="Service"
                value={
                  service
                    ? `${service.name} · from ${inr(service.priceFrom)} · ${service.duration}`
                    : "—"
                }
              />
              <Row
                label="Specialist"
                value={stylist ? stylist.name : "Any available beautician"}
              />
              <Row label="Date" value={date || "—"} />
              <Row label="Time" value={time || "—"} />
              <Row label="Name" value={details.name} />
              <Row label="Phone" value={details.phone} />
              {details.email && <Row label="Email" value={details.email} />}
              {details.notes && <Row label="Notes" value={details.notes} />}
              <Row
                label="Salon"
                value="Vidhi's Salon, Opp. Gopal Nagar, Lal Bahadur Shastri Rd, Bardoli"
              />
            </dl>
          </StepShell>
        )}
      </div>

      {/* Navigation */}
      <div className="mt-10 flex items-center justify-between border-t border-espresso/12 pt-6">
        <Button variant="ghost" onClick={back} disabled={step === 0}>
          <ChevronLeft size={16} /> Back
        </Button>
        {step < STEPS.length - 1 ? (
          <Button onClick={next} disabled={!canAdvance}>
            Continue <ChevronRight size={16} />
          </Button>
        ) : (
          <Button onClick={() => setConfirmed(true)}>Confirm Request</Button>
        )}
      </div>
    </div>
  );
}

function Confirmation({
  service,
  stylist,
  date,
  time,
  details,
}: {
  service?: string;
  stylist?: string | null;
  date: string;
  time: string | null;
  details: Details;
}) {
  const whatsappMsg = encodeURIComponent(
    `Hello Vidhi's Salon, I would like to confirm my appointment:\n\n` +
      `• Service: ${service ?? "Salon Service"}\n` +
      `• Specialist: ${stylist ?? "Any available beautician"}\n` +
      `• Date: ${date}\n` +
      `• Time: ${time}\n` +
      `• Client Name: ${details.name}\n` +
      `• Phone: ${details.phone}\n` +
      (details.notes ? `• Notes: ${details.notes}\n` : "") +
      `\nPlease let me know if this slot is reserved. Thank you!`
  );

  return (
    <div className="mx-auto max-w-xl text-center">
      <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-bronze/15 text-bronze">
        <Check size={32} />
      </span>
      <h2 className="mt-6 font-display text-3xl text-espresso">
        Appointment Request Prepared, {details.name.split(" ")[0]}!
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-mocha">
        Your booking summary is ready. Send it directly to Vidhi&apos;s Salon on
        WhatsApp for immediate slot confirmation!
      </p>

      <dl className="mx-auto mt-8 divide-y divide-espresso/12 border-y border-espresso/12 text-left">
        <Row label="Service" value={service ?? "—"} />
        <Row label="Specialist" value={stylist ?? "Any available beautician"} />
        <Row label="Date" value={date || "—"} />
        <Row label="Time" value={time || "—"} />
        <Row label="Phone" value={details.phone} />
        <Row
          label="Location"
          value="Vidhi's Salon, Opp. Gopal Nagar, LBS Road, Bardoli"
        />
      </dl>

      <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
        <a
          href={`https://wa.me/${contactInfo.whatsappNumber}?text=${whatsappMsg}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-sm bg-[#25D366] px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-white shadow-md transition-transform hover:scale-105 w-full sm:w-auto justify-center"
        >
          <MessageCircle size={18} />
          Confirm on WhatsApp
        </a>
        <a
          href={`tel:${contactInfo.phoneHref}`}
          className="inline-flex items-center gap-2 rounded-sm border border-espresso/20 px-6 py-3.5 text-sm font-medium text-espresso hover:bg-espresso hover:text-ivory transition-colors w-full sm:w-auto justify-center"
        >
          <Phone size={16} />
          Call +91 99251 72388
        </a>
      </div>

      <div className="mt-8 flex items-center justify-center gap-2 text-xs text-stone">
        <MapPin size={13} className="text-bronze" />
        <span>Opposite Gopal Nagar, Lal Bahadur Shastri Road, Bardoli, Gujarat</span>
      </div>

      <div className="mt-8">
        <Button href="/" variant="outline" size="sm">
          Return Home
        </Button>
      </div>
    </div>
  );
}

function StepShell({
  title,
  hint,
  children,
}: {
  title: string;
  hint: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="font-display text-2xl text-espresso sm:text-3xl">
        {title}
      </h2>
      <p className="mt-1 text-sm text-mocha">{hint}</p>
      <div className="mt-6">{children}</div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-6 py-3.5">
      <dt className="text-[0.7rem] font-medium uppercase tracking-[0.16em] text-stone">
        {label}
      </dt>
      <dd className="text-right text-sm text-espresso font-medium">{value}</dd>
    </div>
  );
}

function BookingField({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 block text-[0.7rem] font-medium uppercase tracking-[0.16em] text-espresso/70"
      >
        {label}
      </label>
      {children}
      {error && <p className="mt-1 text-xs text-red-700">{error}</p>}
    </div>
  );
}

function bInput(hasError: boolean) {
  return cn(
    "w-full border bg-ivory px-4 py-3 text-sm text-espresso focus:outline-none focus:ring-1",
    hasError
      ? "border-red-600 focus:border-red-600 focus:ring-red-600"
      : "border-espresso/20 focus:border-bronze focus:ring-bronze"
  );
}
