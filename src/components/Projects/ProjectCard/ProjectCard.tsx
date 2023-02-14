import Button from 'components/Buttons/Button';
import { DivLinha } from 'shared/globalStyles';
import { ProjectList } from 'data/ProjectData';
import { Card, CardLeft, CardRight, Stack } from './ProjectCardElements';
import { theme } from 'theme/theme';

function ProjectCard() {
  return (
    <>
      {ProjectList.map((list, index) => (
        <Card key={index}>
          <CardLeft>
            <img src={list.img} alt={list.stack?.name} />
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
