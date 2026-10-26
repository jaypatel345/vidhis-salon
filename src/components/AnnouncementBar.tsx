import Link from "next/link";
import { contactInfo } from "@/data/site";
import { Star, Phone } from "lucide-react";

export function AnnouncementBar() {
  return (
    <div className="bg-espresso text-ivory">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-3 px-4 py-2 text-center text-[0.7rem] font-medium tracking-[0.16em] sm:px-8 sm:text-xs">
        <div className="flex items-center gap-2 mx-auto sm:mx-0">
          <span className="inline-flex items-center gap-1 rounded bg-champagne/20 px-1.5 py-0.5 text-[0.65rem] font-semibold text-champagne">
            <Star size={11} className="fill-champagne text-champagne" />
            {contactInfo.rating.score} ★
          </span>
          <span className="text-ivory/90 uppercase tracking-[0.18em]">
            Vidhi&apos;s Salon · Opp. Gopal Nagar, Lal Bahadur Shastri Rd, Bardoli
          </span>
        </div>

        <div className="hidden items-center gap-4 sm:flex">
          <a
            href={`tel:${contactInfo.phoneHref}`}
            className="flex items-center gap-1.5 text-champagne transition-colors hover:text-ivory"
          >
            <Phone size={12} />
            <span>{contactInfo.phoneDisplay}</span>
          </a>
          <span aria-hidden className="text-bronze">
            ·
          </span>
          <a
            href={contactInfo.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ivory/80 link-underline hover:text-champagne uppercase text-[0.68rem] tracking-[0.18em]"
          >
            WhatsApp Us
          </a>
          <span aria-hidden className="text-bronze">
            ·
          </span>
          <Link
            href="/booking"
            className="text-champagne link-underline uppercase text-[0.68rem] tracking-[0.18em]"
          >
            Book Visit
          </Link>
        </div>
      </div>
    </div>
  );
}
