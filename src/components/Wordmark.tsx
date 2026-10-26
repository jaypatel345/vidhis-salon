import Link from "next/link";
import { cn } from "@/lib/utils";
import { site } from "@/data/site";

export function Wordmark({
  className,
  tone = "dark",
}: {
  className?: string;
  tone?: "dark" | "light";
}) {
  return (
    <Link
      href="/"
      aria-label={`${site.name} — home`}
      className={cn("group inline-flex flex-col leading-none", className)}
    >
      <span
        className={cn(
          "font-display text-2xl font-medium tracking-tight sm:text-[1.65rem]",
          tone === "light" ? "text-ivory" : "text-espresso"
        )}
      >
        {site.name}
      </span>
      <span
        className={cn(
          "mt-1 text-[0.6rem] font-medium uppercase tracking-[0.38em]",
          tone === "light" ? "text-ivory/60" : "text-bronze"
        )}
      >
        Hair &amp; Beauty Studio · Bardoli
      </span>
    </Link>
  );
}
