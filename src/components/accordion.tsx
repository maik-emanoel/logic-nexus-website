import { cn } from "@/lib/utils";
import { ComponentProps, forwardRef } from "react";

interface AccordionProps extends ComponentProps<"div"> {
  isActive: boolean;
  title: string;
  text: string;
}

export const Accordion = forwardRef<HTMLDivElement, AccordionProps>(
  ({ isActive, text, title, onClick, ...props }, ref) => {
    return (
      <div
        className={cn(
          "relative bg-white border border-white max-w-[530px] w-full h-16 rounded-lg px-4 pb-4 overflow-hidden transition-all duration-300 dark:bg-indigo-100",
          isActive && "h-fit pt-20"
        )}
        {...props}
        ref={ref}
        onClick={onClick}
      >
        <div className="absolute inset-0 z-50 h-[63px] px-4 text-center bg-secondary text-white flex items-center justify-center rounded-lg cursor-pointer select-none transition-all duration-300 hover:brightness-110">
          <span className="line-clamp-2">{title}</span>
        </div>

        <p className="opacity-80 text-center text-white dark:text-black">
          {text}
        </p>
      </div>
    );
  }
);

Accordion.displayName = "Accordion";
