"use client";

import { CheckIcon } from "@heroicons/react/20/solid";
import { landingContent } from "@/content";

function classNames(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export default function PricingTables() {
  const { pricing } = landingContent;
  const tiers = pricing.tiers;
  const enterprise = pricing.enterprise;

  return (
    <>
      <form className="group/tiers isolate overflow-hidden bg-white">
        <div className="flow-root border-b border-b-transparent bg-gray-900 pt-24 pb-16 sm:pt-32 lg:pb-0">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="relative z-10">
              <h2 className="mx-auto max-w-4xl text-center text-5xl font-semibold tracking-tight text-balance text-white sm:text-6xl">
                {pricing.title}
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">
                {pricing.subtitle}
              </p>
              <div className="mt-16 flex justify-center">
                <fieldset aria-label="Payment frequency">
                  <div className="grid grid-cols-2 gap-x-1 rounded-full bg-white/5 p-1 text-center text-xs/5 font-semibold text-white">
                    <label className="group relative rounded-full px-2.5 py-1 has-checked:bg-indigo-500">
                      <input
                        defaultValue="monthly"
                        defaultChecked
                        name="frequency"
                        type="radio"
                        className="absolute inset-0 appearance-none rounded-full"
                      />
                      <span className="text-white">{pricing.frequencyLabels.monthly}</span>
                    </label>
                    <label className="group relative rounded-full px-2.5 py-1 has-checked:bg-indigo-500">
                      <input
                        defaultValue="annually"
                        name="frequency"
                        type="radio"
                        className="absolute inset-0 appearance-none rounded-full"
                      />
                      <span className="text-white">{pricing.frequencyLabels.annually}</span>
                    </label>
                  </div>
                </fieldset>
              </div>
            </div>
            <div className="relative mx-auto mt-10 grid max-w-md grid-cols-1 gap-y-8 lg:mx-0 lg:-mb-14 lg:max-w-none lg:grid-cols-3">
              <svg
                viewBox="0 0 1208 1024"
                aria-hidden="true"
                className="absolute -bottom-48 left-1/2 h-256 -translate-x-1/2 translate-y-1/2 mask-[radial-gradient(closest-side,white,transparent)] lg:-top-48 lg:bottom-auto lg:translate-y-0"
              >
                <ellipse cx={604} cy={512} rx={604} ry={512} fill="url(#d25c25d4-6d43-4bf9-b9ac-1842a30a4867)" />
                <defs>
                  <radialGradient id="d25c25d4-6d43-4bf9-b9ac-1842a30a4867">
                    <stop stopColor="var(--color-accent)" />
                    <stop offset={1} stopColor="var(--color-accent-soft)" />
                  </radialGradient>
                </defs>
              </svg>
              <div
                aria-hidden="true"
                className="hidden lg:absolute lg:inset-x-px lg:top-4 lg:bottom-0 lg:block lg:rounded-t-2xl lg:bg-gray-800/80 lg:ring-1 lg:ring-white/10"
              />
              {tiers.map((tier) => (
                <div
                  key={tier.id}
                  data-featured={tier.featured ? "true" : undefined}
                  className={classNames(
                    tier.featured
                      ? "z-10 bg-white shadow-xl outline-1 outline-gray-900/10"
                      : "bg-gray-800/80 outline-1 -outline-offset-1 outline-white/10 lg:bg-transparent lg:pb-14 lg:outline-0",
                    "group/tier relative rounded-2xl"
                  )}
                >
                  <div className="p-8 lg:pt-12 xl:p-10 xl:pt-14">
                    <h3
                      id={`tier-${tier.id}`}
                      className="text-sm/6 font-semibold text-white group-data-featured/tier:text-gray-900"
                    >
                      {tier.name}
                    </h3>
                    <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between lg:flex-col lg:items-stretch">
                      <div className="mt-2 flex items-center gap-x-4">
                        <p className="text-4xl font-semibold tracking-tight text-white group-not-has-[[name=frequency][value=monthly]:checked]/tiers:hidden group-data-featured/tier:text-gray-900">
                          {tier.priceMonthly}
                        </p>
                        <p className="text-4xl font-semibold tracking-tight text-white group-not-has-[[name=frequency][value=annually]:checked]/tiers:hidden group-data-featured/tier:text-gray-900">
                          {tier.priceAnnually}
                        </p>
                        <div className="text-sm">
                          <p className="text-white group-data-featured/tier:text-gray-900">
                            {tier.currency}
                          </p>
                          <p className="text-gray-400 group-not-has-[[name=frequency][value=monthly]:checked]/tiers:hidden group-data-featured/tier:text-gray-500">
                            {tier.billedMonthlyText}
                          </p>
                          <p className="text-gray-400 group-not-has-[[name=frequency][value=annually]:checked]/tiers:hidden group-data-featured/tier:text-gray-500">
                            {tier.billedAnnuallyText}
                          </p>
                        </div>
                      </div>
                      <button
                        value={tier.id}
                        name="tier"
                        type="submit"
                        aria-describedby={`tier-${tier.id}`}
                        className="w-full rounded-md bg-white/10 px-3 py-2 text-center text-sm/6 font-semibold text-white not-group-data-featured:inset-ring not-group-data-featured:inset-ring-white/5 group-data-featured/tier:bg-indigo-600 group-data-featured/tier:shadow-xs hover:bg-white/20 group-data-featured/tier:hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/75 group-data-featured/tier:focus-visible:outline-indigo-600"
                      >
                        {tier.buttonLabel}
                      </button>
                    </div>
                    <div className="mt-8 flow-root sm:mt-10">
                      <ul
                        role="list"
                        className="-my-2 divide-y divide-white/5 border-t border-white/5 text-sm/6 text-white group-data-featured/tier:divide-gray-900/5 group-data-featured/tier:border-gray-900/5 group-data-featured/tier:text-gray-600 lg:border-t-0"
                      >
                        {tier.highlights.map((mainFeature) => (
                          <li key={mainFeature} className="flex gap-x-3 py-2">
                            <CheckIcon
                              aria-hidden="true"
                              className="h-6 w-5 flex-none text-gray-500 group-data-featured/tier:text-indigo-600"
                            />
                            {mainFeature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </form>

      <section className="relative bg-white">
        <div aria-hidden="true" className="absolute inset-0">
          <div className="absolute inset-y-0 right-0 w-1/2 bg-indigo-700" />
        </div>
        <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-2 lg:px-8">
          <div className="bg-white px-6 py-16 sm:py-24 lg:px-0 lg:pr-8">
            <div className="mx-auto max-w-lg lg:mx-0">
              <h2 className="text-lg font-semibold text-indigo-600">{enterprise.eyebrow}</h2>
              <p className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight">
                {enterprise.title}
              </p>
              <dl className="mt-12 space-y-10">
                {enterprise.checklist.map((item) => (
                  <div key={item} className="relative">
                    <dt>
                      <div className="absolute flex size-12 items-center justify-center rounded-md bg-indigo-500">
                        <CheckIcon aria-hidden="true" className="size-6 text-white" />
                      </div>
                      <p className="ml-16 text-lg/6 font-medium text-gray-900">{item}</p>
                    </dt>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="bg-indigo-700 px-6 py-16 sm:py-24 lg:flex lg:items-center lg:justify-end lg:bg-none lg:px-0 lg:pl-8">
            <div className="mx-auto w-full max-w-lg space-y-8 lg:mx-0">
              <div>
                <h2 className="sr-only">Preis AI-Modernisierung</h2>
                <p className="relative grid grid-cols-2">
                  <span className="flex flex-col text-center">
                    <span className="text-5xl font-bold tracking-tight text-white">
                      {enterprise.setupFeeAmount}
                    </span>
                    <span className="mt-2 text-base font-medium text-indigo-200">
                      {enterprise.setupFeeLabel}
                    </span>
                    <span className="sr-only">plus</span>
                  </span>
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute flex h-12 w-full items-center justify-center"
                  >
                    <span className="size-6 text-indigo-300">+</span>
                  </span>
                  <span>
                    <span className="flex flex-col text-center">
                      <span className="text-5xl font-bold tracking-tight text-white">
                        {enterprise.monthlyAmount}
                      </span>
                      <span className="mt-2 text-base font-medium text-indigo-200">
                        {enterprise.monthlyLabel}
                      </span>
                    </span>
                  </span>
                </p>
              </div>
              <ul role="list" className="grid gap-px overflow-hidden rounded-sm sm:grid-cols-2">
                {enterprise.checklist.map((item) => (
                  <li
                    key={item}
                    className="flex items-center space-x-3 bg-indigo-800/50 px-4 py-4 text-base text-white"
                  >
                    <CheckIcon aria-hidden="true" className="size-6 text-indigo-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href={enterprise.primaryCta.href ?? "#kontakt"}
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-white px-8 py-4 text-lg/6 font-medium text-indigo-600 hover:bg-indigo-50 md:px-10"
              >
                {enterprise.primaryCta.label}
              </a>
              <a
                href={enterprise.secondaryCta.href ?? "#referenzen"}
                className="block text-center text-base font-medium text-indigo-200 hover:text-white"
              >
                {enterprise.secondaryCta.label}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
