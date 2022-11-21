import { Image, Technologies, Tech, TechImg, TechName, ContactWrapper } from './AboutElements';
import { stackList } from "data/ProjectData";
import astronauta from 'assets/images/astronauta.png';
import { AboutBio, BigCard, SectionTitle } from 'shared/globalStyles';

function About() {
  return (
    <ContactWrapper id='about'>
     <div className='Container'>
        <SectionTitle>Sobre</SectionTitle>
        <BigCard>
        <AboutBio>
          <Image src={astronauta} alt='imagem-astronauta' />
            Hello world! Me chamo <strong>Bernardo Schmitz</strong>, sou formado em Ciência da 
            computação pela UNESC e trabalho como programador front-end e mobile. Abaixo algumas das principais tecnologias em que trabalho.
          </AboutBio>
          <Technologies>
              {stackList.map((stack, index) => (
                <Tech key={index} className="tech">
                <TechImg src={stack.img} alt={stack.name} />
                <TechName>{stack.name}</TechName>
              </Tech>
            ))}
          </Technologies>
            </BigCard>
      </div>
    </ContactWrapper>
  );
}

export default About;
