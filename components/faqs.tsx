import Accordion from "@/components/accordion";
import { landingContent } from "@/content";

export default function Faqs() {
  const { faq } = landingContent;

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <h2 className="text-3xl font-bold md:text-4xl">
              {faq.title}
            </h2>
          </div>
          <div className="mx-auto max-w-3xl">
            <div className="space-y-2">
              {faq.items.map((item, index) => (
                <Accordion
                  key={index}
                  title={item.question}
                  id={`faqs-${index}`}
                  active={index === 0}
                >
                  {item.answer}
                </Accordion>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
