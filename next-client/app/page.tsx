
import { Header } from "@/components/client-side/Header";
import { Hero } from "../components/client-side/Hero";

export default function Home() {
  return (
    <main className="h-[300vh]">
      <Header/>
      <Hero />
    </main>
  );
}
