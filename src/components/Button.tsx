import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "ghost" | "light";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-sans font-medium uppercase tracking-[0.18em] text-xs transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] disabled:opacity-50 disabled:pointer-events-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-bronze";

const variants: Record<Variant, string> = {
  primary:
    "bg-espresso text-ivory border border-espresso hover:bg-bronze hover:border-bronze",
  outline:
    "bg-transparent text-espresso border border-espresso/40 hover:border-espresso hover:bg-espresso hover:text-ivory",
  ghost: "bg-transparent text-espresso border border-transparent hover:text-bronze",
  light:
    "bg-ivory text-espresso border border-ivory hover:bg-transparent hover:text-ivory",
};

const sizes: Record<Size, string> = {
  sm: "px-5 py-2.5",
  md: "px-7 py-3.5",
  lg: "px-9 py-4",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsLink = CommonProps & {
  href: string;
} & Omit<React.ComponentProps<typeof Link>, "href" | "className">;

type ButtonAsButton = CommonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className"> & {
    href?: undefined;
  };

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const { variant = "primary", size = "md", className, children } = props;
  const classes = cn(base, variants[variant], sizes[size], className);

  if ("href" in props && props.href) {
    const { href, variant: _v, size: _s, className: _c, children: _ch, ...rest } = props;
    void _v; void _s; void _c; void _ch;
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  const { variant: _v, size: _s, className: _c, children: _ch, href: _h, ...rest } =
    props as ButtonAsButton;
  void _v; void _s; void _c; void _ch; void _h;
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
