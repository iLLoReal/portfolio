import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Avatar from '@mui/material/Avatar';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useEffect, useMemo, useState } from 'react';
import { BrowserView } from 'react-device-detect';
import { useNavigate } from 'react-router-dom';
import { setIsMobile } from '../../../../appSlice';
import { useAppDispatch, useAppSelector } from '../../../../state/hooks';
import ProjectPreview from '../../../Project/ProjectPreview';
import Drawer from '../../../utils/Drawer';
import { loadProjects, notFound } from '../projectsSlice';
import ProjectsDisplay from './ProjectsDisplay';

import Grid from '@mui/material/Grid';
import SocialNetwork from './SocialNetwork';

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
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', height: 'auto' }}>
      <Grid
        container
        direction="column"
        alignItems="center"
        wrap='nowrap'
        sx={{ backgroundColor: '#009FB7' }}
      >
        <Grid container justifyContent='center' sx={{ backgroundColor: '#009FB7' }}>
          <SocialNetwork icon={(<GitHubIcon />)} onClickHandler={() => { }} />
          <SocialNetwork icon={(<LinkedInIcon />)} onClickHandler={() => { }} />
          <SocialNetwork icon={<p>cv</p>} onClickHandler={downloadResume} />
        </Grid>
        <ProjectsDisplay projectList={projectList} setFocusedProject={setFocusedProject} />

      </Grid>
      <BrowserView>
        <Drawer
          open={<p>SHOW</p>}
          close={<p>HIDE</p>}
          hide={false}
        >
          {focusedProject && <ProjectPreview project={focusedProject} />}
        </Drawer>
      </BrowserView>
    </div>
  )
}

export default ProjectsPage
