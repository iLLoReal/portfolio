import PreviewIcon from '@mui/icons-material/Preview';
import { CardHeader, Grid, useMediaQuery } from '@mui/material';
import { Container } from '@mui/system';
import Axios from 'axios';
import { useEffect, useMemo, useState } from 'react';
import { BrowserView } from 'react-device-detect';
import { useAppDispatch, useAppSelector } from '../../../../state/hooks';
import ProjectCard from '../../../Project/ProjectCard';
import ProjectPreview from '../../../Project/ProjectPreview';
import Footer from '../../../Template/Footer';
import Header from '../../../Template/Header';
import Drawer from '../../../utils/Drawer';
import { loadProjects, notFound } from '../projectsSlice';
import * as routes from '../../../../routes';

export type projectType = {
  id: number;
  title: string;
  stack: string[];
  previewUrl: string;
}

const ProjectsPage = () => {
  const projectStore = useAppSelector((state) => state.projectStore)
  const dispatch = useAppDispatch();
  const notOnMobile = useMediaQuery('(min-width:400px)');
  const projectList = useMemo<projectType[]>(() => {
    return projectStore.projects;
  }, [projectStore.projects]);
  const [focusedProject, setFocusedProject] = useState<projectType>( notFound);

  useEffect(() => {
    setFocusedProject(projectStore.projects[0]);
  }, [projectStore]);

  useEffect(() => {
    dispatch(loadProjects());
  }, [dispatch]);

  const downloadResume = async () => {
    await Axios.get(routes.cvUrl);
  }

  return (
    <div>
      <header>
        <Header />
      </header>

      <div style={{
        height: '100%',
        display: 'flex',
        flexDirection: notOnMobile ? 'row' : 'column',
        justifyContent: 'left',
      }}>
        <Container sx={{ height: '100vh', textAlign: 'center' }}>
          <CardHeader title='Projects' />
          <Grid container spacing={1}>
            {projectList.map((project: projectType, id: number) =>
              <Grid key={'project/' + id + '/' + project.title} item>
                <ProjectCard project={project} select={setFocusedProject}></ProjectCard>
              </Grid>)}
          </Grid>
        </Container>
        <BrowserView>
          <Drawer
            open={<PreviewIcon fontSize='large' />}
            close={<PreviewIcon fontSize='small' />}
            hide={false}>
            {focusedProject && <ProjectPreview project={focusedProject} />}
          </Drawer>
        </BrowserView>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default ProjectsPage
