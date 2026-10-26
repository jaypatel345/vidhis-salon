"use client";

import { useState } from "react";
import { Check, MessageCircle, Send } from "lucide-react";
import { Button } from "./Button";
import { contactInfo } from "@/data/site";
import { cn } from "@/lib/utils";

type Fields = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};
type Errors = Partial<Record<keyof Fields, string>>;

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRe = /^[+()\-\s0-9]{7,18}$/;

export function ContactForm() {
  const [values, setValues] = useState<Fields>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  function validate(v: Fields): Errors {
    const e: Errors = {};
    if (!v.name.trim()) e.name = "Please enter your name.";
    if (!v.email.trim()) e.email = "Please enter your email.";
    else if (!emailRe.test(v.email))
      e.email = "Please enter a valid email address.";
    if (v.phone && !phoneRe.test(v.phone))
      e.phone = "Please enter a valid phone number.";
    if (!v.message.trim()) e.message = "Please tell us how we can help.";
    else if (v.message.trim().length < 5)
      e.message = "Please add a little more detail.";
    return e;
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length === 0) {
      setSubmitted(true);
    }
  }

  function update(key: keyof Fields, val: string) {
    setValues((v) => ({ ...v, [key]: val }));
    if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }));
  }

  const whatsappMessage = encodeURIComponent(
    `Hello Vidhi's Salon!\n\nName: ${values.name}\nPhone: ${values.phone || "Not provided"}\nEmail: ${values.email}\nSubject: ${values.subject || "Salon Inquiry"}\nMessage: ${values.message}`
  );

  if (submitted) {
    return (
      <div className="flex flex-col items-start gap-4 border border-espresso/15 bg-cream/60 p-8">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-bronze/15 text-bronze">
          <Check size={24} />
        </span>
        <h3 className="font-display text-2xl text-espresso">
          Thank you, {values.name.split(" ")[0]}.
        </h3>
        <p className="text-sm leading-relaxed text-mocha">
          We have received your details! For fastest confirmation, you can send
          this message directly to Vidhi&apos;s Salon on WhatsApp with one click
          below:
        </p>

        <div className="flex flex-wrap gap-3 pt-2">
          <a
            href={`https://wa.me/${contactInfo.whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-sm bg-[#25D366] px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white shadow transition-transform hover:scale-105"
          >
            <MessageCircle size={16} />
            Send via WhatsApp to Salon
          </a>
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              setSubmitted(false);
              setValues({
                name: "",
                email: "",
                phone: "",
                subject: "",
                message: "",
              });
            }}
          >
            Send another message
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <Field label="Full name *" error={errors.name} htmlFor="c-name">
        <input
          id="c-name"
          type="text"
          autoComplete="name"
          value={values.name}
          onChange={(e) => update("name", e.target.value)}
          className={inputCls(!!errors.name)}
          placeholder="e.g. Kinjal Patel"
        />
      </Field>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Email address *" error={errors.email} htmlFor="c-email">
          <input
            id="c-email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(e) => update("email", e.target.value)}
            className={inputCls(!!errors.email)}
            placeholder="you@example.com"
          />
        </Field>

        <Field label="Phone number" error={errors.phone} htmlFor="c-phone">
          <input
            id="c-phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={(e) => update("phone", e.target.value)}
            className={inputCls(!!errors.phone)}
            placeholder="+91 99251 72388"
          />
        </Field>
      </div>

      <Field label="Subject / Service interested in" htmlFor="c-subject">
        <input
          id="c-subject"
          type="text"
          value={values.subject}
          onChange={(e) => update("subject", e.target.value)}
          className={inputCls(false)}
          placeholder="e.g. Bridal Makeover inquiry / Keratin Treatment / Haircut"
        />
      </Field>

      <Field label="Your message *" error={errors.message} htmlFor="c-msg">
        <textarea
          id="c-msg"
          rows={4}
          value={values.message}
          onChange={(e) => update("message", e.target.value)}
          className={cn(inputCls(!!errors.message), "resize-none")}
          placeholder="Tell us what date, time, or service you have in mind..."
        />
      </Field>

      <div className="pt-2 flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
        <Button type="submit" size="md">
          <Send size={15} /> Submit Inquiry
        </Button>
        <span className="text-xs text-stone">
          Or call directly:{" "}
          <a
            href={`tel:${contactInfo.phoneHref}`}
            className="text-espresso font-medium underline"
          >
            {contactInfo.phoneDisplay}
          </a>
        </span>
      </div>
    </form>
  );
}

function Field({
  label,
  error,
  htmlFor,
  children,
}: {
  label: string;
  error?: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <label
        htmlFor={htmlFor}
        className="block text-[0.7rem] font-medium uppercase tracking-[0.16em] text-espresso"
      >
        {label}
      </label>
      {children}
      {error && <p className="text-xs text-red-700">{error}</p>}
    </div>
  );
}

function inputCls(hasError: boolean) {
  return cn(
    "w-full border bg-ivory px-4 py-3 text-sm text-espresso placeholder:text-stone/50 transition-colors focus:outline-none focus:ring-1",
    hasError
      ? "border-red-600 focus:border-red-600 focus:ring-red-600"
      : "border-espresso/20 focus:border-bronze focus:ring-bronze"
  );
}
