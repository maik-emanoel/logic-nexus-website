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
            <a
              href="https://wa.me/558699503658?text=Ol%C3%A1,%20gostaria%20de%20fazer%20um%20servi%C3%A7o%20com%20voc%C3%AAs,%20poderiam%20me%20dar%20mais%20especifica%C3%A7%C3%B5es%C2%A0do%C2%A0trabalho?"
              target="_blank"
              className="block bg-white rounded-full p-1.5 transition-transform duration-300 hover:-translate-y-1"
            >
              <WhatsappLogo size={20} className="text-secondary" />
            </a>
          </div>
        </div>
      </footer>
    </Section>
  );
}
