"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/site";
import { Wordmark } from "./Wordmark";
import { Button } from "./Button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-ivory/90 shadow-[0_1px_0_rgba(36,29,23,0.08)] backdrop-blur-md"
          : "bg-ivory/60 backdrop-blur-sm"
      )}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-4 sm:px-8 lg:px-12"
      >
        <Wordmark />

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "link-underline text-[0.8rem] font-medium uppercase tracking-[0.16em] transition-colors",
                    active ? "text-bronze" : "text-espresso/80 hover:text-espresso"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:block">
          <Button href="/booking" size="sm">
            Book Appointment
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="inline-flex items-center justify-center p-2 text-espresso lg:hidden"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-x-0 top-[var(--nav-offset,0)] z-40 origin-top overflow-hidden bg-ivory transition-[max-height,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden",
          open ? "max-h-[100svh] opacity-100" : "pointer-events-none max-h-0 opacity-0"
        )}
      >
        <div className="flex h-[calc(100svh-4rem)] flex-col px-6 pb-10 pt-4">
          <ul className="flex flex-col divide-y divide-espresso/10">
            {navLinks.map((link, i) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "flex items-center justify-between py-5 font-display text-3xl",
                      active ? "text-bronze" : "text-espresso"
                    )}
                  >
                    {link.label}
                    <span className="text-xs font-sans text-stone">
                      0{i + 1}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="mt-auto pt-8">
            <Button href="/booking" onClick={() => setOpen(false)} className="w-full" size="lg">
              Book Appointment
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
