
import Grid from '@mui/material/Grid';
import './ProjectsContent.scss';
import ProjectCard from '../../../Project/ProjectCard';
import { projectType } from './ProjectsPage';

type Props = {
  projectList: projectType[];
  setFocusedProject: React.Dispatch<React.SetStateAction<projectType>>;
}

const ProjectsContent = ({ projectList, setFocusedProject }: Props) => {
  return (
    <div className='projects_content_container'>
      {projectList.map((project: projectType, id: number) =>
        <ProjectCard
          project={project}
          select={setFocusedProject}
        />
      )}
    </div>
  )
}

export default ProjectsContent