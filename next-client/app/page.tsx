import About from "@/components/about";
import Footer from "@/components/footer";
import { Header } from "@/components/client-side/Header";
import { Hero } from "@/components/client-side/Hero";
import Timeline from "@/components/server-side/Timeline";
import React from "react";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Timeline />
      <About />
      <Footer />
    </main>
  );
}
