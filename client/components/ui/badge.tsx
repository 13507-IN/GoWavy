import * as React from "react";

import { cn } from "@/lib/utils";

export type BadgeProps = React.HTMLAttributes<HTMLSpanElement>;

export function Badge({ className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-none border border-[color:rgba(107,144,128,0.35)] bg-[color:rgba(246,247,235,0.9)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[color:var(--wave-teal)] backdrop-blur",
        className
      )}
      {...props}
    />
  );
}
