"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import { LocaleProvider } from "@/lib/locale-context";

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <LocaleProvider>
      <Header />
      <main className="grow">{children}</main>
      <Footer border={true} />
    </LocaleProvider>
  );
}
