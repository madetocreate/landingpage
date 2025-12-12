"use client";

import { useState, useEffect, useRef } from "react";
import { useLocale } from "@/lib/locale-context";

type LangConfig = {
  code: string;
  label: string;
  flag: string;
};

const LANGUAGES: LangConfig[] = [
  { code: "de", label: "Deutsch", flag: "🇩🇪" },
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "es", label: "Español", flag: "🇪🇸" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "it", label: "Italiano", flag: "🇮🇹" },
];

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLocale();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);

  const current =
    LANGUAGES.find((lang) => lang.code === locale) ?? LANGUAGES[0];

  const others = LANGUAGES.filter((lang) => lang.code !== current.code);

  useEffect(() => {
    if (!open) return;

    function handleClick(event: MouseEvent) {
      const node = rootRef.current;
      if (!node) return;
      if (node.contains(event.target as Node)) {
        return;
      }
      setOpen(false);
    }

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  return (
    <div ref={rootRef} className="relative flex items-center">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex h-6 w-6 items-center justify-center text-sm transition-transform hover:scale-110"
        aria-label={`Sprache wechseln: ${current.label}`}
      >
        <span className="leading-none">{current.flag}</span>
      </button>

      <div
        className={`absolute left-1/2 top-full mt-1 flex -translate-x-1/2 flex-col items-center gap-1 transition-all duration-200 ${
          open
            ? "pointer-events-auto opacity-100 translate-y-0"
            : "pointer-events-none opacity-0 -translate-y-1"
        }`}
      >
        {others.map((lang, index) => (
          <button
            key={lang.code}
            type="button"
            onClick={() => {
              setLocale(lang.code as any);
              setOpen(false);
            }}
            className="flex h-8 w-8 items-center justify-center text-base transition-transform hover:-translate-y-0.5 hover:scale-105"
            style={{ transitionDelay: open ? `${index * 40}ms` : "0ms" }}
            aria-label={lang.label}
          >
            <span className="leading-none">{lang.flag}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
