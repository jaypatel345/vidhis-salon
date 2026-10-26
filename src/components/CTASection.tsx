import { SmartImage } from "./SmartImage";
import { Button } from "./Button";
import { Reveal } from "./Reveal";
import { unsplash, photo, type PhotoKey } from "@/data/images";

export function CTASection({
  image = photo.heroStyled,
  eyebrow = "Begin",
  title = "Your chair is waiting",
  description = "Book a consultation and let’s design a look that feels unmistakably you.",
  primaryHref = "/booking",
  primaryLabel = "Book an Appointment",
  secondaryHref = "/services",
  secondaryLabel = "Explore Services",
}: {
  image?: PhotoKey;
  eyebrow?: string;
  title?: string;
  description?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <SmartImage
          src={unsplash(image, { w: 2000, q: 70 })}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-espresso/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-espresso/40 to-espresso/40" />
      </div>
      <div className="mx-auto max-w-[1280px] px-6 py-28 text-center sm:px-8 lg:px-12 lg:py-36">
        <Reveal className="mx-auto max-w-2xl">
          <p className="eyebrow mb-4 text-champagne">{eyebrow}</p>
          <h2 className="display-2 text-ivory">{title}</h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-ivory/80 sm:text-lg">
            {description}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href={primaryHref} variant="light" size="lg">
              {primaryLabel}
            </Button>
            <Button
              href={secondaryHref}
              size="lg"
              className="border-ivory/40 text-ivory hover:bg-ivory hover:text-espresso"
              variant="outline"
            >
              {secondaryLabel}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
