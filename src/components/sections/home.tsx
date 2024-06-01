import Image from "next/image";

import { Section } from "../section";
import { Header } from "../header";
import { Card } from "../card";

export function Home() {
  return (
    <>
      <Header />

      <Section id="home">
        <div className="max-w-5xl mx-auto text-primary pt-[calc(112px+72px)] space-y-14">
          <main className="flex items-center justify-between lg:flex-col-reverse">
            <div className="max-w-[433px] lg:max-w-none lg:text-center sm:px-5">
              <h1 className="font-semibold text-4xl mb-3 text-primary sm:text-2xl">
                Crie sua presença online <br></br> de maneira profissional
                <br></br> e memorável.
              </h1>
              <p className="font-medium text-2xl mb-12 opacity-70 lg:max-w-[400px] lg:mx-auto sm:text-xl">
                Destaque-se na web. Juntos, podemos fazer isso!
              </p>

              <button className="h-14 w-full rounded-lg bg-secondary font-bold text-xl text-white shadow-lg transition-opacity duration-300 sm:text-lg hover:opacity-90">
                FALE CONOSCO
              </button>
            </div>

            <Image
              src="/ilustration-1.png"
              alt="Ilustração"
              width={400}
              height={400}
              className="sm:size-60"
              priority
            />
          </main>
        </div>

        <div className="bg-gradient-to-t from-secondary from-50% to-50% mt-40 px-5">
          <div className="max-w-5xl mx-auto flex justify-between items-center gap-4 pb-8 lg:flex-wrap lg:justify-center">
            <Card
              title="Criação de Sites"
              text="Transformamos suas ideias em landing pages ou sites institucionais"
            />
            <Card
              title="UI/UX Design"
              text="Fazemos o design da sua marca!"
              className="bg-secondary border-white text-white"
            />
            <Card
              title="Manutenção em códigos"
              text="Oferecemos suporte ao seu site"
            />
          </div>
        </div>
      </Section>
    </>
  );
}
