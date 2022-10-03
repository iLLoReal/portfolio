import { CardHeader, Grid } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Container } from '@mui/system';
import { useEffect, useState } from 'react';
import { useAppSelector } from '../../../state/hooks';
import ProjectCard from '../../Project/ProjectCard';
import ProjectPreview from '../../Project/ProjectPreview';

export type projectType = {
  id: number;
  title: string;
  stack: string[];
}

const ProjectsPage = () => {
  const projectStore = useAppSelector((state) => state.projectStore)
  const [projectList, setProjectList] = useState<projectType[]>([]);
  const [focusedProject, setFocusedProject] = useState<projectType | null>(null);
  const matches = useMediaQuery('(min-width:600px)');

  useEffect(() => {
    setProjectList(projectStore.projects);
  }, [projectStore])

  useEffect(() => {
    console.log(matches);
  }, [matches])

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <Container sx={{ height: '100vh', textAlign: 'center' }}>
        <CardHeader title='Projects' />
        <Grid container spacing={1}>
          {projectList.map((project: projectType, id: number) =>
            <Grid key={'project/' + id + '/' + project.title} item>
              <ProjectCard project={project} select={setFocusedProject}></ProjectCard>
            </Grid>)}
        </Grid>
      </Container>
      <ProjectPreview project={focusedProject} select={setFocusedProject} />
    </div>
  )
}

export default ProjectsPage
