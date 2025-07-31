import { Projects, Journey, Hero, Header, Footer } from "@/components";

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
