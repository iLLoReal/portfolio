import Grid from '@mui/material/Grid'
import React, { Dispatch, SetStateAction } from 'react'
import ProjectCard from '../../../Project/ProjectCard';
import { projectType } from './ProjectsPage'
import './ProjectsDisplay.scss';


type Props = {
  projectList: projectType[];
  setFocusedProject: Dispatch<SetStateAction<projectType>>;
}

const ProjectsDisplay = ({ projectList, setFocusedProject }: Props) => {
  return (
    <Grid container className='projects_display_container'>
      {projectList.map((project: projectType, id: number) =>
        <Grid item xs={12} className='projects_display_item' key={'project/' + id + '/' + project.title}>
            <ProjectCard project={project} select={setFocusedProject} />
        </Grid>)}
    </Grid>
  )
}

export default ProjectsDisplay