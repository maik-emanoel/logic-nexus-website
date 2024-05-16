import { cn } from "@/lib/utils";
import { ComponentProps, ReactNode, forwardRef } from "react";

interface SectionProps extends ComponentProps<"section"> {
  children: ReactNode;
}

export const Section = forwardRef<HTMLElement, SectionProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <section ref={ref} className={cn("min-h-fit", className)} {...props}>
        {children}
      </section>
    );
  }
);

Section.displayName = "Section";
