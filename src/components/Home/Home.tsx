import { useState } from 'react';
import { DivLinha } from 'shared/globalStyles';
import { CgMouse } from 'react-icons/cg';
import astronauta from 'assets/images/astronauta.png';

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
            <h1>Oi, eu sou o <strong style={{color: theme.accent}}>Bernardo</strong></h1>
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
            <p>Essa é uma página dedicada a mostrar alguns projetos e estudos de forma organizada. Siga-me nas redes sociais!</p>
          </HomeLeft>
          <HomeRight>
            <ImageBackground src={astronauta} alt='imagem-astronauta' />
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
