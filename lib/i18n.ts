export type Locale = "de" | "en" | "es" | "fr" | "it";
export const locales: Locale[] = ["de", "en", "es", "fr", "it"];


type NavTranslations = {
  pricing: string;
  system: string;
  blog: string;
  docs: string;
  shop: string;
  shopAbos: string;
  shopApps: string;
};

type FooterResourcesTranslations = {
  title: string;
  community: string;
  termsOfService: string;
  changelog: string;
  reportVulnerability: string;
  supportCenter: string;
};

export type Translations = {
  nav: NavTranslations;
  footer: {
    resources: FooterResourcesTranslations;
  };
};

const translations: Record<Locale, Translations> = {
  de: {
    nav: {
      pricing: "Features",
      system: "Modernisierung",
      blog: "Blog",
      docs: "Dokumentation",
      shop: "Shop",
      shopAbos: "Abos",
      shopApps: "Apps",
    },
    footer: {
      resources: {
        title: "Resources",
        community: "Community",
        termsOfService: "Terms of service",
        changelog: "Changelog",
        reportVulnerability: "Report a vulnerability",
        supportCenter: "Support-Center",
      },
    },
  },
  en: {
    nav: {
      pricing: "Features",
      system: "Modernisation",
      blog: "Blog",
      docs: "Documentation",
      shop: "Shop",
      shopAbos: "Subscriptions",
      shopApps: "Apps",
    },
    footer: {
      resources: {
        title: "Resources",
        community: "Community",
        termsOfService: "Terms of service",
        changelog: "Changelog",
        reportVulnerability: "Report a vulnerability",
        supportCenter: "Support center",
      },
    },
  },

  es: {
    nav: {
      pricing: "Features",
      system: "Modernisation",
      blog: "Blog",
      docs: "Documentation",
      shop: "Shop",
      shopAbos: "Subscriptions",
      shopApps: "Apps",
    },
    footer: {
      resources: {
        title: "Resources",
        community: "Community",
        termsOfService: "Terms of service",
        changelog: "Changelog",
        reportVulnerability: "Report a vulnerability",
        supportCenter: "Support center",
      },
    },
  },
  fr: {
    nav: {
      pricing: "Features",
      system: "Modernisation",
      blog: "Blog",
      docs: "Documentation",
      shop: "Shop",
      shopAbos: "Subscriptions",
      shopApps: "Apps",
    },
    footer: {
      resources: {
        title: "Resources",
        community: "Community",
        termsOfService: "Terms of service",
        changelog: "Changelog",
        reportVulnerability: "Report a vulnerability",
        supportCenter: "Support center",
      },
    },
  },
  it: {
    nav: {
      pricing: "Features",
      system: "Modernisation",
      blog: "Blog",
      docs: "Documentation",
      shop: "Shop",
      shopAbos: "Subscriptions",
      shopApps: "Apps",
    },
    footer: {
      resources: {
        title: "Resources",
        community: "Community",
        termsOfService: "Terms of service",
        changelog: "Changelog",
        reportVulnerability: "Report a vulnerability",
        supportCenter: "Support center",
      },
    },
  },};

export function getTranslations(locale: Locale = "de"): Translations {
  return translations[locale];
}
