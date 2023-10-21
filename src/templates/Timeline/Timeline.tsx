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
        'Manutenção de computadores, notebooks e impressoras',
        'Configuração, reparo e dimensionamento de redes',
        'Gerenciamento do site da prefeitura municipal',
        'Atendimento a chamados de TI',
        'Gerenciamento de inventário do setor'
      ]
    },
    {
      title: 'Programador frontend',
      subTitle: 'Useall | 2021 - 2022',
      tasks: [
        'Criação e personalização de relatórios utilizando Active Reports',
        'Desenvolvimento web com Javascript e framework EXT JS',
        'Manipulação de banco de dados e SQL',
        'Aplicação de boas práticas e metodologia ágil (scrum)',
        'Mentor em treinamento de Javascript e relatórios para novos funcionários'
      ]
    },
    {
      title: 'Programador mobile',
      subTitle: 'Useall | 2022 - 2022',
      tasks: [
        'Desenvolvimento de um aplicativo android em React Native',
        'Navigation, Reanimated, Maps, StyledComponents, ASyncStorage, Context API, Clean Arch',
        'TypeORM (Entidades, Migrations, QueryBuilder)'
      ]
    },
    {
      title: 'Programador fullstack',
      subTitle: 'HD Eletro | 2022 - Até o momento',
      tasks: [
        'Desenvolvimento web com Next JS e Typescript',
        'Desenvolvimento mobile com React Native',
        'Migração de sistemas em angular para Next JS',
        'Criação de componentes do zero com Bootstrap e SCSS',
        'Uso das ferramentas Firebase, MongoDB, Docker, Jetbrains, Postman, Android Studio'
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
    <ContainerTimeline id='experience'>
      <div className='Container'>
        <SectionTitle>Experiência</SectionTitle>
        <TimelinePrime value={events}  align='alternate' content={customizedContent} />
      </div>
    </ContainerTimeline>
  );
}
