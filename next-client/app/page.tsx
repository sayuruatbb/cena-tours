import About from "@/components/about";
import Footer from "@/components/footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
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
