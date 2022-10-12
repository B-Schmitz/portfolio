import pomodoro from '../assets/images/pomodoro-cover.png'
import nlwesports from '../assets/images/nlw-esports-cover.png'
import css from '../assets/images/css.png'
import git from '../assets/images/git.png'
import html from '../assets/images/html.png'
import nextjs from '../assets/images/nextjs.png'
import react from '../assets/images/react.png'
import typescript from '../assets/images/typescript.png'
import bootstrap from '../assets/images/bootstrap.png'
import alurastudies from '../assets/images/alura-studies-cover.png'

export interface IProject {
  img: string;
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
    img: pomodoro,
    title: 'Pomodoro Web',
    description: 'Um dos primeiros projetos que fiz por meio do curso direto ao ponto (JavaScript - Pomodoro - Gestão de Tempo) da Treina Web',
    tech_stack: 'HTML, CSS, JS',
    github_url: 'https://gitlab.com/BernardoS/web-pomodoro',
    demo_url: 'https://pomodoroweb.netlify.app/'
  },
  {
    img: nlwesports,
    title: 'Find your Duo',
    description: 'Projeto fullstack web e mobile, desenvolvido durante a NLW-eSports da Rocketseat.',
    tech_stack: 'React, React Native, Typescript, Tailwind CSS, Radix UI, Prisma, Node JS',
    github_url: 'https://github.com/B-Schmitz/nlw-esports',
    demo_url: ''
  },
  {
    img: alurastudies,
    title: 'Alura Studies',
    description: 'Projeto de Todo list com cronômetro para cada tarefa.',
    tech_stack: 'React, Typescript',
    github_url: 'https://github.com/B-Schmitz/alura-studies',
    demo_url: 'https://alurastudiesapp.netlify.app/'
  }
];

export const stackList: IStack[] = [
  {
    img: react,
    name: 'React/Native'
  },
  {
    img: typescript,
    name: 'Typescript'
  },
  {
    img: nextjs,
    name: 'Next JS'
  },
  {
    img: html,
    name: 'HTML'
  },
  {
    img: css,
    name: 'CSS'
  },
  {
    img: git,
    name: 'Git'
  },
  {
    img: bootstrap,
    name: 'Bootstrap 5'
  }
];
