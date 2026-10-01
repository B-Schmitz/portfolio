import { jsx, jsxs } from "react/jsx-runtime";

//#region src/routes/index.tsx?tsr-split=component
function Index() {
  return /* @__PURE__ */ jsxs("div", {
    className: "min-h-screen bg-background font-sans text-foreground antialiased",
    children: [
      /* @__PURE__ */ jsx("header", {
        className: "sticky top-0 z-20 border-b border-border/80 bg-background/70 backdrop-blur-xl",
        children: /* @__PURE__ */ jsxs("div", {
          className: "mx-auto flex h-16 max-w-5xl items-center justify-between px-6 md:px-10",
          children: [
            /* @__PURE__ */ jsx("a", {
              href: "#",
              className: "text-sm font-semibold tracking-tight",
              children: "Bernardo Schmitz",
            }),
            /* @__PURE__ */ jsxs("nav", {
              className: "hidden items-center gap-8 text-[13px] text-muted-foreground sm:flex",
              children: [
                /* @__PURE__ */ jsx("a", {
                  href: "#experiencia",
                  className: "transition-colors hover:text-foreground",
                  children: "Experiência",
                }),
                /* @__PURE__ */ jsx("a", {
                  href: "#formacao",
                  className: "transition-colors hover:text-foreground",
                  children: "Formação",
                }),
                /* @__PURE__ */ jsx("a", {
                  href: "#habilidades",
                  className: "transition-colors hover:text-foreground",
                  children: "Habilidades",
                }),
                /* @__PURE__ */ jsx("a", {
                  href: "#contato",
                  className: "transition-colors hover:text-foreground",
                  children: "Contato",
                }),
              ],
            }),
            /* @__PURE__ */ jsx("a", {
              href: "#contato",
              className:
                "rounded-full border border-foreground/15 px-4 py-1.5 text-[13px] font-medium text-foreground transition-colors hover:bg-foreground hover:text-background",
              children: "Contato",
            }),
          ],
        }),
      }),
      /* @__PURE__ */ jsxs("main", {
        className: "mx-auto max-w-5xl px-6 md:px-10",
        children: [
          /* @__PURE__ */ jsxs("section", {
            className: "pb-16 pt-20 md:pt-28",
            children: [
              /* @__PURE__ */ jsx("h1", {
                className:
                  "rise max-w-[16ch] text-balance text-5xl font-extrabold leading-[1.02] tracking-tight md:text-6xl",
                style: { animationDelay: "60ms" },
                children: "Bernardo Schmitz",
              }),
              /* @__PURE__ */ jsx("p", {
                className: "rise mt-4 text-lg font-medium text-foreground/80 md:text-xl",
                style: { animationDelay: "120ms" },
                children: "Desenvolvedor Fullstack",
              }),
              /* @__PURE__ */ jsx("p", {
                className:
                  "rise mt-6 max-w-[52ch] text-pretty text-base leading-relaxed text-muted-foreground md:text-lg",
                style: { animationDelay: "180ms" },
                children:
                  "Bacharel em Ciência da Computação e pós-graduado em Desenvolvimento Fullstack, com 5 anos de experiência em aplicações web (React, Next.js), mobile (React Native) e backend (Node.js, TypeScript).",
              }),
            ],
          }),
          /* @__PURE__ */ jsxs("section", {
            id: "experiencia",
            className: "border-t border-border py-16",
            children: [
              /* @__PURE__ */ jsx("div", {
                className: "mb-10",
                children: /* @__PURE__ */ jsx("h2", {
                  className: "text-2xl font-bold tracking-tight md:text-3xl",
                  children: "Experiência",
                }),
              }),
              /* @__PURE__ */ jsxs("div", {
                className: "space-y-12",
                children: [
                  /* @__PURE__ */ jsxs("article", {
                    className: "grid gap-6 md:grid-cols-[180px_1fr] md:gap-10",
                    children: [
                      /* @__PURE__ */ jsxs("div", {
                        className: "font-mono text-[12px] leading-relaxed text-muted-foreground",
                        children: [
                          /* @__PURE__ */ jsx("p", { children: "2022 — atual" }),
                          /* @__PURE__ */ jsx("p", {
                            className: "mt-1 font-medium text-foreground",
                            children: "HD Eletro",
                          }),
                        ],
                      }),
                      /* @__PURE__ */ jsxs("div", {
                        children: [
                          /* @__PURE__ */ jsx("h3", {
                            className: "text-lg font-semibold tracking-tight",
                            children: "Desenvolvedor Fullstack",
                          }),
                          /* @__PURE__ */ jsxs("ul", {
                            className:
                              "mt-4 max-w-[58ch] space-y-2.5 text-[15px] leading-relaxed text-foreground/80",
                            children: [
                              /* @__PURE__ */ jsxs("li", {
                                className: "flex gap-3",
                                children: [
                                  /* @__PURE__ */ jsx("span", {
                                    className: "mt-[9px] size-1 shrink-0 rounded-full bg-brand",
                                  }),
                                  "Atuação em múltiplos projetos com React Native, Next.js, TypeScript, Node.js, Express, MongoDB, MySQL, Redis, Socket.IO e MQTT.",
                                ],
                              }),
                              /* @__PURE__ */ jsxs("li", {
                                className: "flex gap-3",
                                children: [
                                  /* @__PURE__ */ jsx("span", {
                                    className: "mt-[9px] size-1 shrink-0 rounded-full bg-brand",
                                  }),
                                  "Migração de aplicações legadas em Angular e Pug para Next.js, melhorando manutenibilidade e velocidade de entrega.",
                                ],
                              }),
                              /* @__PURE__ */ jsxs("li", {
                                className: "flex gap-3",
                                children: [
                                  /* @__PURE__ */ jsx("span", {
                                    className: "mt-[9px] size-1 shrink-0 rounded-full bg-brand",
                                  }),
                                  "Participação nas decisões técnicas: padrões de código, estruturação de componentes e boas práticas.",
                                ],
                              }),
                              /* @__PURE__ */ jsxs("li", {
                                className: "flex gap-3",
                                children: [
                                  /* @__PURE__ */ jsx("span", {
                                    className: "mt-[9px] size-1 shrink-0 rounded-full bg-brand",
                                  }),
                                  "Treinamento e onboarding de novos desenvolvedores no time.",
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  /* @__PURE__ */ jsxs("article", {
                    className: "grid gap-6 md:grid-cols-[180px_1fr] md:gap-10",
                    children: [
                      /* @__PURE__ */ jsxs("div", {
                        className: "font-mono text-[12px] leading-relaxed text-muted-foreground",
                        children: [
                          /* @__PURE__ */ jsx("p", { children: "2021 — 2022" }),
                          /* @__PURE__ */ jsx("p", {
                            className: "mt-1 font-medium text-foreground",
                            children: "Useall Software",
                          }),
                        ],
                      }),
                      /* @__PURE__ */ jsxs("div", {
                        children: [
                          /* @__PURE__ */ jsx("h3", {
                            className: "text-lg font-semibold tracking-tight",
                            children: "Desenvolvedor Frontend",
                          }),
                          /* @__PURE__ */ jsxs("ul", {
                            className:
                              "mt-4 max-w-[58ch] space-y-2.5 text-[15px] leading-relaxed text-foreground/80",
                            children: [
                              /* @__PURE__ */ jsxs("li", {
                                className: "flex gap-3",
                                children: [
                                  /* @__PURE__ */ jsx("span", {
                                    className: "mt-[9px] size-1 shrink-0 rounded-full bg-brand",
                                  }),
                                  "Desenvolvimento web com JavaScript e Ext JS; relatórios customizados em Active Reports.",
                                ],
                              }),
                              /* @__PURE__ */ jsxs("li", {
                                className: "flex gap-3",
                                children: [
                                  /* @__PURE__ */ jsx("span", {
                                    className: "mt-[9px] size-1 shrink-0 rounded-full bg-brand",
                                  }),
                                  "Manipulação de dados com SQL e Oracle DB em ambiente Scrum.",
                                ],
                              }),
                              /* @__PURE__ */ jsxs("li", {
                                className: "flex gap-3",
                                children: [
                                  /* @__PURE__ */ jsx("span", {
                                    className: "mt-[9px] size-1 shrink-0 rounded-full bg-brand",
                                  }),
                                  "Desenvolvimento de aplicativo Android em React Native e experiência com TypeORM.",
                                ],
                              }),
                              /* @__PURE__ */ jsxs("li", {
                                className: "flex gap-3",
                                children: [
                                  /* @__PURE__ */ jsx("span", {
                                    className: "mt-[9px] size-1 shrink-0 rounded-full bg-brand",
                                  }),
                                  "Mentoria técnica de novos colaboradores em JavaScript e criação de relatórios.",
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          /* @__PURE__ */ jsxs("section", {
            id: "formacao",
            className: "border-t border-border py-16",
            children: [
              /* @__PURE__ */ jsx("div", {
                className: "mb-10",
                children: /* @__PURE__ */ jsx("h2", {
                  className: "text-2xl font-bold tracking-tight md:text-3xl",
                  children: "Formação",
                }),
              }),
              /* @__PURE__ */ jsxs("div", {
                className: "grid gap-8 md:grid-cols-2",
                children: [
                  /* @__PURE__ */ jsxs("div", {
                    className: "border-l-2 border-brand/40 pl-5",
                    children: [
                      /* @__PURE__ */ jsx("p", {
                        className: "font-mono text-[12px] text-muted-foreground",
                        children: "2020",
                      }),
                      /* @__PURE__ */ jsx("h3", {
                        className: "mt-2 text-base font-semibold tracking-tight",
                        children: "Bacharel em Ciência da Computação",
                      }),
                      /* @__PURE__ */ jsx("p", {
                        className: "mt-1 text-[15px] text-muted-foreground",
                        children: "UNESC — Universidade do Extremo Sul Catarinense",
                      }),
                    ],
                  }),
                  /* @__PURE__ */ jsxs("div", {
                    className: "border-l-2 border-brand/40 pl-5",
                    children: [
                      /* @__PURE__ */ jsx("p", {
                        className: "font-mono text-[12px] text-muted-foreground",
                        children: "2025",
                      }),
                      /* @__PURE__ */ jsx("h3", {
                        className: "mt-2 text-base font-semibold tracking-tight",
                        children: "Pós-graduação em Desenvolvimento Fullstack Cloud Native",
                      }),
                      /* @__PURE__ */ jsx("p", {
                        className: "mt-1 text-[15px] text-muted-foreground",
                        children: "UNESC — Universidade do Extremo Sul Catarinense",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          /* @__PURE__ */ jsxs("section", {
            id: "habilidades",
            className: "border-t border-border py-16",
            children: [
              /* @__PURE__ */ jsx("div", {
                className: "mb-10",
                children: /* @__PURE__ */ jsx("h2", {
                  className: "text-2xl font-bold tracking-tight md:text-3xl",
                  children: "Habilidades",
                }),
              }),
              /* @__PURE__ */ jsxs("div", {
                className: "grid gap-x-12 gap-y-8 sm:grid-cols-2",
                children: [
                  /* @__PURE__ */ jsxs("div", {
                    children: [
                      /* @__PURE__ */ jsx("p", {
                        className:
                          "mb-3 font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground",
                        children: "Frontend",
                      }),
                      /* @__PURE__ */ jsx("p", {
                        className: "text-[15px] leading-relaxed text-foreground/80",
                        children:
                          "React, Next.js, React Native, Tailwind CSS, Bootstrap, PrimeReact, Chart.js",
                      }),
                    ],
                  }),
                  /* @__PURE__ */ jsxs("div", {
                    children: [
                      /* @__PURE__ */ jsx("p", {
                        className:
                          "mb-3 font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground",
                        children: "Backend",
                      }),
                      /* @__PURE__ */ jsx("p", {
                        className: "text-[15px] leading-relaxed text-foreground/80",
                        children:
                          "Node.js, TypeScript, Bun, Express, Socket.IO, MQTT, Redis, Docker, Bcrypt",
                      }),
                    ],
                  }),
                  /* @__PURE__ */ jsxs("div", {
                    children: [
                      /* @__PURE__ */ jsx("p", {
                        className:
                          "mb-3 font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground",
                        children: "Banco de Dados",
                      }),
                      /* @__PURE__ */ jsx("p", {
                        className: "text-[15px] leading-relaxed text-foreground/80",
                        children: "MongoDB, MySQL, Firebase",
                      }),
                    ],
                  }),
                  /* @__PURE__ */ jsxs("div", {
                    children: [
                      /* @__PURE__ */ jsx("p", {
                        className:
                          "mb-3 font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground",
                        children: "Ferramentas",
                      }),
                      /* @__PURE__ */ jsx("p", {
                        className: "text-[15px] leading-relaxed text-foreground/80",
                        children: "Git, ClickUp, Slack, Obsidian, Postman, WebStorm IDE",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          /* @__PURE__ */ jsxs("footer", {
            id: "contato",
            className: "border-t border-border py-20",
            children: [
              /* @__PURE__ */ jsx("div", {
                className: "mb-10",
                children: /* @__PURE__ */ jsx("h2", {
                  className: "text-2xl font-bold tracking-tight md:text-3xl",
                  children: "Contato",
                }),
              }),
              /* @__PURE__ */ jsxs("div", {
                className: "grid gap-8 sm:grid-cols-3",
                children: [
                  /* @__PURE__ */ jsxs("div", {
                    children: [
                      /* @__PURE__ */ jsx("p", {
                        className:
                          "mb-2 font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground",
                        children: "Telefone",
                      }),
                      /* @__PURE__ */ jsx("a", {
                        href: "tel:+5548996520518",
                        className: "text-[15px] text-foreground transition-colors hover:text-brand",
                        children: "(48) 99652-0518",
                      }),
                    ],
                  }),
                  /* @__PURE__ */ jsxs("div", {
                    children: [
                      /* @__PURE__ */ jsx("p", {
                        className:
                          "mb-2 font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground",
                        children: "GitHub",
                      }),
                      /* @__PURE__ */ jsx("a", {
                        href: "https://github.com/B-Schmitz",
                        target: "_blank",
                        rel: "noreferrer",
                        className: "text-[15px] text-foreground transition-colors hover:text-brand",
                        children: "github.com/B-Schmitz",
                      }),
                    ],
                  }),
                  /* @__PURE__ */ jsxs("div", {
                    children: [
                      /* @__PURE__ */ jsx("p", {
                        className:
                          "mb-2 font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground",
                        children: "LinkedIn",
                      }),
                      /* @__PURE__ */ jsx("a", {
                        href: "https://linkedin.com/in/bernardo-ssantos",
                        target: "_blank",
                        rel: "noreferrer",
                        className: "text-[15px] text-foreground transition-colors hover:text-brand",
                        children: "in/bernardo-ssantos",
                      }),
                    ],
                  }),
                ],
              }),
              /* @__PURE__ */ jsx("p", {
                className: "mt-16 font-mono text-[11px] text-muted-foreground",
                children: "© 2026 Bernardo Schmitz",
              }),
            ],
          }),
        ],
      }),
    ],
  });
}

//#endregion
export { Index as component };
