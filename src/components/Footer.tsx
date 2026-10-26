import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { Wordmark } from "./Wordmark";
import {
  contactInfo,
  openingHours,
  socialLinks,
  navLinks,
  site,
} from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-espresso text-ivory">
      <div className="mx-auto max-w-[1280px] px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Wordmark tone="light" />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-ivory/65">
              {site.shortDescription}
            </p>
            <div className="mt-6 flex gap-5">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium uppercase tracking-[0.16em] text-ivory/70 link-underline hover:text-champagne"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div className="lg:col-span-2">
            <h3 className="text-[0.7rem] font-sans font-medium uppercase tracking-[0.22em] text-champagne">
              Explore
            </h3>
            <ul className="mt-5 space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-ivory/70 transition-colors hover:text-ivory"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/faq"
                  className="text-sm text-ivory/70 transition-colors hover:text-ivory"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Visit */}
          <div className="lg:col-span-3">
            <h3 className="text-[0.7rem] font-sans font-medium uppercase tracking-[0.22em] text-champagne">
              Visit
            </h3>
            <ul className="mt-5 space-y-4 text-sm text-ivory/70">
              <li className="flex gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-bronze" />
                <span>
                  {contactInfo.addressLine1}
                  <br />
                  {contactInfo.addressLine2}
                </span>
              </li>
              <li className="flex gap-3">
                <Phone size={16} className="mt-0.5 shrink-0 text-bronze" />
                <a href={`tel:${contactInfo.phoneHref}`} className="hover:text-ivory">
                  {contactInfo.phoneDisplay}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail size={16} className="mt-0.5 shrink-0 text-bronze" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-ivory">
                  {contactInfo.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div className="lg:col-span-3">
            <h3 className="text-[0.7rem] font-sans font-medium uppercase tracking-[0.22em] text-champagne">
              Opening Hours
            </h3>
            <ul className="mt-5 space-y-2 text-sm">
              {openingHours.map((o) => (
                <li
                  key={o.day}
                  className="flex items-center justify-between gap-4 text-ivory/70"
                >
                  <span>{o.day}</span>
                  <span className="text-ivory/50">{o.hours}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 h-px w-full bg-ivory/10" />

        <div className="mt-8 flex flex-col items-start justify-between gap-4 text-xs text-ivory/50 sm:flex-row sm:items-center">
          <p>
            © {year} {site.name}. Sample brand — demo content for
            demonstration only.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-ivory">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-ivory">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
