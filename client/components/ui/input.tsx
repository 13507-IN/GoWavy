import * as React from "react";

import { cn } from "@/lib/utils";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => (
    <input
      type={type}
      ref={ref}
      className={cn(
        "flex h-12 w-full rounded-none border border-[color:rgba(107,144,128,0.35)] bg-[color:rgba(246,247,235,0.9)] px-4 text-sm text-[color:var(--wave-ink)] shadow-sm backdrop-blur placeholder:text-[color:rgba(107,144,128,0.7)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--wave-teal)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--wave-cream)]",
        className
      )}
      {...props}
    />
  )
);
Input.displayName = "Input";
