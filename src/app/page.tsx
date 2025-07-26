import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Journey } from "@/components/journey";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <div className="relative z-10">
        <Header />
        <main className="flex-1">
          <Hero />
          <Projects />
          <Journey />
        </main>
        <Footer />
      </div>
    </>
  );
}
