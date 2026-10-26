import { Container, Section } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";

export type LegalSection = { heading: string; body: string[] };

export function LegalPage({
  eyebrow,
  title,
  updated,
  intro,
  sections,
}: {
  eyebrow: string;
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <Section>
      <Container>
        <div className="mx-auto max-w-3xl">
          <SectionHeading as="h1" eyebrow={eyebrow} title={title} />
          <p className="mt-4 text-xs uppercase tracking-[0.14em] text-stone">
            Last updated: {updated}
          </p>

          <div className="mt-8 rounded-sm border border-bronze/30 bg-bronze/5 p-4 text-xs leading-relaxed text-mocha">
            This is sample, editable placeholder content provided for a website
            prototype. It is <strong>not legal advice</strong> and is not
            guaranteed to meet all applicable legal requirements. Have a qualified
            professional review and tailor this content before publishing.
          </div>

          <p className="mt-8 leading-relaxed text-mocha">{intro}</p>

          <div className="mt-10 space-y-10">
            {sections.map((s, i) => (
              <section key={s.heading}>
                <h2 className="font-display text-2xl text-espresso">
                  <span className="text-bronze">{String(i + 1).padStart(2, "0")}.</span>{" "}
                  {s.heading}
                </h2>
                <div className="mt-3 space-y-3 leading-relaxed text-mocha">
                  {s.body.map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
