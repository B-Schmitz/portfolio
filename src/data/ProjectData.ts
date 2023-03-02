export interface IProject {
  img: string[];
  title: string;
  description: string;
  tech_stack: string;
  github_url: string;
  demo_url: string;
  stack?: IStack;
}

export interface IStack {
  name: string;
  img: string;
}

export const ProjectList: IProject[] = [
  {
    img: ['/images/pomodoro-cover.webp', '/images/pomodoro-modal-cover.webp', '/images/pomodoro-timer-cover.webp'],
    title: 'Pomodoro Web',
    description: 'Um dos primeiros projetos que fiz por meio do curso direto ao ponto (JavaScript - Pomodoro - Gestão de Tempo) da Treina Web',
    tech_stack: 'HTML, CSS, JS',
    github_url: 'https://gitlab.com/BernardoS/web-pomodoro',
    demo_url: 'https://pomodoroweb.netlify.app/'
  },
  {
    img: ['/images/nlw-esports-cover.webp'],
    title: 'Find your Duo',
    description: 'Projeto fullstack web e mobile, desenvolvido durante a NLW-eSports da Rocketseat.',
    tech_stack: 'React, React Native, Typescript, Tailwind CSS, Radix UI, Prisma, Node JS',
    github_url: 'https://github.com/B-Schmitz/nlw-esports',
    demo_url: ''
  },
  {
    img: ['/images/alura-studies-cover.webp'],
    title: 'Alura Studies',
    description: 'Projeto de Todo list com cronômetro para cada tarefa.',
    tech_stack: 'React, Typescript',
    github_url: 'https://github.com/B-Schmitz/alura-studies',
    demo_url: 'https://alurastudiesapp.netlify.app/'
  },
  {
    img: ['/images/hdlinks-cover.webp', '/images/hdlinks-dashboard-cover.webp'],
    title: 'HD Links',
    description: 'Projeto privado, no estilo speed dial com autenticação pelo firebase e firestore para gravar os dados.',
    tech_stack: 'React, Typescript, NextJS, Bootstrap',
    github_url: '',
    demo_url: ''
  },
  {
    img: ['/images/traefik-config-cover.webp', '/images/traefik-config-novo-cover.webp', '/images/traefik-config-save-cover.webp'],
    title: 'Traefik Config',
    description: 'Projeto privado, uma interface para edição do arquivo de configuração do trafiek .yml',
    tech_stack: 'React, Typescript, NextJS, Bootstrap, yaml, Bcrypt',
    github_url: '',
    demo_url: ''
  }
];

export const stackList: IStack[] = [
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    name: 'React/Native'
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    name: 'Typescript'
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    name: 'Next JS'
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    name: 'HTML'
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    name: 'CSS'
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    name: 'Javascript'
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    name: 'Git'
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
    name: 'Bootstrap'
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    name: 'Node JS'
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg',
    name: 'Tailwind CSS '
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jetbrains/jetbrains-original.svg',
    name: 'Jetbrains'
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg',
    name: 'Trello'
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
    name: 'VS Code'
  }
];
