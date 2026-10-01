const experiences = [
  {
    period: "2022 — atual",
    company: "HD Eletro",
    role: "Desenvolvedor Fullstack",
    bullets: [
      "Atuação em múltiplos projetos com React Native, Next.js, TypeScript, Node.js, Express, MongoDB, MySQL, Redis, Socket.IO e MQTT.",
      "Migração de aplicações legadas em Angular e Pug para Next.js, melhorando manutenibilidade e velocidade de entrega.",
      "Participação nas decisões técnicas: padrões de código, estruturação de componentes e boas práticas.",
      "Treinamento e onboarding de novos desenvolvedores no time.",
    ],
  },
  {
    period: "2021 — 2022",
    company: "Useall Software",
    role: "Desenvolvedor Frontend",
    bullets: [
      "Desenvolvimento web com JavaScript e Ext JS; relatórios customizados em Active Reports.",
      "Manipulação de dados com SQL e Oracle DB em ambiente Scrum.",
      "Desenvolvimento de aplicativo Android em React Native e experiência com TypeORM.",
      "Mentoria técnica de novos colaboradores em JavaScript e criação de relatórios.",
    ],
  },
];

const education = [
  {
    year: "2020",
    title: "Bacharel em Ciência da Computação",
    institution: "UNESC — Universidade do Extremo Sul Catarinense",
  },
  {
    year: "2025",
    title: "Pós-graduação em Desenvolvimento Fullstack Cloud Native",
    institution: "UNESC — Universidade do Extremo Sul Catarinense",
  },
];

const skills = [
  {
    title: "Frontend",
    text: "React, Next.js, React Native, Tailwind CSS, Bootstrap, PrimeReact, Chart.js",
  },
  {
    title: "Backend",
    text: "Node.js, TypeScript, Bun, Express, Socket.IO, MQTT, Redis, Docker, Bcrypt",
  },
  {
    title: "Banco de Dados",
    text: "MongoDB, MySQL, Firebase",
  },
  {
    title: "Ferramentas",
    text: "Git, ClickUp, Slack, Obsidian, Postman, WebStorm IDE",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <header className="sticky top-0 z-20 border-b border-border/80 bg-background/70 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6 md:px-10">
          <a href="#" className="text-sm font-semibold tracking-tight">
            Bernardo Schmitz
          </a>
          <nav className="hidden items-center gap-8 text-[13px] text-muted-foreground sm:flex">
            <a href="#experiencia" className="transition-colors hover:text-foreground">
              Experiência
            </a>
            <a href="#formacao" className="transition-colors hover:text-foreground">
              Formação
            </a>
            <a href="#habilidades" className="transition-colors hover:text-foreground">
              Habilidades
            </a>
            <a href="#contato" className="transition-colors hover:text-foreground">
              Contato
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 md:px-10">
        <section className="pb-16 pt-20 md:pt-28">
          <h1
            className="rise max-w-[16ch] text-balance text-5xl font-extrabold leading-[1.02] tracking-tight md:text-6xl"
            style={{ animationDelay: "60ms" }}
          >
            Bernardo Schmitz
          </h1>
          <p
            className="rise mt-4 text-lg font-medium text-foreground/80 md:text-xl"
            style={{ animationDelay: "120ms" }}
          >
            Desenvolvedor Fullstack
          </p>
          <p
            className="rise mt-6 max-w-[52ch] text-pretty text-base leading-relaxed text-muted-foreground md:text-lg"
            style={{ animationDelay: "180ms" }}
          >
            Bacharel em Ciência da Computação e pós-graduado em Desenvolvimento Fullstack, com 5
            anos de experiência em aplicações web (React, Next.js), mobile (React Native) e backend
            (Node.js, TypeScript).
          </p>
        </section>

        <section id="experiencia" className="border-t border-border py-16">
          <div className="mb-10">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Experiência</h2>
          </div>

          <div className="space-y-12">
            {experiences.map((job) => (
              <article key={job.company} className="grid gap-6 md:grid-cols-[180px_1fr] md:gap-10">
                <div className="font-mono text-[12px] leading-relaxed text-muted-foreground">
                  <p>{job.period}</p>
                  <p className="mt-1 font-medium text-foreground">{job.company}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold tracking-tight">{job.role}</h3>
                  <ul className="mt-4 max-w-[58ch] space-y-2.5 text-[15px] leading-relaxed text-foreground/80">
                    {job.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <span className="mt-[9px] size-1 shrink-0 rounded-full bg-brand" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="formacao" className="border-t border-border py-16">
          <div className="mb-10">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Formação</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {education.map((item) => (
              <div key={item.year} className="border-l-2 border-brand/40 pl-5">
                <p className="font-mono text-[12px] text-muted-foreground">{item.year}</p>
                <h3 className="mt-2 text-base font-semibold tracking-tight">{item.title}</h3>
                <p className="mt-1 text-[15px] text-muted-foreground">{item.institution}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="habilidades" className="border-t border-border py-16">
          <div className="mb-10">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Habilidades</h2>
          </div>
          <div className="grid gap-x-12 gap-y-8 sm:grid-cols-2">
            {skills.map((skill) => (
              <div key={skill.title}>
                <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
                  {skill.title}
                </p>
                <p className="text-[15px] leading-relaxed text-foreground/80">{skill.text}</p>
              </div>
            ))}
          </div>
        </section>

        <footer id="contato" className="border-t border-border py-20">
          <div className="mb-10">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Contato</h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            <div>
              <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
                Telefone
              </p>
              <a
                href="tel:+5548996520518"
                className="text-[15px] text-foreground transition-colors hover:text-brand"
              >
                (48) 99652-0518
              </a>
            </div>
            <div>
              <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
                GitHub
              </p>
              <a
                href="https://github.com/B-Schmitz"
                target="_blank"
                rel="noreferrer"
                className="text-[15px] text-foreground transition-colors hover:text-brand"
              >
                github.com/B-Schmitz
              </a>
            </div>
            <div>
              <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
                LinkedIn
              </p>
              <a
                href="https://linkedin.com/in/bernardo-ssantos"
                target="_blank"
                rel="noreferrer"
                className="text-[15px] text-foreground transition-colors hover:text-brand"
              >
                in/bernardo-ssantos
              </a>
            </div>
          </div>
          <p className="mt-16 font-mono text-[11px] text-muted-foreground">
            © 2026 Bernardo Schmitz
          </p>
        </footer>
      </main>
    </div>
  );
}
