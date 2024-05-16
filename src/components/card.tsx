import { cn } from "@/lib/utils";
import { ComponentProps, forwardRef } from "react";

interface CardProps extends ComponentProps<"div"> {
  title: string;
  text: string;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ text, title, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "w-[265px] h-[200px] bg-background border-[2px] border-secondary rounded-xl pt-10 px-4 text-center text-primary space-y-4 shadow-xl transition-all duration-300 hover:shadow-none hover:scale-95 cursor-default",
          className
        )}
        {...props}
      >
        <h3 className="font-semibold text-xl">{title}</h3>
        <p className="text-lg opacity-80 leading-tight">{text}</p>
      </div>
    );
  }
);

Card.displayName = "Card";
