import Timeline from "@/components/server-side/Timeline";
import React from "react";

export default function Home() {
  return (
    <main className="h-[300vh]">
      <Header />
      <Hero />
      <Timeline />
      <About />
      <Footer />
    </main>
  );
}
