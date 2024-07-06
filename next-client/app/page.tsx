import { Header } from "@/components/Header";
import { Hero } from "../components/Hero";
import Timeline from "@/components/Timeline";
import About from "@/components/about";
import Footer from "@/components/footer";

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
