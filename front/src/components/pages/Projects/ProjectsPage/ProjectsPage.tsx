import PreviewIcon from '@mui/icons-material/Preview';
import Button from '@mui/material/Button';
import CardHeader from '@mui/material/CardHeader';
import Link from '@mui/material/Link';
import useMediaQuery from '@mui/material/useMediaQuery';
import Container from '@mui/system/Container';
import { useEffect, useMemo, useState } from 'react';
import { BrowserView } from 'react-device-detect';
import { useNavigate } from 'react-router-dom';
import { setIsMobile } from '../../../../appSlice';
import { useAppDispatch, useAppSelector } from '../../../../state/hooks';
import ProjectPreview from '../../../Project/ProjectPreview';
import Drawer from '../../../utils/Drawer';
import { loadProjects, notFound } from '../projectsSlice';
import ProjectsDisplay from './ProjectsDisplay';


export type projectType = {
  id: number;
  title: string;
  stack: string[];
  previewUrl: string;
  context: string;
}

const ProjectsPage = () => {
  const projectStore = useAppSelector((state) => state.projectStore);
  const dispatch = useAppDispatch();
  const notOnMobile = useMediaQuery('(min-width:400px)');
  const navigate = useNavigate();
  const projectList = useMemo<projectType[]>(() => {
    return projectStore.projects;
  }, [projectStore.projects]);
  const [focusedProject, setFocusedProject] = useState<projectType>(notFound);

  useEffect(() => {
    setFocusedProject(projectStore.projects[0]);
  }, [projectStore]);

  useEffect(() => {
    dispatch(loadProjects());
  }, [dispatch]);

  useEffect(() => {
    dispatch(setIsMobile(!notOnMobile))
  }, [notOnMobile, dispatch])

  const downloadResume = () => {
    navigate('/resume');
  }

  return (
    <div>
      <div style={{ height: '100%', display: 'flex', flexDirection: notOnMobile ? 'row' : 'column', justifyContent: 'left' }}>
        <Container sx={{ height: '100vh', textAlign: 'center' }}>
          <CardHeader title='iLLo' />
          <ProjectsDisplay projectList={projectList} setFocusedProject={setFocusedProject} />
        </Container>
        <BrowserView>
          <Drawer open={<PreviewIcon fontSize='large' />} close={<PreviewIcon fontSize='small' />} hide={false}>
            {focusedProject && <ProjectPreview project={focusedProject} />}
          </Drawer>
        </BrowserView>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Link underline='none'>
          <Button onClick={() => downloadResume()}>
            cv / resume
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default ProjectsPage
