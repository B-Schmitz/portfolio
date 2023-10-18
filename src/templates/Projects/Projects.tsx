import { SectionTitle } from 'styles/globalStyled';
import ProjectCard from './ProjectCard/ProjectCard';
import { ContainerProjects } from './ProjectsElements';
function Projects() {
  return (
    <ContainerProjects id='projects'>
      <div className='Container'>
        <SectionTitle>Projetos</SectionTitle>
        <ProjectCard />
      </div>
    </ContainerProjects>
  );
}

export default Projects;
