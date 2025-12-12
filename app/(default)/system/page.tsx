import {
  ArrowPathIcon,
  CheckIcon,
  CloudArrowUpIcon,
  Cog6ToothIcon,
  FingerPrintIcon,
  LockClosedIcon,
  ServerIcon,
  ChevronRightIcon,
} from "@heroicons/react/20/solid";
import { BoltIcon, CalendarDaysIcon, UsersIcon } from "@heroicons/react/24/outline";

import AnimatedStat from "@/components/ui/animated-stat";

export const metadata = {
  title: "Modernisierung – Simple",
  description: "System- und Prozessmodernisierung mit KI-gestützten Workflows und klarer Architektur.",
};

const primaryFeatures = [
  {
    name: "System-Landkarte in Echtzeit",
    description:
      "Wir erfassen deine Systemlandschaft strukturiert – von CRM bis Eigenentwicklung – und machen Abhängigkeiten sichtbar. So siehst du, wo Modernisierung am meisten Wirkung hat.",
    icon: BoltIcon,
  },
  {
    name: "Teams einbinden statt überfahren",
    description:
      "Modernisierung passiert nicht im Elfenbeinturm. Wir holen Fachbereiche, IT und Operations an einen Tisch und übersetzen Anforderungen in klare System-Bausteine.",
    icon: UsersIcon,
  },
  {
    name: "Rollouts schrittweise steuern",
    description:
      "Keine Big-Bang-Migration. Wir planen Modernisierung in Etappen, mit klaren Rückfallpunkten, Monitoring und messbaren Effekten pro Schritt.",
    icon: CalendarDaysIcon,
  },
];

const secondaryFeatures = [
  {
    name: "Schrittweise Migration",
    description:
      "Bestehende Systeme bleiben zunächst bestehen. Neue Services werden parallel aufgebaut und in kontrollierten Pfaden angebunden.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Sichere Integrationen",
    description:
      "Von API-Gateways bis Zugriffskonzepten: Wir achten auf saubere Authentifizierung, Rollen und Auditierbarkeit.",
    icon: LockClosedIcon,
  },
  {
    name: "Stabile Übergangsphasen",
    description:
      "Queues, Retry-Strategien und Monitoring sorgen dafür, dass Prozesse auch in der Umbauphase zuverlässig laufen.",
    icon: ArrowPathIcon,
  },
  {
    name: "Zugriffs- und Qualitätskontrolle",
    description:
      "Wer darf was auslösen, überschreiben oder freigeben? Wir bauen Regeln und Checks direkt in dein Systemdesign ein.",
    icon: FingerPrintIcon,
  },
  {
    name: "Offene Schnittstellen",
    description:
      "Wir priorisieren offene, dokumentierte APIs statt proprietärer Insellösungen – damit du später flexibel bleibst.",
    icon: Cog6ToothIcon,
  },
  {
    name: "Saubere Datenmigration",
    description:
      "Backups, Replikation, Testmigrationen: Daten werden strukturiert übertragen, nicht einfach „irgendwie rüberkopiert“.",
    icon: ServerIcon,
  },
];

const stats = [
  { id: 1, name: "Systeme, die wir in Modernisierung begleitet haben", value: "120+" },
  { id: 2, name: "durchschnittlich weniger manuelle Schritte pro Kernprozess", value: "-35%" },
  { id: 3, name: "geplante Downtime während Go-lives", value: "< 30 min" },
  { id: 4, name: "durchschnittliche Zeit bis zum ersten produktiven Use-Case", value: "4–6 Wochen" },
];

const includedFeatures = [
  "KI-Potential-Check auf Basis deiner bestehenden Prozesse",
  "System- und Prozesslandkarte mit Abhängigkeiten",
  "Priorisierte Modernisierungs-Roadmap mit Quick-Wins",
  "Begleitung bis zum laufenden System inklusive Monitoring",
];

export default function ModernisierungPage() {
  return (
    <div className="bg-white">
      <main>
        <section className="relative overflow-hidden bg-white">
          <div className="mx-auto max-w-7xl px-6 pt-16 pb-24 sm:pt-24 sm:pb-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-32">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
              <div className="flex">
                <div className="relative flex items-center gap-x-4 rounded-full bg-indigo-50 px-4 py-1 text-sm/6 text-indigo-700 ring-1 ring-indigo-100">
                  <span className="font-semibold">System-Modernisierung mit Simple</span>
                  <span aria-hidden="true" className="h-4 w-px bg-indigo-200" />
                  <span className="flex items-center gap-x-1 text-indigo-700">
                    <span>Von Legacy-Landschaft zum klaren System</span>
                    <ChevronRightIcon aria-hidden="true" className="-mr-1 size-4" />
                  </span>
                </div>
              </div>
              <h1 className="mt-10 text-5xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-6xl">
                Modernisiere deine Systeme ohne Stillstand.
              </h1>
              <p className="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                Wir helfen dir, historisch gewachsene Systemlandschaften in klare, wartbare und KI-fähige Architekturen
                zu überführen – ohne den laufenden Betrieb zu gefährden.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#kontakt"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Erstgespräch buchen
                </a>
                <a href="#ablauf" className="text-sm/6 font-semibold text-gray-900">
                  Ablauf der Modernisierung ansehen <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            <div className="mt-16 sm:mt-20 lg:mt-0 lg:flex lg:flex-1 lg:justify-end">
              <div className="max-w-xl lg:max-w-lg">
                <div className="rounded-2xl bg-gray-900 px-6 py-5 text-sm/6 text-gray-100 shadow-xl ring-1 ring-gray-800">
                  <p className="text-xs font-semibold uppercase tracking-wide text-indigo-300">
                    Vom KI-Potential-Check zum laufenden System
                  </p>
                  <p className="mt-3 text-sm text-gray-200">
                    Wir starten mit einem strukturierten KI- und System-Potential-Check: Welche Prozesse eignen sich,
                    welche Systeme sind kritisch, wo lauern Risiken? Daraus entsteht eine Roadmap, die wir Schritt für
                    Schritt in produktive Workflows übersetzen – mit Monitoring, Rollback-Strategien und klaren
                    Verantwortlichkeiten.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-16 sm:pb-24 lg:px-8">
          <h2 className="text-center text-lg/8 font-semibold text-gray-900">
            Unternehmen modernisieren mit Simple ihre Systeme und Prozesse
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 opacity-70 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
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
        </section>

        <section
          id="kennzahlen"
          className="mx-auto max-w-7xl px-6 pb-24 sm:pb-32 lg:px-8"
        >
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
            <h2 className="text-base/8 font-semibold text-indigo-600">Systemkennzahlen</h2>
            <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
              Modernisierung, die sich in Zahlen messen lässt.
            </p>
            <p className="mt-6 text-lg/8 text-gray-700">
              Jede Modernisierung wird mit klaren Metriken aufgesetzt: Reaktionszeiten, manuelle Aufwände, Fehlerraten
              und Stabilität. So siehst du, was sich wirklich verändert.
            </p>
          </div>
          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 text-gray-900 sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.id} className="flex flex-col gap-y-3 border-l border-gray-900/15 pl-6">
                <dt className="text-sm/6">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight"><AnimatedStat value={stat.value} /></dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="bg-white pb-24 sm:pb-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl sm:text-center">
              <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl sm:text-balance">
                Vom KI-Potential-Check zum laufenden System – was alles enthalten ist.
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                Wir verbinden Analyse, Architektur und Umsetzung in einem durchgängigen Paket – ohne versteckte
                Abhängigkeiten und ohne Blackbox.
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
              <div className="p-8 sm:p-10 lg:flex-auto">
                <h3 className="text-3xl font-semibold tracking-tight text-gray-900">Scope eines Modernisierungsprojekts</h3>
                <p className="mt-6 text-base/7 text-gray-600">
                  Ein typisches Projekt startet mit einem klaren KI- und System-Potential-Check und endet mit
                  produktiven Workflows in deinem Live-System. Dazwischen dokumentieren wir jeden Schritt so, dass du
                  später selbst erweitern kannst.
                </p>
                <div className="mt-10 flex items-center gap-x-4">
                  <h4 className="flex-none text-sm/6 font-semibold text-indigo-600">Typischer Umfang</h4>
                  <div className="h-px flex-auto bg-gray-100" />
                </div>
                <ul
                  role="list"
                  className="mt-8 grid grid-cols-1 gap-4 text-sm/6 text-gray-600 sm:grid-cols-2 sm:gap-6"
                >
                  {includedFeatures.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckIcon aria-hidden="true" className="h-6 w-5 flex-none text-indigo-600" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:shrink-0">
                <div className="rounded-2xl bg-gray-50 py-10 text-center inset-ring inset-ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                  <div className="mx-auto max-w-xs px-8">
                    <p className="text-base font-semibold text-gray-600">
                      Von der ersten Analyse bis zum laufenden System
                    </p>
                    <p className="mt-6 text-sm/6 text-gray-600">
                      In einem kurzen Gespräch klären wir, welcher Umfang zu deiner Situation passt und wie wir
                      schrittweise starten können.
                    </p>
                    <a
                      href="#kontakt"
                      className="mt-8 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Modernisierungsgespräch anfragen
                    </a>
                    <p className="mt-5 text-xs/5 text-gray-500">
                      Transparente Projektangebote, klare Meilensteine und nachvollziehbare Ergebnisse.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="ablauf"
          className="mx-auto max-w-7xl px-6 pb-24 sm:pb-32 lg:px-8"
        >
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base/7 font-semibold text-indigo-600">Ablauf</h2>
            <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
              Von der Bestandsaufnahme bis zum produktiven System.
            </p>
            <p className="mt-6 text-lg/8 text-gray-600">
              Wir kombinieren Architektur-Workshops, technische Umsetzung und begleitendes Change Management in einem
              durchgängigen Setup – abgestimmt auf dein Team und deine bestehende IT.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {primaryFeatures.map((feature) => (
                <div key={feature.name} className="flex flex-col">
                  <dt className="text-base/7 font-semibold text-gray-900">
                    <div className="mb-6 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
                      <feature.icon aria-hidden="true" className="size-6 text-white" />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-1 flex flex-auto flex-col text-base/7 text-gray-600">
                    <p className="flex-auto">{feature.description}</p>
                    <p className="mt-6 text-sm/6 font-semibold text-indigo-600">
                      Dieser Schritt wird gemeinsam mit deinem Team geplant.
                    </p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="mt-0 pb-24 sm:pb-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2 className="text-base/7 font-semibold text-indigo-600">Bausteine</h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl sm:text-balance">
                Alles, was du für eine sichere Modernisierung brauchst.
              </p>
              <p className="mt-6 text-lg/8 text-gray-600">
                Wir kombinieren Architektur, Implementierung und Betrieb – und dokumentieren deine neue Systemwelt so,
                dass sie auch ohne externe Hilfe weiterentwickelt werden kann.
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden pt-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <img
                alt="Visualisierung eines Modernisierungsprojekts"
                src="https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png"
                width={2432}
                height={1442}
                className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
              />
              <div aria-hidden="true" className="relative">
                <div className="absolute -inset-x-20 bottom-0 bg-linear-to-t from-white pt-[7%]" />
              </div>
            </div>
          </div>
          <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
            <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base/7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
              {secondaryFeatures.map((feature) => (
                <div key={feature.name} className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <feature.icon aria-hidden="true" className="absolute top-1 left-1 size-5 text-indigo-600" />
                    {feature.name}
                  </dt>{" "}
                  <dd className="inline">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section
          id="kontakt"
          className="relative isolate px-6 pb-32 sm:pb-40 lg:px-8"
        >
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
              Modernisierung starten – ohne Overhead.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg/8 text-pretty text-gray-600">
              In einem kurzen Gespräch klären wir, welche Systeme und Prozesse für dich kritisch sind, wo wir starten
              und welche Effekte du realistisch erwarten kannst.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:hello@simple.systems?subject=Modernisierung%20anfragen"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Gespräch anfragen
              </a>
              <a href="/about" className="text-sm/6 font-semibold text-gray-900">
                Mehr über Simple erfahren <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
