"use client";

import { cn } from "@/lib/utils";
import { MouseEvent, useEffect, useRef, useState } from "react";
import { IoClose as XIcon } from "react-icons/io5";

const ANIMATION_DURATION = 300;

export function MenuButton() {
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    document.body.style.overflowY = isMenuExpanded ? "hidden" : "";

    return () => {
      document.body.style.overflowY = "";
    };
  }, [isMenuExpanded]);

  function onOpenMenu() {
    setIsMenuExpanded(true);
  }

  function onCloseMenu() {
    setIsAnimatingOut(true);
    setTimeout(() => {
      setIsMenuExpanded(false);
      setIsAnimatingOut(false);
    }, ANIMATION_DURATION);
  }

  function handleClickOutsideMenu(e: MouseEvent<HTMLDivElement>) {
    if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
      onCloseMenu();
    }
  }

  return (
    <>
      <div
        className="hidden flex-col items-end gap-1 cursor-pointer sm:flex"
        onClick={onOpenMenu}
      >
        <span className="block h-0.5 bg-white w-6 rounded-md" />
        <span className="block h-0.5 bg-white w-4 rounded-md" />
        <span className="block h-0.5 bg-white w-2 rounded-md" />
      </div>

      {isMenuExpanded && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[999]"
          onClick={handleClickOutsideMenu}
        >
          <div
            className={cn(
              "max-w-96 w-4/5 h-fit bg-background ml-auto pt-6 px-5 pb-28 flex flex-col gap-16 items-end shadow-2xl rounded-bl-3xl",
              isAnimatingOut ? "animate-slide-out" : "animate-slide-in"
            )}
            ref={menuRef}
          >
            <XIcon
              size={36}
              className="ml-auto"
              onClick={onCloseMenu}
            />

            <div className="flex flex-col gap-6 items-end font-semibold uppercase text-xl">
              <a href="#home" onClick={onCloseMenu}>
                Home
              </a>
              <a href="#services" onClick={onCloseMenu}>
                Serviços
              </a>
              <a href="#contact" onClick={onCloseMenu}>
                Contato
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
