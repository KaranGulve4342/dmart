import React from "react";
import Header from "../../../components/modules/website/header";
import Footer from "../../../components/modules/website/footer";
import MobileBottom from "@/components/custom/MobileButton";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="container mx-auto px-4 lg:px-24 py-16 overflow-hidden">
      <Header />
      <MobileBottom />
      {children}
      <Footer />
    </section>
  );
}
