import * as React from "react";

import { cn } from "@/lib/utils";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => (
    <input
      type={type}
      ref={ref}
      className={cn(
        "flex h-12 w-full rounded-full border border-slate-200/70 bg-white/80 px-4 text-sm text-slate-900 shadow-sm backdrop-blur placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--wave-teal)] focus-visible:ring-offset-2 focus-visible:ring-offset-white",
        className
      )}
      {...props}
    />
  )
);
Input.displayName = "Input";
