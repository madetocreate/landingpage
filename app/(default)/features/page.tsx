export const metadata = {
  title: "Features – Simple",
  description: "Die wichtigsten Bausteine, mit denen Simple deine Prozesse und Systeme orchestriert.",
};

import {
  ArrowPathIcon,
  ChevronRightIcon,
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

import FeaturesWorkflow from "@/components/features-workflow";
import FeaturesGlassCards from "@/components/features-glass-cards";

const primaryFeatures = [
  {
    name: "Workflows visuell bauen",
    description:
      "Orchestriere Events, Webhooks, APIs und menschliche Freigaben in einem Flow statt in verteilten Tools.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Sichere Ausführung",
    description:
      "Jeder Schritt läuft nachverfolgbar, mit Logging, Berechtigungen und klaren Zuständen für Erfolg und Fehler.",
    icon: LockClosedIcon,
  },
  {
    name: "Zuverlässige Datenbasis",
    description:
      "Prozesse schreiben konsistente Daten zurück in deine Systeme – kein Schatten-Excel, keine Copy-Paste-Orgie.",
    icon: ServerIcon,
  },
];

const secondaryFeatures = [
  {
    name: "Event-basierte Architektur",
    description:
      "Reagiere auf Kundenaktionen, System-Events oder interne Signale, statt in starren Zeitplänen zu denken. Simple nutzt eine moderne Event-Driven-Architektur, die deine Systeme in Echtzeit verbindet.",
    href: "#",
    iconName: "CloudArrowUpIcon" as const,
  },
  {
    name: "Rollen & Rechte",
    description:
      "Definiere, wer welche Schritte auslösen, freigeben oder anpassen darf – inklusive Audit-Trail. Mit granularer Berechtigungsverwaltung behältst du die volle Kontrolle über deine Automatisierungen.",
    href: "#",
    iconName: "LockClosedIcon" as const,
  },
  {
    name: "Versionierung & Tests",
    description:
      "Teste neue Automatisierungen in isolierten Umgebungen und rolle sie erst aus, wenn alles stabil ist. Simple bietet vollständige Versionierung und isolierte Testumgebungen für risikofreies Testen.",
    href: "#",
    iconName: "ArrowPathIcon" as const,
  },
];

export default function FeaturesPage() {
  const extraFeatures = [
    {
      name: "Prozessbibliothek für wiederkehrende Abläufe",
      description:
        "Lege wiederverwendbare Workflows für typische Aufgaben an – von Onboardings bis Support-Fällen. So muss niemand das Rad neu erfinden.",
      href: "/documentation",
      icon: CloudArrowUpIcon,
    },
    {
      name: "Governance & Freigaben",
      description:
        "Hinterlege klare Freigabewege und Verantwortlichkeiten, damit jede Automatisierung nachvollziehbar bleibt – auch für Compliance und Revision.",
      href: "/system",
      icon: LockClosedIcon,
    },
    {
      name: "Monitoring & Protokolle",
      description:
        "Sieh in Echtzeit, was läuft, wo es hängt und welche Schritte automatisiert wurden – inklusive sauberer Protokolle für jedes Event.",
      href: "/support",
      icon: ArrowPathIcon,
    },
  ];


  return (
    <div className="bg-white">
      <main>
        <div className="relative isolate pt-24 bg-white">
          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
              <div className="flex">
                <div className="relative flex items-center gap-x-4 rounded-full bg-white px-4 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                  <span className="font-semibold text-indigo-600">Feature-Überblick</span>
                  <span aria-hidden="true" className="h-4 w-px bg-gray-900/10" />
                  <a href="/vision-roadmap" className="flex items-center gap-x-1">
                    <span>Sieh dir unsere Roadmap an</span>
                    <ChevronRightIcon aria-hidden="true" className="-mr-2 h-5 w-5 text-gray-400" />
                  </a>
                </div>
              </div>
              <h1 className="mt-10 text-5xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-7xl">
                Die Bausteine hinter deinen Workflows.
              </h1>
              <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl leading-8">
                Simple verbindet Systeme, Daten und Teams. Auf dieser Seite siehst du die wichtigsten Bausteine, mit
                denen wir aus fragmentierten Prozessen stabile Produkte machen.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <a
                  href="/shop/abos"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Pläne und Abos ansehen
                </a>
                <a href="/about" className="text-sm font-semibold leading-6 text-gray-900">
                  Mehr über Simple <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>

            <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex lg:shrink-0 lg:grow lg:justify-end">
              <svg
                role="img"
                viewBox="0 0 366 729"
                className="mx-auto w-[22.875rem] max-w-full drop-shadow-xl"
              >
                <title>App screenshot</title>
                <defs>
                  <clipPath id="features-phone">
                    <rect width={316} height={684} rx={36} />
                  </clipPath>
                </defs>
                <path
                  d="M363.315 64.213C363.315 22.99 341.312 1 300.092 1H66.751C25.53 1 3.528 22.99 3.528 64.213v44.68l-.857.143A2 2 0 001 111.009v24.611a2 2 0 001.671 1.973l.95.158a2.26 2.26 0 01-.093.236v26.173c.212.1.398.296.541.643l-1.398.233A2 2 0 001 167.009v47.611a2 2 0 001.671 1.973l1.368.228c-.139.319-.314.533-.511.653v16.637c.221.104.414.313.56.689l-1.417.236A2 2 0 001 237.009v47.611a2 2 0 001.671 1.973l1.347.225c-.135.294-.302.493-.49.607v377.681c0 41.213 22 63.208 63.223 63.208h95.074c.947-.504 2.717-.843 4.745-.843h.141.194l.086-.001 33.704.005c1.849.043 3.442.37 4.323.838h95.074c41.222 0 63.223-21.999 63.223-63.212v-394.63c-.259-.275-.48-.796-.63-1.47l-.011-.133 1.655-.276A2 2 0 00366 266.62v-77.611a2 2 0 00-1.671-1.973l-1.712-.285c.148-.839.396-1.491.698-1.811V64.213Z"
                  fill="#4B5563"
                />
                <path
                  d="M16 59c0-23.748 19.252-43 43-43h246c23.748 0 43 19.252 43 43v615c0 23.196-18.804 42-42 42H58c-23.196 0-42-18.804-42-42V59Z"
                  fill="#111827"
                />
                <foreignObject
                  x={24}
                  y={24}
                  width={316}
                  height={684}
                  clipPath="url(#features-phone)"
                >
                  <img
                    alt=""
                    src="https://tailwindcss.com/plus-assets/img/component-images/mobile-app-screenshot.png"
                  />
                </foreignObject>
              </svg>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 opacity-40 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <img
              alt="Transistor"
              src="https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-gray-900.svg"
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            />
            <img
              alt="Reform"
              src="https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-gray-900.svg"
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            />
            <img
              alt="Tuple"
              src="https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-gray-900.svg"
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            />
            <img
              alt="SavvyCal"
              src="https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-gray-900.svg"
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
            />
            <img
              alt="Statamic"
              src="https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-gray-900.svg"
              width={158}
              height={48}
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
            />
          </div>
        </div>

        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 sm:px-6 lg:px-8">
          <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-20 sm:rounded-3xl sm:px-10 sm:py-24 lg:py-24 xl:px-24">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center lg:gap-y-0">
              <div className="lg:row-start-2 lg:max-w-md">
                <h2 className="text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl">
                  Bausteine, die zusammen ein System ergeben.
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                  Statt einzelner Skripte oder Bots bekommst du eine Schicht, in der alles zusammenläuft: Trigger,
                  Logik, Integrationen und Freigaben.
                </p>
              </div>
              <img
                alt="Produkt-Ansicht von Simple"
                src="https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png"
                width={2432}
                height={1442}
                className="relative -z-20 max-w-xl min-w-full rounded-xl shadow-xl ring-1 ring-white/10 lg:row-span-4 lg:w-[52rem] lg:max-w-none"
              />
              <div className="max-w-xl lg:row-start-3 lg:mt-10 lg:max-w-md lg:border-t lg:border-white/10 lg:pt-10">
                <dl className="max-w-xl space-y-8 text-base leading-7 text-gray-300 lg:max-w-none">
                  {primaryFeatures.map((feature) => (
                    <div key={feature.name} className="relative">
                      <dt className="ml-9 inline-block font-semibold text-white">
                        <feature.icon aria-hidden="true" className="absolute top-1 left-1 h-5 w-5 text-indigo-500" />
                        {feature.name}
                      </dt>
                      <dd className="inline"> {feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <div
              aria-hidden="true"
              className="pointer-events-none absolute top-1/2 left-12 -z-10 -translate-y-1/2 transform-gpu blur-3xl lg:top-auto lg:-bottom-48 lg:translate-y-0"
            >
              <div
                className="w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
              />
            </div>
          </div>
        </div>

        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Mehr Details</h2>
            <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
              Wie Simple deine Prozesse im Detail abbildet
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Unter der Haube kombinieren wir Events, Workflows, Policies und Datenhaltung. Die wichtigsten Teile
              findest du hier im Überblick.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <FeaturesGlassCards features={secondaryFeatures} />
          </div>
        </div>

        <section className="bg-indigo-800 mt-20 sm:mt-24">
          <div className="mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:px-8 lg:py-20">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Wie Simple in Teams ankommt
              </h2>
              <p className="mt-3 text-xl text-indigo-200 sm:mt-4">
                Ein kurzer Blick auf typische Effekte in laufenden Simple-Setups – von ersten Piloten bis zu
                unternehmensweiten Workflows.
              </p>
            </div>
            <dl className="mt-10 text-center sm:mx-auto sm:grid sm:max-w-3xl sm:grid-cols-3 sm:gap-8">
              <div className="flex flex-col">
                <dt className="order-2 mt-2 text-lg/6 font-medium text-indigo-200">
                  Automatisierte Vorgänge pro Monat
                </dt>
                <dd className="order-1 text-5xl font-bold tracking-tight text-white">
                  10.000+
                </dd>
              </div>
              <div className="mt-10 flex flex-col sm:mt-0">
                <dt className="order-2 mt-2 text-lg/6 font-medium text-indigo-200">
                  Zeit bis zum ersten Go-live
                </dt>
                <dd className="order-1 text-5xl font-bold tracking-tight text-white">
                  14 Tage
                </dd>
              </div>
              <div className="mt-10 flex flex-col sm:mt-0">
                <dt className="order-2 mt-2 text-lg/6 font-medium text-indigo-200">
                  Weniger manuelle Übergaben
                </dt>
                <dd className="order-1 text-5xl font-bold tracking-tight text-white">
                  40–60%
                </dd>
              </div>
            </dl>
          </div>
        </section>

        <FeaturesWorkflow />

        <section className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base/7 font-semibold text-indigo-600">
                Weitere Bausteine
              </h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
                Was Simple zusätzlich für dich übernimmt
              </p>
              <p className="mt-6 text-lg/8 text-gray-600">
                Neben den großen Kern-Workflows gibt es viele kleinere Features, die im Alltag den Unterschied
                machen – von Governance bis Monitoring.
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                {extraFeatures.map((feature) => (
                  <div key={feature.name} className="flex flex-col">
                    <dt className="flex items-center gap-x-3 text-base/7 font-semibold text-gray-900">
                      <feature.icon aria-hidden="true" className="size-5 flex-none text-indigo-600" />
                      {feature.name}
                    </dt>
                    <dd className="mt-4 flex flex-auto flex-col text-base/7 text-gray-600">
                      <p className="flex-auto">{feature.description}</p>
                      <p className="mt-6">
                        <a
                          href={feature.href}
                          className="text-sm/6 font-semibold text-indigo-600 hover:text-indigo-500"
                        >
                          Mehr erfahren <span aria-hidden="true">→</span>
                        </a>
                      </p>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        <section className="relative bg-white py-16">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 hidden h-1/2 bg-gray-50 lg:block"
          />
          <div className="mx-auto max-w-7xl bg-indigo-600 lg:bg-transparent lg:px-8">
            <div className="lg:grid lg:grid-cols-12">
              <div className="relative z-10 lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:bg-transparent lg:py-16">
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 h-1/2 bg-gray-50 lg:hidden"
                />
                <div className="mx-auto max-w-md px-6 sm:max-w-3xl lg:max-w-none lg:p-0">
                  <img
                    alt="Team, das gemeinsam an Systemen und Workflows arbeitet"
                    src="https://images.unsplash.com/photo-1507207611509-ec012433ff52?auto=format&fit=crop&w=934&q=80"
                    className="relative aspect-10/6 w-full rounded-3xl object-cover shadow-2xl sm:aspect-2/1 lg:aspect-square"
                  />
                </div>
              </div>

              <div className="relative bg-indigo-600 lg:col-span-10 lg:col-start-3 lg:row-start-1 lg:grid lg:grid-cols-10 lg:items-center lg:rounded-3xl">
                <div aria-hidden="true" className="absolute inset-0 hidden overflow-hidden rounded-3xl lg:block" />
                <div className="relative mx-auto max-w-md space-y-6 px-6 py-12 sm:max-w-3xl sm:py-16 lg:col-span-6 lg:col-start-4 lg:max-w-none lg:p-0">
                  <h2
                    id="join-heading"
                    className="text-3xl font-bold tracking-tight text-white"
                  >
                    Mit Simple schrittweise starten
                  </h2>
                  <p className="text-lg text-white">
                    Wir starten mit einem klar abgegrenzten Use-Case, bringen ihn stabil in Produktion und erweitern
                    dann Schritt für Schritt. So bleibt dein Risiko klein – und dein Team sieht schnell echte Effekte.
                  </p>
                  <a
                    href="/shop/abos"
                    className="block w-full rounded-md border border-transparent bg-white px-5 py-3 text-center text-base font-medium text-indigo-700 shadow-md hover:bg-gray-50 sm:inline-block sm:w-auto"
                  >
                    Erste Setups ansehen
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
</main>
    </div>
  );
}
