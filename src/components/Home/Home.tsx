import { useState } from 'react';
import { DivLinha } from 'styles/globalStyles';
import { CgMouse } from 'react-icons/cg';
import Image from 'next/image';

import { HomeContainer, HomeWrapper, HomeLeft, HomeRight, ScrollDown, ScrollLink, Main, ImageBackground } from './HomeElements';
import Header from '../Header/Header';
import Dropdown from '../Dropdown/Dropdown';
import Typewriter from 'typewriter-effect';
import Particle from '../Particle';
import { theme } from 'theme/theme';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(state => !state);
  };

  return (
    <Main>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <HomeContainer>
        <HomeWrapper>
          <HomeLeft>
            <h1>
              Oi, eu sou o <strong style={{ color: theme.accent }}>Bernardo</strong>
            </h1>
            <DivLinha>
              <h5>Desenvolvedor</h5>
              <div style={{ paddingLeft: 10 }}>
                <Typewriter
                  options={{
                    cursorClassName: 'typeWriter_text',
                    wrapperClassName: 'typeWriter_text',
                    strings: [' Frontend', ' Mobile', ' React Native', ' React', ' Typescript', 'Next JS', '', ''],
                    autoStart: true,
                    loop: true
                  }}
                />
              </div>
            </DivLinha>
            <p>
              Bem vindo, neste portfólio você irá encontrar alguns projetos públicos e privados desenvolvidos por mim. Entre em contato comigo por meio de alguma rede social, ou
              discord!
            </p>
          </HomeLeft>
          <HomeRight>
            <ImageBackground>
              <Image
                style={{ aspectRatio: 1, backgroundColor: theme.background, borderRadius: '100%' }}
                width={400}
                height={400}
                src={'/images/astronauta.png'}
                alt='imagem-astronauta'
              />
            </ImageBackground>
          </HomeRight>
        </HomeWrapper>
        <ScrollDown to='projects'>
          <ScrollLink>
            Scroola ai
            <CgMouse />
          </ScrollLink>
        </ScrollDown>
      </HomeContainer>
      <Particle />
    </Main>
  );
};

export default Home;
