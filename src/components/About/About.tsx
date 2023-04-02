import { Technologies, Tech, TechName, ContactWrapper, ImgBio } from './AboutElements';
import { stackList } from 'data/ProjectData';
import { AboutBio, BigCard, SectionTitle } from 'styles/globalStyled';
import Image from 'next/image';
import { theme } from 'theme/theme';

function About() {
  return (
    <ContactWrapper id='about'>
      <div className='Container'>
        <SectionTitle>Sobre</SectionTitle>
        <BigCard>
          <AboutBio>
            <ImgBio>
              <Image style={{ height: 120, backgroundColor: theme.surface, borderRadius: 100 }} width={125} height={125} src={'/images/astronauta.webp'} alt='imagem-astronauta' />
            </ImgBio>
            Hello world! Me chamo <strong>Bernardo Schmitz</strong>, sou formado em Ciência da computação pela UNESC e trabalho como programador front-end e mobile. Abaixo algumas
            das principais tecnologias em que trabalho.
          </AboutBio>
          <Technologies>
            {stackList.map((stack, index) => (
              <Tech key={index}>
                <Image width={48} height={48} src={stack.img} alt={stack.name} />
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
