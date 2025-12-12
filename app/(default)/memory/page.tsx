import { messages } from '@/i18n'

export const metadata = {
  title: 'Memory – das Gedächtnis deiner KI',
  description: 'Erfahre, wie das Memory als Langzeitgedächtnis deiner KI-Assistenz funktioniert.',
}

export default function MemoryPage() {
  const content = messages.pages.memory

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
                {content.whatIsTitle}
              </h2>
              <p className="text-zinc-600">
                {content.whatIsBody}
              </p>
            </div>
            <div>
              <h2 className="font-inter-tight text-xl md:text-2xl text-zinc-900 mb-2">
                {content.whatStoresTitle}
              </h2>
              <p className="text-zinc-600">
                {content.whatStoresBody}
              </p>
            </div>
            <div>
              <h2 className="font-inter-tight text-xl md:text-2xl text-zinc-900 mb-2">
                {content.whyImportantTitle}
              </h2>
              <p className="text-zinc-600">
                {content.whyImportantBody}
              </p>
            </div>
          </div>
          <div className="mt-10">
            <p className="text-zinc-900 font-medium">
              {content.cta}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
