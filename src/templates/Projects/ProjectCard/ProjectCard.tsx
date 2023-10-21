import Button from 'components/Button/Button';
import { DivLinha } from 'styles/globalStyled';
import { ProjectList } from 'utils';
import { Card, CardLeft, CardRight, Stack } from './ProjectCardElements';
import { theme } from 'theme/theme';
import { Image } from 'primereact/image';
import { Galleria, GalleriaResponsiveOptions } from 'primereact/galleria';
function ProjectCard() {
  const responsiveOptions: GalleriaResponsiveOptions[] = [
    {
      breakpoint: '991px',
      numVisible: 4
    },
    {
      breakpoint: '767px',
      numVisible: 3
    },
    {
      breakpoint: '575px',
      numVisible: 1
    }
  ];

  const itemTemplate = (item: any) => {
    return <Image src={item} alt={item.title} width={'1440px'} height={'800px'} />;
  };

  return (
    <>
      {ProjectList.map((list, index) => (
        <Card key={index}>
          <CardLeft>
            <Galleria
              showItemNavigators
              showItemNavigatorsOnHover
              responsiveOptions={responsiveOptions}
              showIndicators
              value={list.img}
              showThumbnails={false}
              item={itemTemplate}
            />
          </CardLeft>
          <CardRight>
            <h4>{list.title}</h4>
            <p>{list.description}</p>
            <Stack>
              <span className='stackTitle'>Tech Stack -</span>
              <span className='tags'>{list.tech_stack}</span>
            </Stack>
            <DivLinha style={{ display: 'flex', gap: 12 }}>
              {list.github_url ? (
                <Button text='Github' link={list.github_url}></Button>
              ) : (
                <Button text='PRIVADO'></Button>
              )}
              {list.demo_url && <Button text='Demo' link={list.demo_url}></Button>}
            </DivLinha>
          </CardRight>
        </Card>
      ))}
    </>
  );
}

export default ProjectCard;
