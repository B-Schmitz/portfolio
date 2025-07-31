export type Project = {
    id: number;
    title: string;
    description: string;
    techStack: string[];
    githubUrl: string;
    liveUrl?: string;
    image: string;
    imageHint: string;
};

export type Experience = {
    id: number;
    title: string;
    company: string;
    duration: string;
    description: string[];
    date: string;
};

export const data = {
    projects: [
        {
            id: 1,
            title: "Tierlyst",
            description:
                "Um editor visual de Tier List responsivo, desenvolvido em React com suporte a drag & drop, multi idiomas e animações suaves.",
            techStack: [
                "Next.js",
                "TypeScript",
                "Framer Motion",
                "Tailwind CSS",
                "Next Intl",
                "Radix UI",
            ],
            githubUrl: "",
            liveUrl: "https://tierlyst.vercel.app",
            image: "/tierlyst.png",
            imageHint: "tierlyst",
        },
        {
            id: 2,
            title: "Pomodoro Web",
            description:
                "Um dos primeiros projetos que fiz, usando somente HTML, CSS e Javascript. Um cronômetro Pomodoro simples e funcional.",
            techStack: ["HTML", "Javascript", "CSS"],
            githubUrl: "https://gitlab.com/BernardoS/web-pomodoro",
            liveUrl: "https://pomodoroweb.netlify.app/",
            image: "/pomodoro.png",
            imageHint: "pomodoro-web",
        },
         {
            id: 3,
            title: "Papum [WIP]",
            description:
                "Um chat bate-papo em tempo real, onde você pode criar salas ou encontrar uma conversa aleatória.",
            techStack: ["Next JS", "Typescript", "Ably", "Framer Motion", "Tailwind CSS", "Zod", "Radix UI"],
            githubUrl: "",
            liveUrl: "",
            image: "/papum.png",
            imageHint: "papum",
        },
    ] as Project[],
    experiences: [
        {
            id: 1,
            title: "Programador Fullstack",
            company: "HD Eletro",
            duration: "2022 - Atual",
            date: "2022-01-01",
            description: [
                "Atuação em múltiplos projetos com foco em desenvolvimento fullstack, utilizando React Native, Next.js, TypeScript, Node.js, Express, MongoDB, MySQL, Redis, Socket.IO e MQTT.",
                "Responsável pela migração de aplicações legadas em Angular e Pug para Next.js, resultando em melhor manutenibilidade e agilidade na entrega de novas funcionalidades.",
                "Participação nas decisões técnicas da equipe, contribuindo para a definição de padrões de código, estruturação de componentes e adoção de boas práticas.",
                "Treinamento e onboarding de novos desenvolvedores, garantindo alinhamento com processos, ferramentas e convenções do time.",
            ],
        },
        {
            id: 2,
            title: "Programador Frontend",
            company: "Useall Software",
            duration: "2021 - 2022",
            date: "2021-01-01",
            description: [
                "Criação e customização de relatórios utilizando Active Reports.",
                "Desenvolvimento web com JavaScript e o framework Ext JS.",
                "Manipulação de dados com SQL e Oracle DB.",
                "Participação em projetos ágeis (Scrum), colaborando com times multidisciplinares para entregas contínuas.",
                "Atuação como mentor técnico, treinando novos colaboradores em JavaScript e na criação de relatórios.",
                "Desenvolvimento de um aplicativo Android com React Native e experiência com TypeORM.",
            ],
        },
        {
            id: 3,
            title: "Suporte TI",
            company: "Prefeitura Municipal de Jaguaruna",
            duration: "2020 – 2021",
            date: "2020-01-01",
            description: [
                "Manutenção de computadores, notebooks e impressoras.",
                "Configuração, reparo e dimensionamento de redes cabeadas e WiFi.",
                "Gerenciamento do site da prefeitura municipal.",
                "Atendimento a chamados de TI.",
                "Suporte aos usuários com dúvidas e problemas técnicos.",
                "Manutenção da organização do setor.",
            ],
        },
    ] as Experience[],
    socials: {
        github: "https://github.com/B-Schmitz",
        linkedin: "https://linkedin.com/in/bernardo-ssantos/",
    },
};
