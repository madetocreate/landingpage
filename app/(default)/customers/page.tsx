export const metadata = {
  title: "Features - Simple",
  description: "Überblick über die wichtigsten Funktionen unserer KI-Plattform.",
};

import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from "@heroicons/react/20/solid";
import { landingContent } from "@/content";

const featureIcons = {
  cloud: CloudArrowUpIcon,
  lock: LockClosedIcon,
  server: ServerIcon,
} as const;

export default function FeaturesPage() {
  const { featuresPage } = landingContent;
  const { story, bento } = featuresPage;

  return (
    <>
      <div className="overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:ml-auto lg:pt-4 lg:pl-4">
              <div className="lg:max-w-lg">
                <h2 className="text-base/7 font-semibold text-indigo-600">
                  {featuresPage.eyebrow}
                </h2>
                <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                  {featuresPage.title}
                </p>
                <p className="mt-6 text-lg/8 text-gray-600">
                  {featuresPage.subtitle}
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                  {featuresPage.features.map((feature) => {
                    const Icon =
                      featureIcons[feature.iconKey as keyof typeof featureIcons] ??
                      CloudArrowUpIcon;
                    return (
                      <div key={feature.key} className="relative pl-9">
                        <dt className="inline font-semibold text-gray-900">
                          <Icon
                            aria-hidden="true"
                            className="absolute top-1 left-1 size-5 text-indigo-600"
                          />
                          {feature.name}
                        </dt>{" "}
                        <dd className="inline">{feature.description}</dd>
                      </div>
                    );
                  })}
                </dl>
              </div>
            </div>
            <div className="flex items-start justify-end lg:order-first">
              <img
                alt={featuresPage.image.alt}
                src={featuresPage.image.src}
                width={2432}
                height={1442}
                className="w-3xl max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-228"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <p className="text-base/7 font-semibold text-indigo-600">
              {story.eyebrow}
            </p>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
              {story.title}
            </h1>
            <div className="mt-10 grid max-w-xl grid-cols-1 gap-8 text-base/7 text-gray-700 lg:max-w-none lg:grid-cols-2">
              <div>
                {story.paragraphsLeft.map((paragraph, idx) => (
                  <p key={idx} className={idx === 0 ? "" : "mt-8"}>
                    {paragraph}
                  </p>
                ))}
              </div>
              <div>
                {story.paragraphsRight.map((paragraph, idx) => (
                  <p key={idx} className={idx === 0 ? "" : "mt-8"}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            <div className="mt-10 flex">
              <a
                href={story.cta.href ?? "#"}
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {story.cta.label}
              </a>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden pt-16 lg:pt-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <img
              alt={story.image.alt}
              src={story.image.src}
              className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
            />
            <div aria-hidden="true" className="relative">
              <div className="absolute -inset-x-20 bottom-0 bg-linear-to-t from-white pt-[7%]" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-base/7 font-semibold text-indigo-600">
            {bento.eyebrow}
          </h2>
          <p className="mt-2 max-w-lg text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
            {bento.title}
          </p>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
            <div className="flex p-px lg:col-span-4">
              <div className="w-full overflow-hidden rounded-lg bg-white shadow-sm outline outline-black/5 max-lg:rounded-t-4xl lg:rounded-tl-4xl">
                <img
                  alt={bento.cards[0].imageAlt}
                  src={bento.cards[0].imageUrl}
                  className="h-80 object-cover object-left"
                />
                <div className="p-10">
                  <h3 className="text-sm/4 font-semibold text-gray-500">
                    {bento.cards[0].section}
                  </h3>
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-900">
                    {bento.cards[0].title}
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                    {bento.cards[0].description}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex p-px lg:col-span-2">
              <div className="w-full overflow-hidden rounded-lg bg-white shadow-sm outline outline-black/5 lg:rounded-tr-4xl">
                <img
                  alt={bento.cards[1].imageAlt}
                  src={bento.cards[1].imageUrl}
                  className="h-80 object-cover"
                />
                <div className="p-10">
                  <h3 className="text-sm/4 font-semibold text-gray-500">
                    {bento.cards[1].section}
                  </h3>
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-900">
                    {bento.cards[1].title}
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                    {bento.cards[1].description}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex p-px lg:col-span-2">
              <div className="w-full overflow-hidden rounded-lg bg-white shadow-sm outline outline-black/5 lg:rounded-bl-4xl">
                <img
                  alt={bento.cards[2].imageAlt}
                  src={bento.cards[2].imageUrl}
                  className="h-80 object-cover"
                />
                <div className="p-10">
                  <h3 className="text-sm/4 font-semibold text-gray-500">
                    {bento.cards[2].section}
                  </h3>
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-900">
                    {bento.cards[2].title}
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                    {bento.cards[2].description}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex p-px lg:col-span-4">
              <div className="w-full overflow-hidden rounded-lg bg-white shadow-sm outline outline-black/5 max-lg:rounded-b-4xl lg:rounded-br-4xl">
                <img
                  alt={bento.cards[3].imageAlt}
                  src={bento.cards[3].imageUrl}
                  className="h-80 object-cover object-left"
                />
                <div className="p-10">
                  <h3 className="text-sm/4 font-semibold text-gray-500">
                    {bento.cards[3].section}
                  </h3>
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-900">
                    {bento.cards[3].title}
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                    {bento.cards[3].description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
