import * as React from "react";

import { cn } from "@/lib/utils";

export type BadgeProps = React.HTMLAttributes<HTMLSpanElement>;

export function Badge({ className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-slate-200/70 bg-white/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-600 backdrop-blur",
        className
      )}
      {...props}
    />
  );
}
