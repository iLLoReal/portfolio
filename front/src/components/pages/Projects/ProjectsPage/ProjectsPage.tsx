import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useEffect, useMemo, useState } from 'react';
import { BrowserView } from 'react-device-detect';
import { setIsMobile } from '../../../../appSlice';
import { useAppDispatch, useAppSelector } from '../../../../state/hooks';
import ProjectPreview from '../../../Project/ProjectPreview';
import Drawer from '../../../utils/Drawer';
import { loadProjects, notFound } from '../projectsSlice';
import ProjectsContent from './ProjectsContent';
import ProjectsFooter from './ProjectsFooter';
import ProjectsHeader from './ProjectsHeader';
import './ProjectsPage.scss';

export type projectType = {
  id: number;
  title: string;
  stack: { title: string; link?: string; }[];
  previewUrl: string;
  context: string;
  videoUrl: string;
  gitUrl: string;
}

const ProjectsPage = () => {
  const projectStore = useAppSelector((state) => state.projectStore);
  const notOnMobile = useMediaQuery('(min-width:400px)');
  const dispatch = useAppDispatch();
  const projectList = useMemo<projectType[]>(() => {
    return projectStore.projects;
  }, [projectStore.projects]);
  const [focusedProject, setFocusedProject] = useState<projectType>(notFound);

  useEffect(() => {
    dispatch(setIsMobile(!notOnMobile))
  }, [notOnMobile, dispatch]);

  useEffect(() => {
    setFocusedProject(projectStore.projects[0]);
  }, [projectStore]);

  useEffect(() => {
    dispatch(loadProjects());
  }, [dispatch]);

  return (
    <div className='projects_page_container'>
      <div
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',  justifyContent: 'space-between', backgroundColor: '#009FB7' }}
      >
        <ProjectsHeader
          projectList={projectList}
          notOnMobile={notOnMobile}
        />
        <ProjectsContent
          projectList={projectList}
          setFocusedProject={setFocusedProject}
        />
        <ProjectsFooter />
      </div>
      <div style={{height: '100%', width: '100%'}}>
        <BrowserView>
          <Drawer
            open={<p>Preview<KeyboardArrowRightIcon /></p>}
            close={<p>Preview<KeyboardArrowLeftIcon /></p>}
            hide={false}
          >
            {focusedProject && <ProjectPreview project={focusedProject} />}
          </Drawer>
        </BrowserView>
      </div>
    </div>
  )
}

export default ProjectsPage
