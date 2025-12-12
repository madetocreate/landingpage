"use client";

import React, { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { getTranslations, type Locale, locales as supportedLocales } from "./i18n";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
};

const LocaleContext = createContext<LocaleContextValue | undefined>(undefined);

function readLocaleFromEnvironment(): Locale {
  if (typeof window === "undefined") {
    return "de";
  }

  const params = new URLSearchParams(window.location.search);
  const paramLang = params.get("lang");
  if (paramLang && (supportedLocales as string[]).includes(paramLang)) {
    return paramLang as Locale;
  }

  const match = document.cookie.match(/(?:^|;\s*)simple_locale=([^;]+)/);
  const cookieLang = match?.[1];
  if (cookieLang && (supportedLocales as string[]).includes(cookieLang)) {
    return cookieLang as Locale;
  }

  return "de";
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("de");

  useEffect(() => {
    const initial = readLocaleFromEnvironment();
    setLocaleState(initial);
  }, []);

  function setLocale(next: Locale) {
    setLocaleState(next);

    if (typeof document !== "undefined") {
      document.cookie = `simple_locale=${next}; path=/; max-age=31536000`;
    }

    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      url.searchParams.set("lang", next);
      window.history.replaceState(null, "", url.toString());
    }
  }

  const value: LocaleContextValue = {
    locale,
    setLocale,
  };

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }
  return ctx;
}

export function useTranslations() {
  const { locale } = useLocale();
  return getTranslations(locale);
}
