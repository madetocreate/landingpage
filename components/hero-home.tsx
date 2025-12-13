"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import PageIllustration from "@/components/page-illustration";
import { landingContent } from "@/content";

export default function HeroHome() {
  const { hero } = landingContent;
  return (
    <section className="relative">
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-24 pt-48 md:pb-32 md:pt-56">
          <div className="pb-16 text-center md:pb-20">
            <h1
              className="mb-8 text-5xl font-bold leading-tight md:text-6xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              <span className="block">Den Kopf frei.</span>
              <span className="block mt-2">Der Rest in AKLOW.</span>
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-lg text-gray-700"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                {hero.subtitle}
              </p>
              <div>
                <div
                  className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
                  data-aos="zoom-y-out"
                  data-aos-delay={450}
                >
                  <motion.a
                    className="btn group mb-4 w-full bg-linear-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-sm hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                    href={hero.ctaPrimary.href ?? "#0"}
                    whileHover={{ y: -1.5, scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20, mass: 0.4 }}
                  >
                    <span className="relative inline-flex items-center">
                      {hero.ctaPrimary.label}{" "}
                      <span className="ml-1 tracking-normal text-blue-300 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </motion.a>
                  <a
                    className="btn w-full bg-white text-gray-800 shadow-sm hover:bg-gray-50 sm:ml-4 sm:w-auto"
                    href={hero.ctaSecondary?.href ?? "#0"}
                  >
                    {hero.ctaSecondary?.label}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="mx-auto max-w-3xl"
            data-aos="zoom-y-out"
            data-aos-delay={600}
          >
            <div className="relative aspect-video rounded-2xl bg-gray-900 px-5 py-3 shadow-xl">
              <div className="relative mb-8 flex items-center justify-between before:block before:h-[9px] before:w-[41px] before:bg-[length:16px_9px] before:[background-image:radial-gradient(circle_at_4.5px_4.5px,var(--color-gray-600)_4.5px,transparent_0)] after:w-[41px]">
                <span className="text-[13px] font-medium text-white">
                  cruip.com
                </span>
              </div>
              <div className="font-mono text-sm text-gray-500 [&_span]:opacity-0">
                <span className="animate-[code-1_10s_infinite] text-gray-200">
                  npm login
                </span>{" "}
                <span className="animate-[code-2_10s_infinite]">
                  --registry=https://npm.pkg.github.com
                </span>
                <br />
                <span className="animate-[code-3_10s_infinite]">
                  --scope=@phanatic
                </span>{" "}
                <span className="animate-[code-4_10s_infinite]">
                  Successfully logged-in.
                </span>
                <br />
                <br />
                <span className="animate-[code-5_10s_infinite] text-gray-200">
                  npm publish
                </span>
                <br />
                <span className="animate-[code-6_10s_infinite]">
                  Package published.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
