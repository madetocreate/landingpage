import { messages } from '@/i18n'

export const metadata = {
  title: 'Anwendungsfälle – so hilft unsere KI in der Praxis',
  description: 'Konkrete Beispiele aus Einzelhandel, Arztpraxis, Handwerk, Freelancing, Marketing und mehr.',
}

export default function UseCasesPage() {
  const content = messages.pages.useCases

  return (
    <section className="relative bg-white">
      <div className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="font-inter-tight text-3xl md:text-4xl text-zinc-900 mb-4">
            {content.title}
          </h1>
          <p className="text-lg text-zinc-600 mb-8">
            {content.intro}
          </p>
          <div className="space-y-8">
            <div>
              <h2 className="font-inter-tight text-xl md:text-2xl text-zinc-900 mb-2">
                {content.retailTitle}
              </h2>
              <p className="text-zinc-600">
                {content.retailBody}
              </p>
            </div>
            <div>
              <h2 className="font-inter-tight text-xl md:text-2xl text-zinc-900 mb-2">
                {content.medicalTitle}
              </h2>
              <p className="text-zinc-600">
                {content.medicalBody}
              </p>
            </div>
            <div>
              <h2 className="font-inter-tight text-xl md:text-2xl text-zinc-900 mb-2">
                {content.freelancerTitle}
              </h2>
              <p className="text-zinc-600">
                {content.freelancerBody}
              </p>
            </div>
            <div>
              <h2 className="font-inter-tight text-xl md:text-2xl text-zinc-900 mb-2">
                {content.craftTitle}
              </h2>
              <p className="text-zinc-600">
                {content.craftBody}
              </p>
            </div>
            <div>
              <h2 className="font-inter-tight text-xl md:text-2xl text-zinc-900 mb-2">
                {content.marketingTitle}
              </h2>
              <p className="text-zinc-600">
                {content.marketingBody}
              </p>
            </div>
          </div>
          <div className="mt-10">
            <p className="text-zinc-900 font-medium">
              {content.outro}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
