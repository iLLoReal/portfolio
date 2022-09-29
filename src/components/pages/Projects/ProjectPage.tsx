import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../../state/hooks';
import { projectType } from './ProjectsPage'


const ProjectPage = () => {
  const { projectId } = useParams() || '0';
  const defaultProject = { id: -1, title: 'none', stack: ['none'] };
  const projectStore = useAppSelector((state) => state.projectStore)
  const [project, setProject] = useState<projectType>(defaultProject)

  useEffect(() => {
    console.log(projectId);
    if (projectId !== undefined) {
      const newProject = projectStore.projects.find((project: projectType) => project.id === parseInt(projectId, 10))
      if (newProject)
        setProject(newProject);
      else
        setProject({ id: -1, title: 'none', stack: ['none'] })
    }
  }, [projectStore, projectId])

  return (
    <div>
      <h1>{project.title}</h1>
      <Grid container rowSpacing={50}>
        {project.stack.map(
          (technologie: string, id: number) =>
            <Grid item xs={2} key={'stack/' + id}>
              {technologie}
            </Grid>
        )}
      </Grid>
    </div>
  )
}

export default ProjectPage
