import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function Wrapper({
  className,
  children,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "grid grid-cols-[1fr_65ch_1fr] gap-2 [&>*]:col-start-2",
        className
      )}
    >
      {children}
    </div>
  );
}
