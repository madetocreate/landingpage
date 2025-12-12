import { messages } from '@/i18n'

export const metadata = {
  title: 'So funktioniert die KI-Assistenz',
  description: 'Einfach erklärt: Eingabe, Orchestrierung der Module und lernendes Memory.',
}

export default function HowItWorksPage() {
  const content = messages.pages.howItWorks

  return (
    <section className="relative bg-zinc-50">
      <div className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h1 className="font-inter-tight text-3xl md:text-4xl text-zinc-900 mb-4">
            {content.title}
          </h1>
          <p className="text-lg text-zinc-600 mb-8">
            {content.intro}
          </p>
          <div className="space-y-8">
            <div>
              <h2 className="font-inter-tight text-xl md:text-2xl text-zinc-900 mb-2">
                {content.step1Title}
              </h2>
              <p className="text-zinc-600">
                {content.step1Body}
              </p>
            </div>
            <div>
              <h2 className="font-inter-tight text-xl md:text-2xl text-zinc-900 mb-2">
                {content.step2Title}
              </h2>
              <p className="text-zinc-600">
                {content.step2Body}
              </p>
            </div>
            <div>
              <h2 className="font-inter-tight text-xl md:text-2xl text-zinc-900 mb-2">
                {content.step3Title}
              </h2>
              <p className="text-zinc-600">
                {content.step3Body}
              </p>
            </div>
          </div>
          <div className="mt-10">
            <p className="text-zinc-900 font-medium">
              {content.summary}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
