import { Technologies, Tech, TechName, ContactWrapper, ImgBio } from './AboutElements';
import { stackList } from 'utils';
import { AboutBio, BigCard, SectionTitle } from 'styles/globalStyled';
import Image from 'next/image';

function About() {
  return (
    <ContactWrapper id='about'>
      <div className='Container'>
        <SectionTitle>Sobre</SectionTitle>
        <BigCard>
          <AboutBio>
            Hello world! Me chamo <strong>Bernardo Schmitz</strong>, sou formado em Ciência da computação pela UNESC e
            trabalho como programador front-end e mobile. Abaixo algumas das principais tecnologias em que trabalho.
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
