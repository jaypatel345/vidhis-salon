"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import type { FAQ } from "@/data/faqs";
import { cn } from "@/lib/utils";

export function FAQAccordion({
  items,
  idPrefix = "faq",
}: {
  items: FAQ[];
  idPrefix?: string;
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-espresso/12 border-y border-espresso/12">
      {items.map((item, i) => {
        const isOpen = open === i;
        const btnId = `${idPrefix}-btn-${i}`;
        const panelId = `${idPrefix}-panel-${i}`;
        return (
          <div key={i}>
            <h3>
              <button
                id={btnId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-6 py-6 text-left"
              >
                <span className="font-display text-xl text-espresso sm:text-2xl">
                  {item.question}
                </span>
                <Plus
                  size={22}
                  aria-hidden
                  className={cn(
                    "shrink-0 text-bronze transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                    isOpen && "rotate-45"
                  )}
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              hidden={!isOpen}
              className="overflow-hidden"
            >
              <p className="max-w-3xl pb-7 text-[0.98rem] leading-relaxed text-mocha">
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
