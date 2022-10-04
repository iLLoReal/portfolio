import PreviewIcon from '@mui/icons-material/Preview';
import { CardHeader, Grid, useMediaQuery } from '@mui/material';
import { Container } from '@mui/system';
import Axios from 'axios';
import { useEffect, useState } from 'react';
import { useAppSelector } from '../../../state/hooks';
import Drawer from '../../Project/Drawer';
import ProjectCard from '../../Project/ProjectCard';
import ProjectPreview from '../../Project/ProjectPreview';
import Footer from '../../Template/Footer';
import Header from '../../Template/Header';
import { BrowserView } from 'react-device-detect';

export type projectType = {
  id: number;
  title: string;
  stack: string[];
  previewUrl: string;
}

const ProjectsPage = () => {
  const projectStore = useAppSelector((state) => state.projectStore)
  const notOnMobile = useMediaQuery('(min-width:400px)');
  const [projectList, setProjectList] = useState<projectType[]>([]);
  const [focusedProject, setFocusedProject] = useState<projectType | null>(null);

  useEffect(() => {
    setProjectList(projectStore.projects);
  }, [projectStore])

  const downloadResume = async () => {
    await Axios.get('http://localhost:3001/cv-olivier-laffon-2022.pdf');
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
          <Drawer open={<PreviewIcon fontSize='large' />} close={<PreviewIcon fontSize='small' />}>
            {focusedProject &&
              <ProjectPreview project={focusedProject} />
            }
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
