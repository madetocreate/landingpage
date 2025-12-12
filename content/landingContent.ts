export type CTA = {
  label: string;
  href?: string;
};

export type LandingContent = {
  hero: {
    title: string;
    subtitle: string;
    ctaPrimary: CTA;
    ctaSecondary?: CTA;
    trustHint: string;
  };
  pain: {
    title: string;
    subtitle: string;
    bullets: string[];
  };
  solution: {
    title: string;
    text: string;
  };
  jetbot: {
    title: string;
    subtitle: string;
    steps: string[];
    ctaPrimary: CTA;
    ctaSecondary?: CTA;
  };
  modules: {
    title: string;
    subtitle: string;
    items: {
      id: string;
      title: string;
      description: string;
    }[];
  };
  howItWorks: {
    title: string;
    steps: {
      title: string;
      description: string;
    }[];
  };
  audience: {
    title: string;
    subtitle: string;
    items: {
      id: string;
      title: string;
      description: string;
    }[];
  };
  pricing: {
    title: string;
    subtitle: string;
    trialHint: string;
    plans: {
      id: string;
      name: string;
      description: string;
    }[];
    frequencyLabels: {
      monthly: string;
      annually: string;
    };
    tiers: {
      id: string;
      name: string;
      badge?: string;
      description: string;
      href: string;
      featured: boolean;
      priceMonthly: string;
      priceAnnually: string;
      currency: string;
      billedMonthlyText: string;
      billedAnnuallyText: string;
      buttonLabel: string;
      highlights: string[];
    }[];
    comparison: {
      ariaLabel: string;
      sections: {
        name: string;
        features: {
          name: string;
          tiers: {
            [key: string]: string | boolean;
          };
        }[];
      }[];
      yesLabel: string;
      noLabel: string;
    };
    enterprise: {
      eyebrow: string;
      title: string;
      setupFeeAmount: string;
      setupFeeLabel: string;
      monthlyAmount: string;
      monthlyLabel: string;
      checklist: string[];
      primaryCta: CTA;
      secondaryCta: CTA;
    };
  };
  trust: {
    title: string;
    bullets: string[];
  };
  faq: {
    title: string;
    items: {
      question: string;
      answer: string;
    }[];
  };
  blog: {
    title: string;
    subtitle: string;
    posts: {
      id: number;
      title: string;
      href: string;
      description: string;
      imageUrl: string;
      date: string;
      datetime: string;
      category: {
        title: string;
        href: string;
      };
      author: {
        name: string;
        role: string;
        href: string;
        imageUrl: string;
      };
    }[];
  };
  featuresPage: {
    eyebrow: string;
    title: string;
    subtitle: string;
    image: {
      src: string;
      alt: string;
    };
    features: {
      key: string;
      name: string;
      description: string;
      iconKey: string;
    }[];
    story: {
      eyebrow: string;
      title: string;
      paragraphsLeft: string[];
      paragraphsRight: string[];
      cta: CTA;
      image: {
        src: string;
        alt: string;
      };
    };
    bento: {
      eyebrow: string;
      title: string;
      cards: {
        key: string;
        section: string;
        title: string;
        description: string;
        imageUrl: string;
        imageAlt: string;
      }[];
    };
  };
  aboutPage: {
    hero: {
      eyebrow: string;
      title: string;
      description: string;
      images: {
        key: string;
        src: string;
        alt: string;
      }[];
    };
    mission: {
      title: string;
      lead: string;
      body: string;
      stats: {
        label: string;
        value: string;
      }[];
    };
    imageSection: {
      imageUrl: string;
      imageAlt: string;
    };
    values: {
      title: string;
      subtitle: string;
      items: {
        name: string;
        description: string;
      }[];
    };
    logoCloud: {
      title: string;
      logos: {
        name: string;
        src: string;
        alt: string;
      }[];
    };
    team: {
      title: string;
      subtitle: string;
      members: {
        name: string;
        role: string;
        imageUrl: string;
      }[];
    };
  };
};

export const landingContent: LandingContent = {
  hero: {
    title: "Dein KI-Modernisierungspartner für KMU – mit eigener Plattform.",
    subtitle:
      "Wir bringen Ordnung in Inbox, Dokumente, Support und Telefon – und zeigen dir in wenigen Minuten, wo KI dir heute schon Arbeit abnimmt.",
    ctaPrimary: {
      label: "KI-Potenzial-Check starten",
      href: "#ai-potentials",
    },
    ctaSecondary: {
      label: "Demo buchen",
      href: "#kontakt",
    },
    trustHint: "DSGVO-konform, EU-Hosting, ohne Token-Chaos.",
  },
  pain: {
    title: "Dein Alltag ist voll. Deine Tools helfen nicht wirklich.",
    subtitle:
      "Du verbringst deine Zeit mit E-Mails, Rückrufen, Dateien und Nachfragen – statt mit deinem eigentlichen Geschäft.",
    bullets: [
      "Täglich zu viele Mails und Anfragen",
      "Dokumente überall verteilt – niemand findet etwas",
      "Kunden rufen an, wenn niemand Zeit hat",
      "Tools wie Outlook, WordPress, Shopify und Co. arbeiten nicht zusammen",
    ],
  },
  solution: {
    title: "Wir modernisieren dein Unternehmen mit KI – ohne Dashboard-Zirkus.",
    text: "Unsere Plattform verbindet deine bestehenden Tools, denkt mit und erledigt Routinearbeit automatisch. Du steuerst alles über Chat oder Telefon – in normaler Sprache.",
  },
  jetbot: {
    title: "Finde in wenigen Minuten heraus, was KI bei dir heute schon übernehmen kann.",
    subtitle:
      "Unser JetBot stellt dir ein paar Fragen zu deinem Alltag und zeigt dir deine größten KI-Potenziale – ohne Technik-Blabla.",
    steps: [
      "Du erzählst kurz, was du machst und womit du arbeitest.",
      "JetBot analysiert deine Antworten und berechnet dein KI-Potenzial.",
      "Du bekommst konkrete Vorschläge: welche Module dir sofort Zeit sparen.",
    ],
    ctaPrimary: {
      label: "AI-Potentials-Analyse starten",
      href: "#ai-potentials",
    },
    ctaSecondary: {
      label: "Ergebnis als Angebot erhalten",
      href: "#kontakt",
    },
  },
  modules: {
    title: "Bausteine für dein modernes Unternehmen",
    subtitle: "Starte mit einem Modul und erweitere, wenn du bereit bist.",
    items: [
      {
        id: "smartInbox",
        title: "Smart Inbox",
        description:
          "Sortiert Mails, erkennt Wichtiges, erstellt Antworten und fasst zusammen – direkt in deinem Postfach.",
      },
      {
        id: "docsAssistant",
        title: "Dokumenten-Assistent",
        description:
          "Du lädst Dateien hoch oder fotografierst Zettel – unsere KI liest, extrahiert und sortiert automatisch.",
      },
      {
        id: "webBot",
        title: "Website-Bot",
        description:
          "Beantwortet Fragen, sammelt Leads und erklärt deine Angebote – direkt auf deiner Website.",
      },
      {
        id: "phoneBot",
        title: "Telefon-Bot",
        description:
          "Geht ans Telefon, wenn niemand Zeit hat, stellt Fragen, qualifiziert Leads und dokumentiert alles.",
      },
      {
        id: "financeBuddy",
        title: "Finanz-Buddy",
        description:
          "Liest Belege, kategorisiert Ausgaben und erstellt Übersichten – ohne, dass du dich durch Zahlen kämpfen musst.",
      },
      {
        id: "procurementOptimizer",
        title: "Einkaufs-Optimierer",
        description:
          "Analysiert wiederkehrende Ausgaben und hilft dir, bessere Preise und Konditionen zu finden.",
      },
    ],
  },
  howItWorks: {
    title: "So kommst du in 3 Schritten zur KI im Alltag",
    steps: [
      {
        title: "1. KI-Potenzial-Check durchführen",
        description: "Wir lernen deinen Alltag kennen und identifizieren deine größten Hebel.",
      },
      {
        title: "2. Module auswählen",
        description:
          "Du entscheidest, ob du mit Inbox, Dokumenten, Support, Telefon oder Finanzen startest.",
      },
      {
        title: "3. Wir modernisieren deine Tools",
        description:
          "Wir verbinden deine bestehenden Systeme und richten deine Automationen ein – du steuerst alles per Sprache.",
      },
    ],
  },
  audience: {
    title: "Für wen ist unsere Plattform gemacht?",
    subtitle: "Für alle, die keine Zeit für Technik haben – aber viel Alltag zu managen.",
    items: [
      {
        id: "agencies",
        title: "Agenturen und Freelancer",
        description: "Anfragen, Briefings und Feedback – alles strukturiert statt im Chaos.",
      },
      {
        id: "coaches",
        title: "Berater und Coaches",
        description:
          "Termine, Anfragen und Nachfass-Mails laufen geordnet statt über Postfach-Zufall.",
      },
      {
        id: "smallTeams",
        title: "Kleine Teams und Dienstleister",
        description: "Weniger Zeit für Orga, mehr Zeit für Kundenarbeit.",
      },
      {
        id: "localBusiness",
        title: "Lokale Unternehmen",
        description:
          "Praxis, Studio, Kanzlei oder Laden – Anfragen und Infos landen dort, wo du sie brauchst.",
      },
    ],
  },
  pricing: {
    title: "Transparente Pakete, die mit dir wachsen.",
    subtitle:
      "Starte mit einem kleinen Paket und erweitere, wenn deine Automationen mehr übernehmen.",
    trialHint: "Teste unsere Plattform 7 Tage kostenlos mit ausgewählten Modulen.",
    plans: [
      {
        id: "starter",
        name: "Starter",
        description:
          "Für Selbstständige und kleine Teams, die ihre ersten KI-Prozesse starten wollen.",
      },
      {
        id: "business",
        name: "Business",
        description:
          "Für Unternehmen, die mehrere Module kombinieren und Teams entlasten möchten.",
      },
      {
        id: "custom",
        name: "Custom",
        description:
          "AI-Modernisierung als Projekt – inklusive individueller Automationen.",
      },
    ],
    frequencyLabels: {
      monthly: "Monatlich",
      annually: "Jährlich",
    },
    tiers: [
      {
        id: "starter",
        name: "Starter",
        badge: "Für den Einstieg",
        description:
          "Für Selbstständige und kleine Teams, die ihre ersten KI-Prozesse starten wollen.",
        href: "#kontakt",
        featured: false,
        priceMonthly: "39 €",
        priceAnnually: "390 €",
        currency: "EUR",
        billedMonthlyText: "Monatlich abgerechnet",
        billedAnnuallyText: "Jährlich abgerechnet",
        buttonLabel: "Starter sichern",
        highlights: [
          "Smart Inbox für 1 Postfach",
          "Dokumenten-Assistent Basic",
          "Website-Bot für 1 Website",
          "E-Mail-Support",
        ],
      },
      {
        id: "business",
        name: "Business",
        badge: "Beliebt bei Teams",
        description:
          "Für Unternehmen, die mehrere Module kombinieren und Teams entlasten möchten.",
        href: "#kontakt",
        featured: true,
        priceMonthly: "99 €",
        priceAnnually: "990 €",
        currency: "EUR",
        billedMonthlyText: "Monatlich abgerechnet",
        billedAnnuallyText: "Jährlich abgerechnet (2 Monate geschenkt)",
        buttonLabel: "Business starten",
        highlights: [
          "Alle Starter-Features",
          "Bis zu 3 Postfächer",
          "Website- und Telefon-Bot",
          "Onboarding-Call (60 Minuten)",
          "Priorisierter Support",
        ],
      },
      {
        id: "scale",
        name: "Scale",
        badge: "Für Wachstum",
        description:
          "Für wachsende Unternehmen mit hoher Automatisierungstiefe.",
        href: "#kontakt",
        featured: false,
        priceMonthly: "199 €",
        priceAnnually: "1.990 €",
        currency: "EUR",
        billedMonthlyText: "Monatlich abgerechnet",
        billedAnnuallyText: "Jährlich abgerechnet",
        buttonLabel: "Scale anfragen",
        highlights: [
          "Alle Business-Features",
          "Erweiterte Automationen",
          "Persönlicher Ansprechpartner",
          "Option auf SLA und On-Prem-Module",
        ],
      },
    ],
    comparison: {
      ariaLabel: "Funktionsvergleich der Pakete",
      sections: [
        {
          name: "Module und Nutzung",
          features: [
            { name: "Smart Inbox", tiers: { starter: true, business: true, scale: true } },
            { name: "Dokumenten-Assistent", tiers: { starter: true, business: true, scale: true } },
            { name: "Website-Bot", tiers: { starter: false, business: true, scale: true } },
            { name: "Telefon-Bot", tiers: { starter: false, business: false, scale: true } },
          ],
        },
        {
          name: "Automatisierung und KI",
          features: [
            { name: "Standard-Automationen", tiers: { starter: true, business: true, scale: true } },
            { name: "Custom-Automationen", tiers: { starter: false, business: true, scale: true } },
            { name: "AI-Potenzial-Analyse", tiers: { starter: true, business: true, scale: true } },
            { name: "Branchen-Pakete", tiers: { starter: false, business: true, scale: true } },
          ],
        },
        {
          name: "Support und Service",
          features: [
            { name: "E-Mail-Support", tiers: { starter: true, business: true, scale: true } },
            { name: "Onboarding-Call", tiers: { starter: false, business: true, scale: true } },
            { name: "Persönlicher Ansprechpartner", tiers: { starter: false, business: false, scale: true } },
            { name: "Service-Level-Agreement (SLA)", tiers: { starter: false, business: false, scale: true } },
          ],
        },
      ],
      yesLabel: "Ja",
      noLabel: "Nein",
    },
    enterprise: {
      eyebrow: "AI-Modernisierung und Enterprise",
      title: "Wir bauen dir deine individuelle KI-Landschaft – in wenigen Wochen.",
      setupFeeAmount: "ab 2.500 €",
      setupFeeLabel: "Einmalige Setup-Gebühr",
      monthlyAmount: "ab 490 €",
      monthlyLabel: "Monatliche Plattform- und Betreuungskosten",
      checklist: [
        "Analyse deiner Prozesse, Tools und Datenlandschaft",
        "Individuelle Automations-Blueprints für dein Unternehmen",
        "Implementierung, Testing und Feinjustierung",
        "Schulung deines Teams und Dokumentation",
        "Persönlicher Ansprechpartner",
        "DSGVO- und Compliance-Check",
      ],
      primaryCta: {
        label: "Projekt anfragen",
        href: "#kontakt",
      },
      secondaryCta: {
        label: "Beispielprojekte ansehen",
        href: "#referenzen",
      },
    },
  },
  trust: {
    title: "Datenschutz und Sicherheit an erster Stelle.",
    bullets: [
      "Datenverarbeitung und Hosting in der EU",
      "DSGVO-konforme Prozesse und Auftragsverarbeitung",
      "Keine Weitergabe deiner Daten an Dritte zur Modelltrainierung",
      "Kein Token-Wirrwarr – wir rechnen in klaren Nutzungspaketen ab.",
    ],
  },
  faq: {
    title: "Häufige Fragen",
    items: [
      {
        question: "Wie viel Aufwand habe ich beim Start?",
        answer:
          "Wir führen dich Schritt für Schritt durch den Start. JetBot lernt deinen Alltag kennen, wir richten die wichtigsten Module für dich ein und begleiten dich bei den ersten Automationen.",
      },
      {
        question: "Muss ich Technik verstehen, um das zu nutzen?",
        answer:
          "Nein. Du steuerst alles über Chat oder Telefon in normaler Sprache. Wir kümmern uns um Integrationen, Automationen und Feintuning.",
      },
      {
        question: "Wie sicher sind meine Daten?",
        answer:
          "Deine Daten werden in der EU verarbeitet, DSGVO-konform gespeichert und nicht zum Training von Fremdmodellen verwendet.",
      },
      {
        question: "Mit welchen Tools könnt ihr euch verbinden?",
        answer:
          "Wir können unter anderem E-Mail, Kalender, CRM, Website, Shop-Systeme und Buchhaltungs-Tools anbinden. In der Beratung klären wir, was du konkret im Einsatz hast.",
      },
      {
        question: "Was passiert nach der Testphase?",
        answer:
          "Du entscheidest, ob du mit einem unserer Pakete weitermachst. Deine eingerichteten Module und Daten bleiben erhalten.",
      },
    ],
  },
  blog: {
    title: "Aus dem KI-Alltag",
    subtitle:
      "Impulse, Beispiele und Ideen, wie KI deinen Alltag als Unternehmer:in leichter macht.",
    posts: [
      {
        id: 1,
        title: "Wie du in 7 Tagen deine Inbox mit KI entlastest",
        href: "#",
        description:
          "Wir zeigen, wie du Smart Inbox und Dokumenten-Assistent kombinierst, um E-Mails zu sortieren, zusammenzufassen und direkt in Aufgaben zu verwandeln.",
        imageUrl:
          "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?auto=format&fit=crop&w=1200&q=80",
        date: "10. Januar 2026",
        datetime: "2026-01-10",
        category: {
          title: "Inbox & Kommunikation",
          href: "#",
        },
        author: {
          name: "Matthias",
          role: "Gründer & AI-Modernisierer",
          href: "#",
          imageUrl:
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
      },
      {
        id: 2,
        title: "Telefon-Bot statt verpasster Anrufe",
        href: "#",
        description:
          "Ein Praxisbeispiel, wie ein KI-Telefon-Bot Anrufe annimmt, qualifiziert und dir nur noch die wirklich wichtigen Gespräche übrig lässt.",
        imageUrl:
          "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=1200&q=80",
        date: "22. Januar 2026",
        datetime: "2026-01-22",
        category: {
          title: "Telefon & Support",
          href: "#",
        },
        author: {
          name: "Matthias",
          role: "Gründer & AI-Modernisierer",
          href: "#",
          imageUrl:
            "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
      },
      {
        id: 3,
        title: "AI-Potentials-Analyse: So findest du deine größten Hebel",
        href: "#",
        description:
          "Wie unser JetBot aus ein paar Fragen ein konkretes KI-Setup vorschlägt – inklusive Modulen, Prioritäten und Automatisierungs-Ideen.",
        imageUrl:
          "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
        date: "5. Februar 2026",
        datetime: "2026-02-05",
        category: {
          title: "Strategie & Modernisierung",
          href: "#",
        },
        author: {
          name: "Matthias",
          role: "Gründer & AI-Modernisierer",
          href: "#",
          imageUrl:
            "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
      },
    ],
  },
  featuresPage: {
    eyebrow: "Funktionen",
    title: "Was deine KI-Plattform für dich übernimmt",
    subtitle:
      "Ein Auszug aus dem, was unsere Module und Automationen im Alltag für dich erledigen.",
    image: {
      src: "https://tailwindcss.com/plus-assets/img/component-images/project-app-screenshot.png",
      alt: "Screenshot der Simple KI-Plattform",
    },
    features: [
      {
        key: "deploy",
        name: "Schnell startklar",
        description:
          "Wir schließen deine bestehenden Tools an und setzen deine ersten Automationen so auf, dass du in wenigen Tagen echte Effekte spürst.",
        iconKey: "cloud",
      },
      {
        key: "secure",
        name: "Datenschutz und Sicherheit",
        description:
          "Hosting in der EU, DSGVO-konforme Verarbeitung und volle Transparenz darüber, welche Daten wo genutzt werden.",
        iconKey: "lock",
      },
      {
        key: "foundation",
        name: "Stabiles Fundament",
        description:
          "Dein System wächst mit dir: neue Module, mehr Automationen, mehr Teams – ohne jedes Mal von vorne zu beginnen.",
        iconKey: "server",
      },
    ],
    story: {
      eyebrow: "Deploy faster",
      title: "A better workflow",
      paragraphsLeft: [
        "Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit.",
        "Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac adipiscing egestas.",
      ],
      paragraphsRight: [
        "Erat pellentesque dictumst ligula porttitor risus eget et eget. Ultricies tellus felis id dignissim eget. Est augue maecenas risus nulla ultrices congue nunc tortor.",
        "Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.",
      ],
      cta: {
        label: "Get started",
        href: "#",
      },
      image: {
        src: "https://tailwindcss.com/plus-assets/img/component-images/project-app-screenshot.png",
        alt: "Produkt-Screenshot der Plattform",
      },
    },
    bento: {
      eyebrow: "Deploy faster",
      title: "Everything you need to deploy your app",
      cards: [
        {
          key: "releases",
          section: "Releases",
          title: "Push to deploy",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In gravida justo et nulla efficitur, maximus egestas sem pellentesque.",
          imageUrl:
            "https://tailwindcss.com/plus-assets/img/component-images/bento-02-releases.png",
          imageAlt: "Releases overview",
        },
        {
          key: "integrations",
          section: "Integrations",
          title: "Connect your favorite tools",
          description: "Curabitur auctor, ex quis auctor venenatis, eros arcu rhoncus massa.",
          imageUrl:
            "https://tailwindcss.com/plus-assets/img/component-images/bento-02-integrations.png",
          imageAlt: "Integrations overview",
        },
        {
          key: "security",
          section: "Security",
          title: "Advanced access control",
          description:
            "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia.",
          imageUrl:
            "https://tailwindcss.com/plus-assets/img/component-images/bento-02-security.png",
          imageAlt: "Security dashboard",
        },
        {
          key: "performance",
          section: "Performance",
          title: "Lightning-fast builds",
          description:
            "Sed congue eros non finibus molestie. Vestibulum euismod augue vel commodo vulputate. Maecenas at augue sed elit dictum vulputate.",
          imageUrl:
            "https://tailwindcss.com/plus-assets/img/component-images/bento-02-performance.png",
          imageAlt: "Performance analytics",
        },
      ],
    },
  },
  aboutPage: {
    hero: {
      eyebrow: "Über uns",
      title: "Wir bauen KI-Systeme, die wie ein Teammitglied mitdenken.",
      description:
        "Wir sind ein kleines, fokussiertes Team aus Produktmenschen, Entwicklern und Automatisierern. Unser Ziel: KI so zu bauen, dass sie deinen Alltag wirklich erleichtert – statt dich mit noch mehr Tools zu überfordern.",
      images: [
        {
          key: "hero-1",
          src: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&h=528&q=80",
          alt: "Team arbeitet gemeinsam an Laptops in einem modernen Büro.",
        },
        {
          key: "hero-2",
          src: "https://images.unsplash.com/photo-1485217988980-11786ced9454?auto=format&fit=crop&h=528&q=80",
          alt: "Whiteboard mit Prozessen und Notizen.",
        },
        {
          key: "hero-3",
          src: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&h=528&q=80",
          alt: "Mensch telefoniert und arbeitet am Laptop.",
        },
        {
          key: "hero-4",
          src: "https://images.unsplash.com/photo-1670272504528-790c24957dda?auto=format&fit=crop&h=528&q=80",
          alt: "Büroszene mit Fokus auf Zusammenarbeit.",
        },
        {
          key: "hero-5",
          src: "https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?auto=format&fit=crop&h=528&q=80",
          alt: "Teammeeting in entspannter Atmosphäre.",
        },
      ],
    },
    mission: {
      title: "Unsere Mission",
      lead:
        "Wir bringen Struktur in den Kopf deines Unternehmens: E-Mails, Dokumente, Anfragen, Telefonate – alles wird für dich sortiert, verstanden und nutzbar gemacht.",
      body:
        "Viele Unternehmen stecken in alten Prozessen fest: zu viele Kanäle, zu viele Tools, zu wenig Zeit. Wir glauben, dass KI dann sinnvoll ist, wenn sie im Hintergrund arbeitet und deinen Alltag leiser macht. Darum bauen wir eine Plattform, die sich an deinen Workflow anpasst – nicht andersherum.",
      stats: [
        {
          label: "Automatisierte Aufgaben pro Monat",
          value: "10.000+",
        },
        {
          label: "Zeitersparnis bei Bestandskunden",
          value: "bis zu 40%",
        },
        {
          label: "Integrierte Tools & Systeme",
          value: "20+",
        },
      ],
    },
    imageSection: {
      imageUrl:
        "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1600&q=80",
      imageAlt: "Team arbeitet gemeinsam an Laptops in einem Besprechungsraum.",
    },
    values: {
      title: "Unsere Prinzipien",
      subtitle:
        "Wir sind keine Agentur für bunte Folien, sondern ein Umsetzungsteam. Drei Dinge sind uns besonders wichtig.",
      items: [
        {
          name: "Radikal praxisorientiert",
          description:
            "Wir bauen nichts, was nur auf dem Papier gut aussieht. Jede Automation muss einen klaren Effekt im Alltag haben: weniger Klicks, weniger Nachfragen, weniger Frust.",
        },
        {
          name: "Transparente Entscheidungen",
          description:
            "Wir erklären dir, was die KI tut, welche Daten wo landen und warum wir bestimmte Lösungen wählen – ohne Blackbox.",
        },
        {
          name: "Menschen vor Technik",
          description:
            "KI ersetzt nicht dein Team, sondern gibt ihnen Zeit für bessere Arbeit. Wir achten darauf, dass Prozesse zu deinen Menschen passen.",
        },
        {
          name: "Schnelle Iteration",
          description:
            "Wir starten klein, liefern früh Ergebnisse und verbessern dann gemeinsam – statt monatelang an einem großen Projekt zu schrauben.",
        },
        {
          name: "Langfristige Partnerschaft",
          description:
            "Wir verstehen uns nicht als einmalige Projektagentur, sondern als dein KI-Modernisierungspartner, der deine Systeme mit dir weiterentwickelt.",
        },
        {
          name: "Datenschutz by Design",
          description:
            "Datenschutz und Compliance sind von Anfang an mitgedacht – nicht erst, wenn alles schon live ist.",
        },
      ],
    },
    logoCloud: {
      title: "Vertrauen von modernen, pragmatischen Teams",
      logos: [
        {
          name: "Transistor",
          src: "https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-gray-900.svg",
          alt: "Transistor Logo",
        },
        {
          name: "Reform",
          src: "https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-gray-900.svg",
          alt: "Reform Logo",
        },
        {
          name: "Tuple",
          src: "https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-gray-900.svg",
          alt: "Tuple Logo",
        },
        {
          name: "SavvyCal",
          src: "https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-gray-900.svg",
          alt: "SavvyCal Logo",
        },
        {
          name: "Statamic",
          src: "https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-gray-900.svg",
          alt: "Statamic Logo",
        },
      ],
    },
    team: {
      title: "Unser Team",
      subtitle:
        "Wir sind ein kleines, eingespieltes Team, das Strategie, Entwicklung und Automatisierung unter einem Dach vereint.",
      members: [
        {
          name: "Matthias",
          role: "Gründer & AI-Modernisierer",
          imageUrl:
            "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=facearea&facepad=8&w=512&h=512&q=80",
        },
        {
          name: "Alex",
          role: "Lead Developer",
          imageUrl:
            "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=facearea&facepad=8&w=512&h=512&q=80",
        },
        {
          name: "Lena",
          role: "Customer Success",
          imageUrl:
            "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&facepad=8&w=512&h=512&q=80",
        },
        {
          name: "Jonas",
          role: "Automation Engineer",
          imageUrl:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=8&w=512&h=512&q=80",
        },
        {
          name: "Mara",
          role: "Product & UX",
          imageUrl:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=facearea&facepad=8&w=512&h=512&q=80",
        },
        {
          name: "Phil",
          role: "Integrationen & APIs",
          imageUrl:
            "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=facearea&facepad=8&w=512&h=512&q=80",
        },
        {
          name: "Sofia",
          role: "KI-Trainerin",
          imageUrl:
            "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=facearea&facepad=8&w=512&h=512&q=80",
        },
        {
          name: "Ben",
          role: "Solution Architect",
          imageUrl:
            "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?auto=format&fit=facearea&facepad=8&w=512&h=512&q=80",
        },
        {
          name: "Nina",
          role: "Operations",
          imageUrl:
            "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?auto=format&fit=facearea&facepad=8&w=512&h=512&q=80",
        },
        {
          name: "Tobias",
          role: "Tech Partner Manager",
          imageUrl:
            "https://images.unsplash.com/photo-1509783236416-c9ad59bae472?auto=format&fit=facearea&facepad=8&w=512&h=512&q=80",
        },
      ],
    },
  },
};
