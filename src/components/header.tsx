import Image from "next/image";
import { MenuButton } from "./menu-button";
import { ThemeButton } from "./theme-button";

export function Header() {
  return (
    <header className="bg-secondary shadow-xl py-3 px-5 z-[999] fixed top-0 w-full">
      <div className="flex justify-between items-center max-w-5xl mx-auto">
        <Image
          src="/logo.png"
          alt="Logo Logic Nexus - Technology"
          width={150}
          height={100}
          className="w-36 h-12 sm:w-28 sm:h-10"
        />

        <div className="flex items-center gap-3 relative">
          <ThemeButton />

          <span className="w-px h-5 bg-white"></span>

          <nav className="flex items-center gap-4 -mt-1 font-semibold text-white sm:hidden">
            <a
              href="#home"
              className="transition-opacity duration-300 hover:opacity-90"
            >
              Home
            </a>
            <a
              href="#services"
              className="transition-opacity duration-300 hover:opacity-90"
            >
              Serviços
            </a>
            <a
              href="#contact"
              className="transition-opacity duration-300 hover:opacity-90"
            >
              Contato
            </a>
          </nav>

          <MenuButton />
        </div>
      </div>
    </header>
  );
}
