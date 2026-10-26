import type { Metadata } from "next";
import { Check } from "lucide-react";
import { Container, Section } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { SmartImage } from "@/components/SmartImage";
import { CTASection } from "@/components/CTASection";
import { unsplash, photo } from "@/data/images";
import { stylists } from "@/data/stylists";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Our Stylists",
  description:
    "Meet the Maison Aurélle team — a small, specialist group of colourists and stylists. Sample brand profiles with editable biographies.",
  alternates: { canonical: "/stylists" },
};

export default function StylistsPage() {
  return (
    <>
      {/* Hero */}
      <Section>
        <Container>
          <SectionHeading
            as="h1"
            align="center"
            eyebrow="The Team"
            title="The people behind the chair"
            description="A small, deliberate team — each with a distinct specialty and point of view. Everyone shown here is sample brand content with an editable biography; replace with the real team before launch."
          />
        </Container>
      </Section>

      {/* Alternating profiles */}
      <Section tone="cream" className="pt-0 sm:pt-0 lg:pt-0">
        <Container>
          <div className="space-y-20 lg:space-y-28">
            {stylists.map((s, i) => {
              const flip = i % 2 === 1;
              return (
                <Reveal
                  key={s.slug}
                  className="grid items-center gap-8 lg:grid-cols-12 lg:gap-14"
                >
                  {/* Portrait */}
                  <div className={cn("lg:col-span-5", flip && "lg:order-2")}>
                    <div className="img-zoom relative aspect-[4/5] overflow-hidden bg-sand">
                      <SmartImage
                        src={unsplash(s.image, { w: 900 })}
                        alt={`Portrait of ${s.name}, ${s.title}`}
                        fill
                        sizes="(max-width:1024px) 100vw, 40vw"
                        className="object-cover"
                      />
                      <span className="absolute left-5 top-5 font-display text-6xl text-ivory/80">
                        0{i + 1}
                      </span>
                    </div>
                  </div>

                  {/* Detail */}
                  <div className={cn("lg:col-span-7", flip && "lg:order-1")}>
                    <p className="eyebrow text-bronze">{s.title}</p>
                    <h2 className="display-3 mt-3 text-espresso">{s.name}</h2>
                    <p className="mt-5 max-w-xl leading-relaxed text-mocha">{s.bio}</p>

                    <div className="mt-7 grid gap-8 sm:grid-cols-2">
                      <div>
                        <h3 className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-stone">
                          Specialties
                        </h3>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {s.specialties.map((sp) => (
                            <span
                              key={sp}
                              className="border border-espresso/20 px-3 py-1 text-xs text-espresso"
                            >
                              {sp}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-stone">
                          Areas of expertise
                        </h3>
                        <ul className="mt-3 space-y-2">
                          {s.expertise.map((e) => (
                            <li key={e} className="flex items-center gap-2 text-sm text-mocha">
                              <Check size={14} className="text-bronze" />
                              {e}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-8">
                      <Button href="/booking">Book with {s.name.split(" ")[0]}</Button>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </Section>

      <CTASection
        image={photo.stylistWorking}
        eyebrow="Not sure who to choose?"
        title="We’ll match you with the right specialist"
        description="Select “Any available stylist” when you book and we’ll pair you with the best fit for your hair."
      />
    </>
  );
}
