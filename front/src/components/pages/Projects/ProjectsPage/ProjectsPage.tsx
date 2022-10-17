import GitHubIcon from '@mui/icons-material/GitHub';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Tooltip from '@mui/material/Tooltip';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useEffect, useMemo, useState } from 'react';
import { BrowserView } from 'react-device-detect';
import { setIsMobile } from '../../../../appSlice';
import { useAppDispatch, useAppSelector } from '../../../../state/hooks';
import ProjectPreview from '../../../Project/ProjectPreview';
import Drawer from '../../../utils/Drawer';
import { loadProjects, notFound } from '../projectsSlice';
import ProjectsDisplay from './ProjectsDisplay';
import SearchBar from './SearchBar';
import SocialNetwork from './SocialNetwork';

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
  const dispatch = useAppDispatch();
  const notOnMobile = useMediaQuery('(min-width:400px)');
  const projectList = useMemo<projectType[]>(() => {
    return projectStore.projects;
  }, [projectStore.projects]);
  const [focusedProject, setFocusedProject] = useState<projectType>(notFound);
  const [isDrawerHidden, setIsDrawerHidden] = useState<boolean>(false);

  useEffect(() => {
    setFocusedProject(projectStore.projects[0]);
  }, [projectStore]);

  useEffect(() => {
    dispatch(loadProjects());
  }, [dispatch]);

  useEffect(() => {
    dispatch(setIsMobile(!notOnMobile))
  }, [notOnMobile, dispatch])

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      height: 'auto',
      backgroundColor: 'red',
    }}>
      <Grid
        container
        direction="column"
        alignItems="center"
        wrap='nowrap'
        sx={{ backgroundColor: '#009FB7' }}
      >
        <Grid container justifyContent='center' sx={{ margin: '2rem', backgroundColor: '#009FB7' }}>
          <SocialNetwork icon={(<GitHubIcon />)} redirectUrl='https://github.com/iLLoReal' />
          <SocialNetwork icon={(<LinkedInIcon />)} redirectUrl='https://www.linkedin.com/in/olivier-laffon/' />
          <SocialNetwork icon={<p>cv</p>} redirectUrl='/resume' />
        </Grid>
        <SearchBar
          projectStore={projectStore}
          isOnMobile={!notOnMobile}
        />
        {
          isDrawerHidden && (
            <BrowserView style={{width: '100%', position: 'sticky', top: '0'}}>
              <div style={{width: '100%', margin: '10px' }}>
                <Tooltip title='Prévisualiser le projet'>
                  <Avatar
                    variant={isDrawerHidden ? 'rounded' : 'square'}
                    onClick={() => setIsDrawerHidden(false)}
                    sx={{ width: '100%' }}
                  >
                    <p>Preview<KeyboardArrowRightIcon /></p>
                  </Avatar>
                </Tooltip>
              </div>
            </BrowserView>
          )
        }

        <ProjectsDisplay
          projectList={projectList}
          setFocusedProject={setFocusedProject}
        />
      </Grid>
      {!isDrawerHidden &&
        <BrowserView>
          <Drawer
            open={<p>Preview<KeyboardArrowRightIcon /></p>}
            close={<p>Preview<KeyboardArrowLeftIcon /></p>}
            hide={false}
            isHiddenHandler={setIsDrawerHidden}
          >
            {focusedProject && <ProjectPreview project={focusedProject} />}
          </Drawer>
        </BrowserView>
      }
    </div>
  )
}

export default ProjectsPage
