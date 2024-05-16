"use client";

import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";
import { IoMdSunny as SunIcon, IoMdMoon as MoonIcon } from "react-icons/io";
import { RiComputerLine as SystemIcon } from "react-icons/ri";
import { PiCircleNotch as CircleNotch } from "react-icons/pi";
import { cn } from "@/lib/utils";

const ANIMATION_DURATION = 300;

export function ThemeButton() {
  const [isSelectVisible, setIsSelectVisible] = useState(false);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const selectRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    function handleClickOutsideSelect(e: MouseEvent) {
      if (isSelectVisible && e.target !== selectRef.current) {
        onCloseSelect();
      }
    }

    setTimeout(() => {
      window.addEventListener("click", handleClickOutsideSelect);
    }, 100);
    return () => window.removeEventListener("click", handleClickOutsideSelect);
  }, [isSelectVisible]);

  function onCloseSelect() {
    setIsAnimatingOut(true);

    setTimeout(() => {
      setIsSelectVisible(false);
      setIsAnimatingOut(false);
    }, ANIMATION_DURATION);
  }

  if (!mounted) {
    return <CircleNotch size={24} className="animate-spin text-white" />;
  }

  return (
    <>
      <button
        onClick={() => {
          if (isSelectVisible) {
            onCloseSelect();
          }

          setIsSelectVisible(true);
        }}
        className="text-white"
      >
        {theme === "light" && <SunIcon size={24} />}
        {theme === "dark" && <MoonIcon size={24} />}
        {theme === "system" && <SystemIcon size={24} />}
      </button>

      {isSelectVisible && (
        <ul
          className={cn(
            "absolute top-14 right-52 sm:right-8 flex flex-col gap-1 rounded-md bg-white text-secondary z-[999] shadow-2xl w-32 p-1 font-medium",
            isAnimatingOut ? "animate-scale-out" : "animate-scale-in"
          )}
          ref={selectRef}
        >
          <li
            className="w-full text-end px-3 py-2 cursor-pointer hover:bg-black/10 rounded-md"
            onClick={() => {
              setTheme("light");
              onCloseSelect();
            }}
          >
            Claro
          </li>
          <li
            className="w-full text-end px-3 py-2 cursor-pointer hover:bg-black/10 rounded-md"
            onClick={() => {
              setTheme("dark");
              onCloseSelect();
            }}
          >
            Escuro
          </li>
          <li
            className="w-full text-end px-3 py-2 cursor-pointer hover:bg-black/10 rounded-md"
            onClick={() => {
              setTheme("system");
              onCloseSelect();
            }}
          >
            Sistema
          </li>
        </ul>
      )}
    </>
  );
}
