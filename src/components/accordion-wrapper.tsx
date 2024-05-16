"use client";

import { useState } from "react";
import { Accordion } from "./accordion";

export function AccordionWrapper() {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <div className="flex flex-col gap-6 flex-1">
      <Accordion
        isActive={activeIndex === 1}
        onClick={() => setActiveIndex(1)}
        title="SITES E LANDING PAGES"
        text="Somos uma agência que realiza trabalhos freelancers, nosso funcionários estão prontos e capacitados para ajudar a tornar suas ideias em realidade."
      />
      <Accordion
        isActive={activeIndex === 2}
        onClick={() => setActiveIndex(2)}
        title="EXPERIÊNCIA DO USUÁRIO"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit mollitia facere earum, id culpa alias. Obcaecati accusamus"
      />
      <Accordion
        isActive={activeIndex === 3}
        onClick={() => setActiveIndex(3)}
        title="MANUTENÇÃO E IMPLEMENTAÇÃO DE FEATURES"
        text="earum reiciendis necessitatibus ipsa! Dolor ab fugit quasi numquam aliquid harum, maiores totam."
      />
    </div>
  );
}
