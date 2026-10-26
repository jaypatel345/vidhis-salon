import Link from "next/link";

export function AnnouncementBar() {
  return (
    <div className="bg-espresso text-ivory">
      <div className="mx-auto flex max-w-[1280px] items-center justify-center gap-2 px-6 py-2.5 text-center text-[0.7rem] font-medium uppercase tracking-[0.22em] sm:text-xs">
        <span className="text-ivory/85">
          New guest offer — 15% off your first color service
        </span>
        <span aria-hidden className="hidden text-bronze sm:inline">
          ·
        </span>
        <Link
          href="/services"
          className="hidden text-champagne link-underline sm:inline"
        >
          View services
        </Link>
      </div>
    </div>
  );
}
