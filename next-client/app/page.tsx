import { Header } from "@/components/Header";
import { Hero } from "../components/Hero";
import Timeline from "@/components/Timeline";

export default function Home() {
  return (
    <main className="h-[300vh]">
      <Header />
      <Hero />
      <Timeline />
    </main>
  );
}
