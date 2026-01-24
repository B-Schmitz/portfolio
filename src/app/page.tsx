import { Projects, Journey, Hero, Footer } from "@/components";
import { ContactSection } from "@/components/contact-section";

export default function Home() {
    return (
        <>
            <div className="relative z-10">
                <main className="flex-1">
                    <Hero />
                    <Projects />
                    <Journey />
                    <ContactSection />
                </main>
                <Footer />
            </div>
        </>
    );
}
