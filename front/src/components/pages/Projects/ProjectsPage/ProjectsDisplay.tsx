import Grid from '@mui/material/Grid'
import React, { Dispatch, SetStateAction } from 'react'
import ProjectCard from '../../../Project/ProjectCard';
import { projectType } from './ProjectsPage'


type Props = {
  projectList: projectType[];
  setFocusedProject: Dispatch<SetStateAction<projectType>>;
}

const ProjectsDisplay = ({projectList, setFocusedProject}: Props) => {
  return (
    <div>
      <Grid container spacing={1}>
        {projectList.map((project: projectType, id: number) =>
          <Grid key={'project/' + id + '/' + project.title} item>
            <ProjectCard project={project} select={setFocusedProject}></ProjectCard>
          </Grid>)}
      </Grid></div>
  )
}

export default ProjectsDisplay