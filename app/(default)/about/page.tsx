import AnimatedStat from "@/components/ui/animated-stat";

export const metadata = {
  title: "Über uns - Simple",
  description: "Lerne das Team und die Motivation hinter Simple kennen.",
};

const stats = [
  { label: "Automationen pro Monat über alle Setups", value: "10.000+" },
  { label: "Fokus", value: "Teams, die im Alltag entlastet werden wollen" },
  { label: "Zeit bis zum ersten Go-live", value: "14 Tage" },
];

const values = [
  {
    name: "Klarheit vor Hype",
    description:
      "Wir bauen keine Buzzword-Präsentationen, sondern Systeme, die echten Alltag entlasten. Entscheidungen basieren auf Daten, Gesprächen mit Teams und realen Use-Cases.",
  },
  {
    name: "System statt Insellösungen",
    description:
      "Jede neue Automatisierung muss sich in das Gesamtbild einfügen. Simple denkt immer in Systemen und Schnittstellen – nicht in einzelnen Bots.",
  },
  {
    name: "Gemeinsam mit den Teams",
    description:
      "Die besten Lösungen entstehen im Dialog mit den Menschen, die täglich mit Kund:innen, Prozessen und Tools arbeiten. Wir hören zu, bevor wir bauen.",
  },
  {
    name: "Verantwortung für Qualität",
    description:
      "KI darf nicht einfach „irgendwas“ tun. Wir definieren klare Leitplanken, Qualitätsmetriken und Feedback-Schleifen für jedes Setup.",
  },
  {
    name: "Transparenz statt Blackbox",
    description:
      "Du sollst jederzeit nachvollziehen können, warum das System etwas tut. Logs, Regeln und Entscheidungen sind kein Geheimnis, sondern Teil des Produkts.",
  },
  {
    name: "Lernen in Iterationen",
    description:
      "Wir planen nicht das perfekte Endbild, sondern sinnvolle erste Schritte mit messbarem Effekt – und verbessern dann kontinuierlich weiter.",
  },
];

const team = [
  {
    name: "Michael Foster",
    role: "System Architecture",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
  },
  {
    name: "Dries Vincent",
    role: "Customer Systems",
    imageUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
  },
  {
    name: "Lindsay Walton",
    role: "Product & UX",
    imageUrl:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
  },
  {
    name: "Courtney Henry",
    role: "Service Design",
    imageUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
  },
  {
    name: "Tom Cook",
    role: "Product Strategy",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
  },
  {
    name: "Whitney Francis",
    role: "Content & Training",
    imageUrl:
      "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
  },
  {
    name: "Leonard Krasner",
    role: "Design Systems",
    imageUrl:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
  },
  {
    name: "Floyd Miles",
    role: "Operations",
    imageUrl:
      "https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
  },
  {
    name: "Emily Selman",
    role: "Customer Experience",
    imageUrl:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
  },
  {
    name: "Kristin Watson",
    role: "People & Culture",
    imageUrl:
      "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
  },
  {
    name: "Emma Dorsey",
    role: "Engineering",
    imageUrl:
      "https://images.unsplash.com/photo-1505840717430-882ce147ef2d?auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
  },
  {
    name: "Alicia Bell",
    role: "Customer Success",
    imageUrl:
      "https://images.unsplash.com/photo-1509783236416-c9ad59bae472?auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white">
      <main className="isolate">
        <div className="relative isolate -z-10">
          <svg
            aria-hidden="true"
            className="absolute inset-x-0 top-0 -z-10 h-256 w-full mask-[radial-gradient(32rem_32rem_at_center,white,transparent)] stroke-gray-200"
          >
            <defs>
              <pattern
                x="50%"
                y={-1}
                id="about-grid-pattern"
                width={200}
                height={200}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect fill="url(#about-grid-pattern)" width="100%" height="100%" strokeWidth={0} />
          </svg>
          <div
            aria-hidden="true"
            className="absolute top-0 right-0 left-1/2 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
          >
            <div
              style={{
                clipPath:
                  "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
              }}
              className="aspect-801/1036 w-200.25 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
            />
          </div>
          <div className="overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 pt-36 pb-32 sm:pt-60 lg:px-8 lg:pt-32">
              <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                <div className="relative w-full lg:max-w-xl lg:shrink-0 xl:max-w-2xl">
                  <h1 className="text-5xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-7xl">
                    Wir bauen die Systemschicht für deinen KI-Alltag
                  </h1>
                  <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:max-w-md sm:text-xl/8 lg:max-w-none">
                    Simple ist entstanden aus einer einfachen Beobachtung: Teams haben genug Tools, aber zu wenig Zeit,
                    sie sinnvoll zu verbinden. Wir helfen Unternehmen, ihre Abläufe so zu strukturieren, dass KI wirklich
                    Arbeit abnimmt – statt neue To-dos zu erzeugen.
                  </p>
                </div>
                <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                  <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-0 xl:pt-80">
                    <div className="relative">
                      <img
                        alt="Menschen, die gemeinsam an Systemen arbeiten"
                        src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&h=528&q=80"
                        className="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset" />
                    </div>
                  </div>
                  <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                    <div className="relative">
                      <img
                        alt="Whiteboard mit Prozessen und System-Skizzen"
                        src="https://images.unsplash.com/photo-1485217988980-11786ced9454?auto=format&fit=crop&h=528&q=80"
                        className="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset" />
                    </div>
                    <div className="relative">
                      <img
                        alt="Arbeitsplatz mit Fokus auf strukturierte Arbeit"
                        src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=396&h=528&q=80"
                        className="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset" />
                    </div>
                  </div>
                  <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                    <div className="relative">
                      <img
                        alt="Team, das an Prozessen und Architektur arbeitet"
                        src="https://images.unsplash.com/photo-1670272504528-790c24957dda?auto=format&fit=crop&crop=left&w=400&h=528&q=80"
                        className="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset" />
                    </div>
                    <div className="relative">
                      <img
                        alt="Zusammenarbeit in einem Meetingraum"
                        src="https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?auto=format&fit=crop&h=528&q=80"
                        className="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
              Unsere Mission
            </h2>
            <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
              <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
                <p className="text-xl/8 text-gray-600">
                  Wir wollen, dass Unternehmen KI nicht als fremdes Add-on erleben, sondern als Teil ihrer täglichen
                  Arbeit. Simple übersetzt Geschäftslogik in Systeme: Welche Anfragen kommen rein, wer muss informiert
                  werden, welche Schritte können automatisiert werden?
                </p>
                <p className="mt-10 max-w-xl text-base/7 text-gray-700">
                  Dafür kombinieren wir modernes System-Design mit sehr pragmatischen Fragen: Was entlastet das Team
                  wirklich? Welche Schritte dürfen nie automatisiert werden? Und wie stellen wir sicher, dass alle
                  Beteiligten verstehen, was das System macht – auch ohne Prompt-Ingenieur:innen im Haus?
                </p>
              </div>
              <div className="lg:flex lg:flex-auto lg:justify-center">
                <dl className="w-64 space-y-8 xl:w-80">
                  {stats.map((stat) => (
                    <div key={stat.label} className="flex flex-col-reverse gap-y-4">
                      <dt className="text-base/7 text-gray-600">{stat.label}</dt>
                      <dd className="text-5xl font-semibold tracking-tight text-gray-900"><AnimatedStat value={stat.value} /></dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
          <img
            alt="Gemeinsame Arbeit an Systemen und Prozessen"
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=2832&q=80"
            className="aspect-5/2 w-full object-cover outline-1 -outline-offset-1 outline-black/5 xl:rounded-3xl"
          />
        </div>

        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
              Werte, nach denen wir arbeiten
            </h2>
            <p className="mt-6 text-lg/8 text-gray-700">
              Gute Systeme entstehen nicht zufällig. Sie sind das Ergebnis aus klaren Prinzipien, ehrlicher Kommunikation
              und der Bereitschaft, Dinge Schritt für Schritt besser zu machen.
            </p>
          </div>
          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base/7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {values.map((value) => (
              <div key={value.name}>
                <dt className="font-semibold text-gray-900">{value.name}</dt>
                <dd className="mt-1 text-gray-600">{value.description}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative isolate -z-10 mt-32 sm:mt-48">
          <div className="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 justify-center overflow-hidden mask-[radial-gradient(50%_45%_at_50%_55%,white,transparent)]">
            <svg aria-hidden="true" className="h-160 w-7xl flex-none stroke-gray-200">
              <defs>
                <pattern
                  x="50%"
                  y="50%"
                  id="about-logo-pattern"
                  width={200}
                  height={200}
                  patternUnits="userSpaceOnUse"
                  patternTransform="translate(-100 0)"
                >
                  <path d="M.5 200V.5H200" fill="none" />
                </pattern>
              </defs>
              <svg x="50%" y="50%" className="overflow-visible fill-gray-50">
                <path d="M-300 0h201v201h-201Z M300 200h201v201h-201Z" strokeWidth={0} />
              </svg>
              <rect fill="url(#about-logo-pattern)" width="100%" height="100%" strokeWidth={0} />
            </svg>
          </div>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-center text-lg/8 font-semibold text-gray-900">
              Projekte, an denen wir gearbeitet haben
            </h2>
            <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
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
        </div>

        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-48 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
              Das Team hinter Simple
            </h2>
            <p className="mt-6 text-lg/8 text-gray-600">
              Wir sind eine kleine, fokussierte Gruppe von Menschen mit einem gemeinsamen Ziel: Systeme zu bauen, die
              Teams entlasten, statt sie zu überfordern. Technik ist unser Werkzeug – nicht der Selbstzweck.
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6"
          >
            {team.map((person) => (
              <li key={person.name}>
                <img
                  alt={person.name}
                  src={person.imageUrl}
                  className="mx-auto size-24 rounded-full outline-1 -outline-offset-1 outline-black/5"
                />
                <h3 className="mt-6 text-base/7 font-semibold tracking-tight text-gray-900">{person.name}</h3>
                <p className="text-sm/6 text-gray-600">{person.role}</p>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}
