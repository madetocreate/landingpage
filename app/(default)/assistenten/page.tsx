import { messages } from '@/i18n'

export const metadata = {
  title: 'Assistenten – Module im Überblick',
  description:
    'Lerne die Module deiner KI-Assistenz kennen: Kommunikation, Bewertungen, Analyse, Marketing, Kalender, Recherche und mehr.',
}

export default function AssistantsPage() {
  const content = messages.pages.assistants

  return (
    <section className="relative bg-white">
      <div className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h1 className="font-inter-tight text-3xl md:text-4xl text-zinc-900 mb-4">
            {content.title}
          </h1>
          <p className="text-lg text-zinc-600 mb-10">
            {content.intro}
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-zinc-200 bg-zinc-50/80 p-5">
              <h2 className="font-inter-tight text-xl text-zinc-900 mb-2">
                {content.communicationTitle}
              </h2>
              <p className="text-zinc-600">
                {content.communicationBody}
              </p>
            </div>
            <div className="rounded-lg border border-zinc-200 bg-zinc-50/80 p-5">
              <h2 className="font-inter-tight text-xl text-zinc-900 mb-2">
                {content.reviewsTitle}
              </h2>
              <p className="text-zinc-600">
                {content.reviewsBody}
              </p>
            </div>
            <div className="rounded-lg border border-zinc-200 bg-zinc-50/80 p-5">
              <h2 className="font-inter-tight text-xl text-zinc-900 mb-2">
                {content.analysisTitle}
              </h2>
              <p className="text-zinc-600">
                {content.analysisBody}
              </p>
            </div>
            <div className="rounded-lg border border-zinc-200 bg-zinc-50/80 p-5">
              <h2 className="font-inter-tight text-xl text-zinc-900 mb-2">
                {content.marketingTitle}
              </h2>
              <p className="text-zinc-600">
                {content.marketingBody}
              </p>
            </div>
            <div className="rounded-lg border border-zinc-200 bg-zinc-50/80 p-5">
              <h2 className="font-inter-tight text-xl text-zinc-900 mb-2">
                {content.calendarTitle}
              </h2>
              <p className="text-zinc-600">
                {content.calendarBody}
              </p>
            </div>
            <div className="rounded-lg border border-zinc-200 bg-zinc-50/80 p-5">
              <h2 className="font-inter-tight text-xl text-zinc-900 mb-2">
                {content.researchTitle}
              </h2>
              <p className="text-zinc-600">
                {content.researchBody}
              </p>
            </div>
            <div className="rounded-lg border border-zinc-200 bg-zinc-50/80 p-5">
              <h2 className="font-inter-tight text-xl text-zinc-900 mb-2">
                {content.webshopTitle}
              </h2>
              <p className="text-zinc-600">
                {content.webshopBody}
              </p>
            </div>
            <div className="rounded-lg border border-zinc-200 bg-zinc-50/80 p-5">
              <h2 className="font-inter-tight text-xl text-zinc-900 mb-2">
                {content.builderTitle}
              </h2>
              <p className="text-zinc-600">
                {content.builderBody}
              </p>
            </div>
          </div>
          <div className="mt-10">
            <p className="text-zinc-900 font-medium">
              {content.orchestrationNote}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
