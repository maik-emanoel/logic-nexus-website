import { Section } from "../section";
import { AccordionWrapper } from "../accordion-wrapper";
import Image from "next/image";

export function Services() {
  return (
    <Section className="bg-secondary h-screen max-h-[780px] px-5" id="services">
      <div className="max-w-5xl mx-auto pt-[calc(80px+72px)] flex gap-9 lg:justify-center">
        <div className="space-y-12">
          <div className="space-y-4 max-w-md lg:text-center lg:mx-auto text-white">
            <h2 className="font-bold text-3xl uppercase">Nossos serviços</h2>
            <p className="opacity-80 text-lg">
              Apesar de recente nossa empresa busca oferecer serviços inovadores
              e de qualidade!
            </p>
          </div>

          <AccordionWrapper />
        </div>

        <Image
          src="/ilustration-2.png"
          alt="Ilustração"
          width={509}
          height={318}
          className="max-w-[509px] w-full h-full mt-14 lg:hidden"
          priority
        />
      </div>
    </Section>
  );
}
