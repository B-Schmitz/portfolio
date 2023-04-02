import Button from 'components/Buttons/Button';
import { DivLinha } from 'styles/globalStyled';
import { ProjectList } from 'data/ProjectData';
import { Card, CardLeft, CardRight, Stack } from './ProjectCardElements';
import { theme } from 'theme/theme';
import Image from 'next/image';
import Carousel from 'nuka-carousel';

function ProjectCard() {
  return (
    <>
      {ProjectList.map((list, index) => (
        <Card key={index}>
          <CardLeft>
            <Carousel defaultControlsConfig={{ nextButtonText: '>', prevButtonText: '<' }}>
              {list.img.map(e => (
                <Image key={e} priority quality={100} width={600} height={350} src={e} alt={list.stack?.name || ''} />
              ))}
            </Carousel>
          </CardLeft>
          <CardRight>
            <h4>{list.title}</h4>
            <h6>{list.description}</h6>
            <Stack>
              <span className='stackTitle'>Tech Stack -</span>
              <span className='tags'>{list.tech_stack}</span>
            </Stack>

            <DivLinha style={{ display: 'flex', gap: 12 }}>
              {list.github_url ? <Button text='Github' link={list.github_url}></Button> : <Button text='PRIVADO' background={theme.private}></Button>}
              {list.demo_url && <Button text='Demo' link={list.demo_url}></Button>}
            </DivLinha>
          </CardRight>
        </Card>
      ))}
    </>
  );
}

export default ProjectCard;
