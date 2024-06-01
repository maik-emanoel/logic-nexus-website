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
              href="https://wa.me/558699503658?text=Ol%C3%A1!%20%F0%9F%91%8B%0A%0AObrigado%20por%20entrar%20em%20contato%20com%20a%20LogicNexus!%20%F0%9F%9A%80%20Nossa%20equipe%20est%C3%A1%20dispon%C3%ADvel%20de%20segunda%20a%20Domingo,%20das%207h%20%C3%A0s%2021h.%20No%20momento,%20n%C3%A3o%20podemos%20responder%20imediatamente,%20mas%20assim%20que%20poss%C3%ADvel,%20retornaremos%20seu%20contato."
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
