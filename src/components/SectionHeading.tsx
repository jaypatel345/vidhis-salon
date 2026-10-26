import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
  as = "h2",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  as?: "h1" | "h2" | "h3";
  className?: string;
}) {
  const Tag = as;
  const headingSize =
    as === "h1" ? "display-1" : as === "h2" ? "display-2" : "display-3";
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
      <Tag
        className={cn(
          headingSize,
          tone === "light" ? "text-ivory" : "text-espresso"
        )}
      >
        {title}
      </Tag>
      {description && (
        <p
          className={cn(
            "mt-6 text-base leading-relaxed sm:text-lg",
            tone === "light" ? "text-ivory/75" : "text-mocha"
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
