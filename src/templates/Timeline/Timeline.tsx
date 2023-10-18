import React from 'react';
import { Timeline as TimelinePrime } from 'primereact/timeline';
import { Card } from 'primereact/card';
import { ContainerTimeline, List, ListItem } from './TimelineElements';
import { SectionTitle } from 'styles/globalStyled';

interface Event {
  title: string;
  subTitle: string;
  tasks: string[];
}

export default function Timeline() {
  const events: Event[] = [
    {
      title: 'Técnico de TI',
      subTitle: 'Prefeitura Municipal de Jaguaruna | 2019 - 2020',
      tasks: [
        'Manutenção de computadores, notebooks e impressora',
        'Configuração, reparo e dimensionamento de redes; cabeadas e WiFi',
        'Gerenciamento do site da prefeitura municipal',
        'Atendimento a chamados de TI',
        'Gerenciamento de inventário do setor'
      ]
    },
    {
      title: 'Programador frontend',
      subTitle: 'Useall | 2021 - 2022',
      tasks: [
        'Criação e personalização de relatórios em Active Reports',
        'Desenvolvimento web com javascript e framework Ext JS',
        'Manipulação de banco de dados e SQL',
        'Aplicação de boas práticas e metodologia ágil (scrum)',
        'Mentor em treinamento de javascript e relatórios para novos funcionários'
      ]
    },
    {
      title: 'Programador mobile',
      subTitle: 'Useall | 2022 - 2022',
      tasks: [
        'Desenvolvimento de um aplicativo android em React Native;',
        'Navigation, Reanimated, Maps, StyledComponents, ASyncStorage, Context API, Clean Arch',
        'TypeORM (Entidades, Migrations, QueryBuilder)'
      ]
    },
    {
      title: 'Programador fullstack',
      subTitle: 'HD Eletro | 2022 - Até o momento',
      tasks: [
        'Desenvolvimento web com React, Next JS, Typescript, Bootstrap e PrimeReact',
        'Desenvolvimento mobile com React Native',
        'Migração de sistemas em angular para Next JS',
        'Criação de componentes com Bootstrap e SCSS',
        'Uso das ferramentas: Firebase, MongoDB  WebStorm, Jetbrains, Figma, Postman, Android Studio'
      ]
    }
  ];

  const customizedContent = (e: Event) => {
    return (
      <Card title={e.title} subTitle={e.subTitle}>
        <List>
          {e.tasks.map((task, i) => (
            <ListItem key={i}>{task}</ListItem>
          ))}
        </List>
      </Card>
    );
  };

  return (
    <ContainerTimeline id='timeline'>
      <div className='Container'>
        <SectionTitle>Experiência</SectionTitle>
        <TimelinePrime value={events}  align='alternate' className='' content={customizedContent} />
      </div>
    </ContainerTimeline>
  );
}
