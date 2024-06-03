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
        text="A LogicNexus é especialista em UX, oferecendo pesquisa de usuário, testes de usabilidade e design intuitivo. Nosso foco é criar soluções eficientes que aumentem a satisfação dos usuários e o sucesso dos clientes."
      />
      <Accordion
        isActive={activeIndex === 3}
        onClick={() => setActiveIndex(3)}
        title="MANUTENÇÃO E IMPLEMENTAÇÃO DE FEATURES"
        text="A LogicNexus se especializa em manutenção e implementação de features, garantindo sistemas atualizados e funcionais com novas funcionalidades e melhorias contínuas."
      />
    </div>
  );
}
