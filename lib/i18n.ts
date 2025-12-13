export type Locale = "de" | "en" | "es" | "fr" | "it";

export const locales: Locale[] = ["de", "en", "es", "fr", "it"];

export type Translations = {
  nav: {
    system: string;
    assistants: string;
    memory: string;
    apps: string;
    useCases: string;
    pricing: string;
    blog: string;
    docs: string;
    support: string;
    about: string;
    roadmap: string;
  };
  header: {
    login: string;
    getStarted: string;
  };
  footer: {
    tagline: string;
    product: string;
    resources: string;
    company: string;
    legal: string;
    links: {
      system: string;
      assistants: string;
      memory: string;
      apps: string;
      useCases: string;
      pricing: string;
      blog: string;
      docs: string;
      support: string;
      about: string;
      roadmap: string;
      privacy: string;
      dataFlow: string;
      contact: string;
    };
  };
};

const messages: Record<Locale, Translations> = {
  de: {
    nav: {
      system: "AI-Modernisierung",
      assistants: "Module",
      memory: "Memory",
      apps: "Integrationen",
      useCases: "Use-Cases",
      pricing: "Preise",
      blog: "Blog",
      docs: "Docs",
      support: "Support",
      about: "Über uns",
      roadmap: "Roadmap",
    },
    header: {
      login: "Login",
      getStarted: "Check starten",
    },
    footer: {
      tagline: "Den Kopf frei. Der Rest in AKLOW.",
      product: "Produkt",
      resources: "Ressourcen",
      company: "Unternehmen",
      legal: "Rechtliches",
      links: {
        system: "AI-Modernisierung",
        assistants: "Module",
        memory: "Memory",
        apps: "Integrationen",
        useCases: "Use-Cases",
        pricing: "Preise",
        blog: "Blog",
        docs: "Dokumentation",
        support: "Support",
        about: "Über uns",
        roadmap: "Vision & Roadmap",
        privacy: "Datenschutz",
        dataFlow: "Datenfluss & Kontrolle",
        contact: "Kontakt",
      },
    },
  },
  en: {
    nav: {
      system: "AI modernization",
      assistants: "Modules",
      memory: "Memory",
      apps: "Integrations",
      useCases: "Use cases",
      pricing: "Pricing",
      blog: "Blog",
      docs: "Docs",
      support: "Support",
      about: "About",
      roadmap: "Roadmap",
    },
    header: {
      login: "Login",
      getStarted: "Start check",
    },
    footer: {
      tagline: "Clear head. The rest in AKLOW.",
      product: "Product",
      resources: "Resources",
      company: "Company",
      legal: "Legal",
      links: {
        system: "AI modernization",
        assistants: "Modules",
        memory: "Memory",
        apps: "Integrations",
        useCases: "Use cases",
        pricing: "Pricing",
        blog: "Blog",
        docs: "Docs",
        support: "Support",
        about: "About",
        roadmap: "Roadmap",
        privacy: "Privacy",
        dataFlow: "Data flow & control",
        contact: "Contact",
      },
    },
  },
  es: {
    nav: {
      system: "Modernización IA",
      assistants: "Módulos",
      memory: "Memoria",
      apps: "Integraciones",
      useCases: "Casos de uso",
      pricing: "Precios",
      blog: "Blog",
      docs: "Docs",
      support: "Soporte",
      about: "Acerca de",
      roadmap: "Hoja de ruta",
    },
    header: {
      login: "Acceder",
      getStarted: "Iniciar check",
    },
    footer: {
      tagline: "Cabeza libre. El resto en AKLOW.",
      product: "Producto",
      resources: "Recursos",
      company: "Empresa",
      legal: "Legal",
      links: {
        system: "Modernización IA",
        assistants: "Módulos",
        memory: "Memoria",
        apps: "Integraciones",
        useCases: "Casos de uso",
        pricing: "Precios",
        blog: "Blog",
        docs: "Docs",
        support: "Soporte",
        about: "Acerca de",
        roadmap: "Hoja de ruta",
        privacy: "Privacidad",
        dataFlow: "Flujo de datos",
        contact: "Contacto",
      },
    },
  },
  fr: {
    nav: {
      system: "Modernisation IA",
      assistants: "Modules",
      memory: "Mémoire",
      apps: "Intégrations",
      useCases: "Cas d'usage",
      pricing: "Tarifs",
      blog: "Blog",
      docs: "Docs",
      support: "Support",
      about: "À propos",
      roadmap: "Roadmap",
    },
    header: {
      login: "Connexion",
      getStarted: "Démarrer le check",
    },
    footer: {
      tagline: "Esprit libre. Le reste dans AKLOW.",
      product: "Produit",
      resources: "Ressources",
      company: "Entreprise",
      legal: "Légal",
      links: {
        system: "Modernisation IA",
        assistants: "Modules",
        memory: "Mémoire",
        apps: "Intégrations",
        useCases: "Cas d'usage",
        pricing: "Tarifs",
        blog: "Blog",
        docs: "Docs",
        support: "Support",
        about: "À propos",
        roadmap: "Roadmap",
        privacy: "Confidentialité",
        dataFlow: "Flux de données",
        contact: "Contact",
      },
    },
  },
  it: {
    nav: {
      system: "Modernizzazione IA",
      assistants: "Moduli",
      memory: "Memoria",
      apps: "Integrazioni",
      useCases: "Casi d'uso",
      pricing: "Prezzi",
      blog: "Blog",
      docs: "Docs",
      support: "Supporto",
      about: "Chi siamo",
      roadmap: "Roadmap",
    },
    header: {
      login: "Accedi",
      getStarted: "Avvia check",
    },
    footer: {
      tagline: "Testa libera. Il resto in AKLOW.",
      product: "Prodotto",
      resources: "Risorse",
      company: "Azienda",
      legal: "Legale",
      links: {
        system: "Modernizzazione IA",
        assistants: "Moduli",
        memory: "Memoria",
        apps: "Integrazioni",
        useCases: "Casi d'uso",
        pricing: "Prezzi",
        blog: "Blog",
        docs: "Docs",
        support: "Supporto",
        about: "Chi siamo",
        roadmap: "Roadmap",
        privacy: "Privacy",
        dataFlow: "Flusso dati",
        contact: "Contatto",
      },
    },
  },
};

export function getTranslations(locale: Locale): Translations {
  return messages[locale] || messages.de;
}
