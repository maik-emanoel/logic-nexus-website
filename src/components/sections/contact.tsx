import { ContactForm } from "../contact-form";
import { Section } from "../section";

import { FaWhatsapp as WhatsappLogo } from "react-icons/fa";

export function Contact() {
  return (
    <Section id="contact">
      <div className="max-w-5xl mx-auto w-11/12 text-primary py-[calc(40px+72px)] space-y-8">
        <div className="lg:text-center">
          <h2 className="font-bold text-3xl uppercase text-blue-brand dark:text-indigo-400">
            Contato
          </h2>
          <p className="font-medium opacity-80">Entre em contato conosco</p>
        </div>

        <ContactForm />
      </div>

      <footer className="bg-secondary py-4 px-5">
        <div className="max-w-5xl mx-auto flex items-center justify-between gap-5">
          <p className="w-fit text-xs text-white">
            COPYRIGHT © 2024 | LogicNexus Technology. Todos os direitos
            reservados{" "}
          </p>

          <div>
            <button className="bg-white rounded-full p-1.5 transition-transform duration-300 hover:-translate-y-1">
              <WhatsappLogo size={20} className="text-secondary" />
            </button>
          </div>
        </div>
      </footer>
    </Section>
  );
}
