import { cn } from "@/lib/utils";

export function Container({
  className,
  children,
  as: Tag = "div",
}: {
  className?: string;
  children: React.ReactNode;
  as?: React.ElementType;
}) {
  return (
    <Tag className={cn("mx-auto w-full max-w-[1280px] px-6 sm:px-8 lg:px-12", className)}>
      {children}
    </Tag>
  );
}

export function Section({
  className,
  children,
  id,
  tone = "ivory",
}: {
  className?: string;
  children: React.ReactNode;
  id?: string;
  tone?: "ivory" | "cream" | "espresso";
}) {
  const tones = {
    ivory: "bg-ivory text-espresso",
    cream: "bg-cream text-espresso",
    espresso: "bg-espresso text-ivory",
  } as const;
  return (
    <section id={id} className={cn("py-20 sm:py-24 lg:py-32", tones[tone], className)}>
      {children}
    </section>
  );
}
