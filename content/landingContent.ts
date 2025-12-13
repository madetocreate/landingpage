export type CTA = {
  label: string;
  href?: string;
};

export type LandingContent = {
  hero: {
    title: string;
    subtitle: string;
    ctaPrimary: CTA;
    ctaSecondary: CTA;
    trustHint: string;
  };

  pain: {
    title: string;
    subtitle: string;
    bullets: string[];
  };

  pillars: {
    title: string;
    subtitle: string;
    items: Array<{
      title: string;
      description: string;
    }>;
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

  demos: {
    title: string;
    subtitle: string;
    callDemo: {
      title: string;
      description: string;
      inputPlaceholder: string;
      ctaLabel: string;
      consent: string;
    };
    inboxMagic: {
      title: string;
      description: string;
      bullets: string[];
      cta: CTA;
      note: string;
    };
  };

  modules: {
    title: string;
    subtitle: string;
    items: Array<{
      id: string;
      title: string;
      description: string;
      icon: string;
    }>;
  };

  howItWorks: {
    title: string;
    subtitle: string;
    steps: Array<{
      title: string;
      description: string;
    }>;
  };

  audience: {
    title: string;
    subtitle: string;
    industries: Array<{
      title: string;
      description: string;
      benefits: string[];
    }>;
  };

  pricing: {
    title: string;
    subtitle: string;
    frequencyLabels: { monthly: string; annually: string };
    tiers: Array<{
      id: string;
      name: string;
      priceMonthly: string;
      priceAnnually: string;
      currency: string;
      billedMonthlyText: string;
      billedAnnuallyText: string;
      buttonLabel: string;
      highlights: string[];
      featured?: boolean;
    }>;
    enterprise: {
      eyebrow: string;
      title: string;
      checklist: string[];
      setupFeeAmount: string;
      setupFeeLabel: string;
      monthlyAmount: string;
      monthlyLabel: string;
      primaryCta: CTA;
      secondaryCta: CTA;
    };
  };

  trust: {
    title: string;
    subtitle: string;
    bullets: string[];
  };

  faq: {
    title: string;
    subtitle: string;
    items: Array<{
      question: string;
      answer: string;
    }>;
  };

  blog: {
    title: string;
    subtitle: string;
    posts: Array<{
      title: string;
      date: string;
      excerpt: string;
      slug: string;
      category: string;
      author: {
        name: string;
        role: string;
        image?: string;
      };
    }>;
  };

  featuresPage: {
    eyebrow: string;
    title: string;
    subtitle: string;
    features: Array<{
      key: string;
      name: string;
      description: string;
      iconKey: string;
    }>;
    image: {
      src: string;
      alt: string;
    };
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
      cards: Array<{
        section: string;
        title: string;
        description: string;
        imageUrl: string;
        imageAlt: string;
      }>;
    };
  };

  aboutPage: {
    hero: {
      eyebrow: string;
      title: string;
      subtitle: string;
    };
    mission: {
      title: string;
      body: string;
    };
    values: Array<{
      title: string;
      description: string;
      iconKey: string;
    }>;
    milestones: Array<{
      label: string;
      value: string;
    }>;
  };
};

export const landingContent: LandingContent = {
  hero: {
    title: "Den Kopf frei. Der Rest in AKLOW.",
    subtitle:
      "AKLOW modernisiert deinen Betrieb mit KI – ohne Umstellung. Er hängt sich an Telefon, E‑Mail, Website & Messenger und übernimmt Anfragen, Ordnung und Antworten. Gesteuert per Chat oder Sprache.",
    ctaPrimary: { label: "AI‑Modernisierungs‑Check starten", href: "#modernisierungs-check" },
    ctaSecondary: { label: "Lass AKLOW dich anrufen", href: "#call-demo" },
    trustHint: "DSGVO‑konform · EU‑Speicher · Kein Training auf deinen Daten",
  },

  pain: {
    title: "Wenn alles gleichzeitig kommt, bleibt am Ende alles an dir hängen.",
    subtitle:
      "Anrufe, E‑Mails, Website‑Anfragen, Dokumente, Notizen – verteilt auf zu viele Orte. AKLOW sammelt alles, macht es wieder auffindbar und hilft dir schneller zu reagieren.",
    bullets: [
      "Nie wieder Anfragen verpassen",
      "Nie wieder Zettelchaos",
      "Schneller antworten",
      "Alles an einem Ort",
    ],
  },

  pillars: {
    title: "Drei Dinge, die dein Alltag sofort leichter machen.",
    subtitle: "Nicht mehr Tools. Sondern weniger Chaos.",
    items: [
      {
        title: "Nie wieder Anfragen verpassen",
        description:
          "AKLOW nimmt Anrufe an, beantwortet Website‑Fragen und sammelt Leads – auch wenn du gerade keine Zeit hast. Du bekommst danach eine kurze Zusammenfassung.",
      },
      {
        title: "Nie wieder Zettelchaos",
        description:
          "Dokumente, Notizen und Gesprächsverläufe werden im Unternehmens‑Gedächtnis verknüpft. Später fragst du einfach: „Was war der Stand?“ – und es ist da.",
      },
      {
        title: "Weniger Büro. Mehr Geschäft.",
        description:
          "AKLOW schreibt Antwortvorschläge, erstellt To‑Dos und Übergaben. Du entscheidest, was rausgeht – du bleibst Chef.",
      },
    ],
  },

  solution: {
    title: "Ein Assistent, viele Kanäle. Ein Gedächtnis.",
    text: "AKLOW hängt sich an das, was du schon nutzt. Keine komplizierten Dashboards – du steuerst alles per Chat oder Sprache. Und alles arbeitet mit demselben Unternehmens‑Gedächtnis.",
  },

  jetbot: {
    title: "AI‑Modernisierungs‑Check",
    subtitle:
      "15 Minuten Gespräch – am Ende hast du einen klaren KI‑Plan für deinen Betrieb. Ohne Formulare. Ohne Technik‑Theater.",
    steps: [
      "Du erzählst kurz, wie dein Alltag heute läuft.",
      "Wir finden 2–3 Stellen, wo KI sofort entlastet.",
      "Du bekommst einen klaren Start: welches Modul zuerst, welcher Kanal als nächstes.",
    ],
    ctaPrimary: { label: "Check starten", href: "/request-demo" },
    ctaSecondary: { label: "Kurz‑Demo sehen", href: "#call-demo" },
  },

  demos: {
    title: "Erlebe AKLOW live.",
    subtitle:
      "Nicht nur lesen – ausprobieren. Zwei kleine Demos, die in Sekunden zeigen, wie sich „Anfrage‑Detox“ anfühlt.",
    callDemo: {
      title: "„AKLOW ruft dich an“",
      description:
        "Gib deine Nummer ein. AKLOW ruft dich an, stellt 4–6 kurze Fragen und schickt dir danach eine saubere Zusammenfassung – wie bei einem echten Kundenkontakt.",
      inputPlaceholder: "Telefonnummer (z. B. +49 151 12345678)",
      ctaLabel: "Demo‑Anruf starten",
      consent: "Mit Klick bestätigst du, dass AKLOW dich anrufen darf. Keine Werbung, kein Spam.",
    },
    inboxMagic: {
      title: "Inbox‑Magie",
      description:
        "Schick uns 20 alte E‑Mails oder eine Excel – AKLOW macht daraus in kurzer Zeit:",
      bullets: [
        "eine saubere Kundenliste",
        "offene Punkte & nächste Schritte",
        "eine Beispiel‑Antwort auf die häufigsten Fragen",
      ],
      cta: { label: "Inbox‑Demo anfordern", href: "/request-demo?focus=inbox" },
      note: "Du entscheidest, was du teilst. Auf Wunsch anonymisiert.",
    },
  },

  modules: {
    title: "Module, wenn du sie brauchst.",
    subtitle: "Starte klein. Erweitere jederzeit – ohne Monster‑Tool.",
    items: [
      {
        id: "website",
        title: "Website‑Assistent",
        description:
          "Beantwortet Fragen, erklärt Leistungen und sammelt Leads – direkt auf deiner Website (Snippet oder Plugin).",
        icon: "chat",
      },
      {
        id: "phone",
        title: "Telefon‑Assistent",
        description:
          "Geht ans Telefon, fragt klug nach, fasst zusammen und eskaliert an dich, wenn es wichtig wird – 24/7.",
        icon: "phone",
      },
      {
        id: "inbox",
        title: "Smart Inbox",
        description:
          "Bündelt E‑Mails, Website‑Anfragen, Messenger und Notizen in einem Posteingang – mit Prioritäten und Antwortvorschlägen.",
        icon: "inbox",
      },
      {
        id: "documents",
        title: "Dokumenten‑Assistent",
        description:
          "Liest PDFs, Scans und Fotos, extrahiert Inhalte und sortiert sauber. Endlich Ordnung – ohne extra Arbeit.",
        icon: "document",
      },
      {
        id: "memory",
        title: "Unternehmens‑Memory",
        description:
          "Ein Gedächtnis für dein ganzes Unternehmen. AKLOW merkt sich Verlauf, offene Punkte und wichtige Details – kanalübergreifend.",
        icon: "memory",
      },
      {
        id: "social",
        title: "Social‑Media‑Modul",
        description:
          "Findet Themen aus deinem Alltag, schreibt Posts in deiner Sprache und hilft bei wiederkehrenden Fragen & Kommentaren.",
        icon: "social",
      },
    ],
  },

  howItWorks: {
    title: "So läuft’s ab.",
    subtitle:
      "Du musst nichts umkrempeln. Wir docken AKLOW an, und du merkst im Alltag sofort den Unterschied.",
    steps: [
      {
        title: "Kurz verstehen",
        description:
          "Im Check klären wir, wo heute Zeit verloren geht: Anfragen, Dokumente, Antworten, Übergaben.",
      },
      {
        title: "Andocken",
        description:
          "Wir verbinden AKLOW mit deinen bestehenden Kanälen: Telefon, E‑Mail, Website, Messenger – je nach Bedarf.",
      },
      {
        title: "AKLOW arbeitet mit",
        description:
          "AKLOW sammelt Wissen im Unternehmens‑Gedächtnis und übernimmt Schritt für Schritt mehr – ohne dass du neue Software lernen musst.",
      },
    ],
  },

  audience: {
    title: "Für Betriebe, die im Alltag funktionieren müssen.",
    subtitle:
      "AKLOW ist gemacht für kleine Teams, die keine Zeit für Tool‑Zirkus haben – aber jeden Tag zuverlässig liefern müssen.",
    industries: [
      {
        title: "Handwerk & Bau",
        description:
          "Wenn du unterwegs bist, übernimmt AKLOW Anrufe und sammelt Infos sauber ein. Nachher hast du eine klare Zusammenfassung – statt Chaos im Kopf.",
        benefits: ["Anrufe annehmen & qualifizieren", "Angebotsanfragen strukturieren", "Übergabe als kurze Notiz"],
      },
      {
        title: "Dienstleister & Agenturen",
        description:
          "AKLOW hält den Überblick über Anfragen, Briefings und offene Punkte – und sorgt dafür, dass nichts untergeht.",
        benefits: ["Smart Inbox für alle Kanäle", "Kundengedächtnis & Verlauf", "Antwortvorschläge & To‑Dos"],
      },
      {
        title: "Immobilien & Beratung",
        description:
          "Vom Erstkontakt bis zur Nachverfolgung: AKLOW sammelt Infos, erstellt Zusammenfassungen und hilft bei wiederkehrenden Fragen.",
        benefits: ["Leads sammeln", "Telefon & Website zusammenführen", "Schnelle Antworten aus Unternehmenswissen"],
      },
    ],
  },

  pricing: {
    title: "Starte klein. Wachse, wenn du willst.",
    subtitle:
      "Du buchst nur, was du brauchst. Viele Teams starten mit einem Kanal – und erweitern, sobald der Alltag ruhiger wird.",
    frequencyLabels: { monthly: "Monatlich", annually: "Jährlich" },
    tiers: [
      {
        id: "check",
        name: "Modernisierungs‑Check",
        priceMonthly: "0",
        priceAnnually: "0",
        currency: "€",
        billedMonthlyText: "einmalig",
        billedAnnuallyText: "einmalig",
        buttonLabel: "Check starten",
        highlights: [
          "15 Minuten Gespräch",
          "2–3 konkrete Automations‑Chancen",
          "Empfehlung: welcher Kanal zuerst",
        ],
      },
      {
        id: "startklar",
        name: "AKLOW Startklar",
        priceMonthly: "ab 490",
        priceAnnually: "ab 490",
        currency: "€",
        billedMonthlyText: "einmalig",
        billedAnnuallyText: "einmalig",
        buttonLabel: "Demo buchen",
        highlights: [
          "1–2 Kanäle live (z. B. Telefon + E‑Mail)",
          "Smart Inbox & Grundwissen eingerichtet",
          "Erste Antwortvorlagen & Übergaben",
        ],
        featured: true,
      },
      {
        id: "laeuftmit",
        name: "AKLOW läuft mit",
        priceMonthly: "ab 99",
        priceAnnually: "ab 999",
        currency: "€",
        billedMonthlyText: "pro Monat",
        billedAnnuallyText: "pro Jahr",
        buttonLabel: "Anfragen",
        highlights: [
          "Feintuning & neue Antworten",
          "Neue Workflows nach Bedarf",
          "Support‑Kanal (z. B. Telegram)",
        ],
      },
    ],
    enterprise: {
      eyebrow: "Für Teams mit mehr Volumen",
      title: "Mehr Kanäle, mehr Automationen, mehr Begleitung",
      checklist: [
        "Mehrere Standorte / Nummern",
        "Individuelle Workflows & Integrationen",
        "Erweiterte Rollen & Rechte",
        "SLA‑Support",
      ],
      setupFeeAmount: "Auf Anfrage",
      setupFeeLabel: "Setup",
      monthlyAmount: "Auf Anfrage",
      monthlyLabel: "Betreuung",
      primaryCta: { label: "Mit uns sprechen", href: "/request-demo" },
      secondaryCta: { label: "Use‑Cases ansehen", href: "/use-cases" },
    },
  },

  trust: {
    title: "Sicher. Kontrollierbar. DSGVO‑konform.",
    subtitle:
      "AKLOW arbeitet nur mit deinen Daten – transparent und nachvollziehbar. Du bestimmst, was angebunden wird und was nicht.",
    bullets: [
      "EU‑Speicher möglich (keine US‑Cloud als Standard)",
      "Kein Training auf deinen Daten",
      "Klare Mandantentrennung je Betrieb",
      "Du behältst die Kontrolle über Freigaben & Übergaben",
    ],
  },

  faq: {
    title: "Fragen, die fast immer kommen.",
    subtitle: "Kurz beantwortet – ohne Buzzwords.",
    items: [
      {
        question: "Muss ich meine bestehenden Tools ersetzen?",
        answer:
          "Nein. AKLOW dockt an Telefon, E‑Mail, Website & Messenger an – so, wie du heute arbeitest.",
      },
      {
        question: "Brauche ich ein Dashboard oder eine neue Software?",
        answer:
          "Nein. Du steuerst AKLOW per Chat oder Sprache. Für den Alltag gibt es einen Posteingang, der alles bündelt.",
      },
      {
        question: "Kann AKLOW wirklich „über meinen Kunden Bescheid wissen“?",
        answer:
          "Ja – praktisch statt creepy: Verlauf, offene Punkte und relevante Dokumente werden verknüpft, damit du sofort weißt, worum es geht.",
      },
      {
        question: "Wie starte ich am sinnvollsten?",
        answer:
          "Mit dem AI‑Modernisierungs‑Check. Danach gehen wir Schritt für Schritt live – oft zuerst mit Telefon oder Inbox.",
      },
      {
        question: "Was ist mit Datenschutz?",
        answer:
          "AKLOW kann EU‑Speicher nutzen, trainiert nicht auf deinen Daten und arbeitet mandantentrennt pro Betrieb.",
      },
    ],
  },

  blog: {
    title: "Wissen aus der Werkstatt.",
    subtitle: "Kurze, praxisnahe Artikel – für weniger Büro und mehr Ruhe im Kopf.",
    posts: [
      {
        title: "Anfrage‑Detox: So wird dein Posteingang wieder ruhig",
        date: "2025-11-12",
        excerpt:
          "Warum Anfragen verschwinden, wenn sie über zu viele Kanäle kommen – und wie du mit einem gemeinsamen Posteingang wieder Ordnung reinbekommst.",
        slug: "anfrage-detox-posteingang",
        category: "Praxis",
        author: { name: "AKLOW Team", role: "AI‑Modernisierung" },
      },
      {
        title: "Telefon‑Assistent: Nie wieder eine Anfrage verpassen",
        date: "2025-10-28",
        excerpt:
          "Was ein guter Telefon‑Bot können muss: Nachfragen, Zusammenfassen, übergeben – ohne dass es nach „Roboter“ klingt.",
        slug: "telefon-assistent",
        category: "Telefon",
        author: { name: "AKLOW Team", role: "Voice & Workflows" },
      },
      {
        title: "Nie wieder Zettelchaos: Dokumente automatisch sortieren",
        date: "2025-10-05",
        excerpt:
          "Von Foto bis PDF: So bringt ein Dokumenten‑Assistent Ordnung in Belege, Verträge und Formulare – ohne extra Pflege.",
        slug: "nie-wieder-zettelchaos-dokumente",
        category: "Dokumente",
        author: { name: "AKLOW Team", role: "Dokumenten‑Workflows" },
      },
    ],
  },

  featuresPage: {
    eyebrow: "Funktionen",
    title: "Ein Gehirn. Viele Kanäle.",
    subtitle:
      "AKLOW verbindet Telefon, E‑Mail, Website, Dokumente und Messenger – mit einem gemeinsamen Unternehmens‑Gedächtnis. Damit wirkt dein Betrieb organisiert, schnell und zuverlässig.",
    features: [
      {
        key: "inbox",
        name: "Operator‑Inbox",
        description:
          "Alle Anfragen landen gesammelt an einem Ort – statt in fünf Postfächern. Priorisieren, beantworten, nachverfolgen.",
        iconKey: "cloud",
      },
      {
        key: "memory",
        name: "Unternehmens‑Memory",
        description:
          "AKLOW verknüpft Verlauf, offene Punkte und relevante Dokumente. Wenn jemand schreibt oder anruft, ist der Kontext sofort da.",
        iconKey: "server",
      },
      {
        key: "handoff",
        name: "Saubere Übergabe",
        description:
          "Wenn es wichtig wird, eskaliert AKLOW an dich – mit einer kurzen Zusammenfassung und den nächsten Schritten.",
        iconKey: "lock",
      },
    ],
    image: {
      src: "https://tailwindui.com/plus/img/component-images/dark-project-app-screenshot.png",
      alt: "AKLOW Inbox und Übersicht",
    },
    story: {
      eyebrow: "So arbeiten wir",
      title: "AI‑Modernisierung, die im Alltag ankommt.",
      paragraphsLeft: [
        "Die meisten kleinen Betriebe haben kein „KI‑Problem“. Sie haben ein Alltags‑Problem: zu viele Kanäle, zu wenig Zeit, zu wenig Überblick.",
        "AKLOW ist deshalb kein weiteres Tool, das du lernen musst. Wir docken an das an, was du bereits nutzt – und bauen daraus ein System, das mitdenkt.",
      ],
      paragraphsRight: [
        "Du startest mit einem kurzen Check. Danach gehen wir Schritt für Schritt live: meist zuerst ein Kanal (Telefon oder Inbox), dann erweitern wir, wenn der Alltag ruhiger wird.",
        "Das Ziel ist nicht „KI überall“. Das Ziel ist: weniger Stress, schnellere Antworten, ein Betrieb, der organisiert wirkt – auch wenn du gerade unterwegs bist.",
      ],
      cta: { label: "Modernisierungs‑Check starten", href: "/request-demo" },
      image: {
        src: "https://tailwindui.com/plus/img/component-images/dark-project-app-screenshot.png",
        alt: "Beispielansicht: Zusammenfassung und Übergabe",
      },
    },
    bento: {
      eyebrow: "Erste Woche",
      title: "Was du nach dem Start schnell spürst",
      cards: [
        {
          section: "Telefon",
          title: "Anrufe werden angenommen und sauber zusammengefasst",
          description:
            "Auch wenn du gerade nicht rangehen kannst. Du bekommst danach eine kurze Notiz statt einem Kopf voller Baustellen.",
          imageUrl: "https://tailwindui.com/plus/img/component-images/bento-01-releases.png",
          imageAlt: "Telefon Zusammenfassung",
        },
        {
          section: "Inbox",
          title: "Alle Anfragen in einem Posteingang",
          description:
            "E‑Mail, Website, Messenger – gesammelt, priorisiert, nachverfolgbar. Endlich wieder Überblick.",
          imageUrl: "https://tailwindui.com/plus/img/component-images/bento-02-usage.png",
          imageAlt: "Inbox Übersicht",
        },
        {
          section: "Memory",
          title: "AKLOW weiß sofort, worum es geht",
          description:
            "Kundenverlauf, offene Punkte, wichtige Dokumente – verknüpft und sofort abrufbar, ohne Suchen.",
          imageUrl: "https://tailwindui.com/plus/img/component-images/bento-03-performance.png",
          imageAlt: "Kundengedächtnis",
        },
        {
          section: "Antworten",
          title: "Antwortvorschläge, die zu deinem Betrieb passen",
          description:
            "AKLOW schreibt vor – du gibst frei. Schnell, konsistent, professionell.",
          imageUrl: "https://tailwindui.com/plus/img/component-images/bento-04-speed.png",
          imageAlt: "Antwortvorschläge",
        },
      ],
    },
  },

  aboutPage: {
    hero: {
      eyebrow: "Über AKLOW",
      title: "KI‑Modernisierung, die kleine Betriebe wirklich nutzen.",
      subtitle:
        "Wir bauen keine Feature‑Wand. Wir bauen Entlastung im Alltag: Anfragen, Ordnung und Antworten – kanalübergreifend, kontrollierbar und einfach bedienbar.",
    },
    mission: {
      title: "Unsere Mission",
      body:
        "Kleine Unternehmen sollen KI nutzen können, ohne ihr Geschäft umzustellen. AKLOW hängt sich an bestehende Systeme, arbeitet mit einem gemeinsamen Gedächtnis und wird Schritt für Schritt eingeführt – so, dass es im Alltag wirklich hilft.",
    },
    values: [
      {
        title: "Alltag vor Buzzwords",
        description:
          "Wir messen Erfolg nicht in Features, sondern darin, ob dein Alltag ruhiger wird und du schneller handeln kannst.",
        iconKey: "sparkles",
      },
      {
        title: "Kontrolle & Transparenz",
        description:
          "Du siehst, was AKLOW macht. Du bestimmst, welche Daten angebunden werden und welche Antworten rausgehen.",
        iconKey: "shield",
      },
      {
        title: "Schritt‑für‑Schritt",
        description:
          "Start klein, dann erweitern. Erst stabil, dann mehr. Keine Umstellung, kein Risiko‑Big‑Bang.",
        iconKey: "steps",
      },
    ],
    milestones: [
      { label: "Kanäle", value: "Telefon · E‑Mail · Website · Messenger" },
      { label: "Fokus", value: "Anfragen · Ordnung · Antworten" },
      { label: "Hosting", value: "EU‑Option · DSGVO‑konform" },
      { label: "Bedienung", value: "Chat · Sprache · Inbox" },
    ],
  },
};
