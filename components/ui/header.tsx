"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Logo from "./logo";
import Dropdown from "@/components/dropdown";
import MobileMenu from "./mobile-menu";
import LanguageSwitcher from "./language-switcher";
import { useTranslations } from "@/lib/locale-context";

const navMotionProps = {
  whileHover: { y: -1, scale: 1.1 },
  whileTap: { scale: 0.96 },
  transition: { type: "spring", stiffness: 260, damping: 20, mass: 0.4 },
};

export default function Header() {
  const t = useTranslations();
  return (
    <header className="fixed top-2 z-30 w-full md:top-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-white/30 px-3 shadow-[0_18px_45px_rgba(15,23,42,0.06)] ring-1 ring-white/60 backdrop-blur-2xl  before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(var(--color-gray-100),var(--color-gray-200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
          <div className="flex flex-1 items-center">
            <Logo />
          </div>

          <nav className="hidden md:flex md:grow">
            <ul className="flex grow flex-wrap items-center justify-center gap-4 text-sm lg:gap-8">
              <li className="px-3 py-1">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Link
                    href="/features"
                    className="flex items-center text-gray-700 transition-colors hover:text-gray-900"
                  >
                    {t.nav.pricing}
                  </Link>
                </motion.div>
              </li>
              <li className="px-3 py-1">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Link
                    href="/system"
                    className="flex items-center text-gray-700 transition-colors hover:text-gray-900"
                  >
                    {t.nav.system}
                  </Link>
                </motion.div>
              </li>
              <li className="px-3 py-1">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Link
                    href="/blog"
                    className="flex items-center text-gray-700 transition-colors hover:text-gray-900"
                  >
                    {t.nav.blog}
                  </Link>
                </motion.div>
              </li>
              <li className="px-3 py-1">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Link
                    href="/documentation"
                    className="flex items-center text-gray-700 transition-colors hover:text-gray-900"
                  >
                    {t.nav.docs}
                  </Link>
                </motion.div>
              </li>
              <Dropdown title={t.nav.shop}>
                <li>
                  <Link
                    href="/shop/abos"
                    className="flex rounded-lg px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    {t.nav.shopAbos}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/apps"
                    className="flex rounded-lg px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    {t.nav.shopApps}
                  </Link>
                </li>
              </Dropdown>
            </ul>
          </nav>

          <ul className="flex flex-1 items-center justify-end gap-3">
            <li>
              <motion.div {...navMotionProps}>
                <Link
                  href="/signin"
                  className="btn-sm bg-white/80 text-gray-800 shadow-sm shadow-black/5 ring-1 ring-black/5 backdrop-blur-2xl  hover:bg-white"
                >
                  Login
                </Link>
              </motion.div>
            </li>
            <li>
              <motion.div {...navMotionProps}>
                <Link
                  href="/signup"
                  className="btn-sm bg-gray-900 text-gray-100 shadow-sm shadow-black/20 ring-1 ring-black/40 hover:bg-black"
                >
                  Register
                </Link>
              </motion.div>
            </li>
          </ul>

          <LanguageSwitcher />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
