export interface IProject {
  img: string[];
  title: string;
  description: string;
  tech_stack: string;
  github_url?: string;
  demo_url?: string;
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
    img: ['/images/pcp-login.webp', "/images/pcp-componentes.webp", "/images/pcp-componentes-novo.webp", "/images/pcp-estruturas.webp", "/images/pcp-estruturas-detalhes.webp", "/images/pcp-estruturas-editar.webp", "/images/pcp-usuarios.webp"],
    title: 'PCP',
    description: 'Software web para cadastrar componentes e montar estruturas de um projeto eletrônico.',
    tech_stack: 'React, Typescript, NextJS, Bootstrap, Prime React, MongoDB',
  },
  {
    img: ['/images/hdlinks-login.webp', '/images/hdlinks-home.webp', '/images/hdlinks-novo.webp'],
    title: 'HD Links',
    description: 'Aplicação speed dial com autenticação pelo firebase e uso do firestore para gravar os dados.',
    tech_stack: 'React, Typescript, NextJS, Bootstrap, Firebase',
  },
  {
    img: ['/images/traefik-dashboard.webp', '/images/traefik-middlewares.webp', '/images/traefik-middlewares-novo.webp', '/images/traefik-routers.webp', '/images/traefik-services.webp',],
    title: 'Traefik Config',
    description: 'Uma interface para edição do arquivo de configuração do Trafiek .yml.',
    tech_stack: 'React, Typescript, NextJS, Bootstrap, yaml, Bcrypt',
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
  }, {
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    name: 'MongoDB'
}, {
  img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
      name: 'Firebase'
}, {
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
