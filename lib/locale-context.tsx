"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { Locale, getTranslations } from "./i18n";

type LocaleContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
};

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);
const LOCALE_COOKIE = "aklow_locale";

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      const langParam = urlParams.get("lang") as Locale;
      const cookieLocale = document.cookie
        .split("; ")
        .find((row) => row.startsWith(`${LOCALE_COOKIE}=`))
        ?.split("=")[1] as Locale;

      const allowed = ["de", "en", "es", "fr", "it"];
      if (langParam && allowed.includes(langParam)) return langParam;
      if (cookieLocale && allowed.includes(cookieLocale)) return cookieLocale;
    }
    return "de";
  });

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      url.searchParams.set("lang", newLocale);
      window.history.replaceState({}, "", url.toString());
    }
  };

  useEffect(() => {
    document.cookie = `${LOCALE_COOKIE}=${locale}; path=/; max-age=31536000; samesite=lax`;
  }, [locale]);

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) throw new Error("useLocale must be used within LocaleProvider");
  return context;
}

export function useTranslations() {
  const { locale } = useLocale();
  return getTranslations(locale);
}
