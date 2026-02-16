import * as React from "react";

import { cn } from "@/lib/utils";

type ButtonVariant = "default" | "outline" | "ghost" | "glow";
type ButtonSize = "default" | "lg" | "sm" | "icon";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--wave-teal)] focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:pointer-events-none disabled:opacity-60";

const variantStyles: Record<ButtonVariant, string> = {
  default:
    "bg-[var(--wave-ink)] text-white shadow-[0_20px_60px_-40px_rgba(12,18,40,0.8)] hover:translate-y-[-1px] hover:bg-[#111c38]",
  outline:
    "border border-slate-200/70 bg-white/70 text-slate-900 backdrop-blur hover:border-slate-300 hover:bg-white",
  ghost: "text-slate-600 hover:text-slate-900 hover:bg-slate-100/80",
  glow:
    "bg-gradient-to-r from-[var(--wave-red)] via-[var(--wave-teal)] to-[var(--wave-blue)] text-white shadow-[0_25px_70px_-35px_rgba(63,215,196,0.8)] hover:translate-y-[-1px]",
};

const sizeStyles: Record<ButtonSize, string> = {
  default: "h-11 px-6",
  lg: "h-12 px-7 text-base",
  sm: "h-9 px-4 text-xs",
  icon: "h-10 w-10",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => (
    <button
      ref={ref}
      className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
      {...props}
    />
  )
);
Button.displayName = "Button";
