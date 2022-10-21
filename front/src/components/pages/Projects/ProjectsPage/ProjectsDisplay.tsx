import Grid from '@mui/material/Grid';
import { Dispatch, SetStateAction } from 'react';
import ProjectCard from '../../../Project/ProjectCard';
import './ProjectsDisplay.scss';
import { projectType } from './ProjectsPage';

type Props = {
  projectList: projectType[];
  setFocusedProject: Dispatch<SetStateAction<projectType>>;
}

const ProjectsDisplay = ({ projectList, setFocusedProject }: Props) => {
  return (
    <>
      <Grid container className='projects_display_container'>
        {projectList.map((project: projectType, id: number) =>
          <Grid item key={'project/' + id + '/' + project.title}>
            <ProjectCard project={project} select={setFocusedProject} />
          </Grid>)}
      </Grid>
    </>
  )
}

export default ProjectsDisplay