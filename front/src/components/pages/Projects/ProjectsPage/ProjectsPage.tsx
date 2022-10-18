import CropPortraitIcon from '@mui/icons-material/CropPortrait';
import GitHubIcon from '@mui/icons-material/GitHub';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Button, Card } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Tooltip from '@mui/material/Tooltip';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useEffect, useMemo, useState } from 'react';
import { BrowserView } from 'react-device-detect';
import { setIsMobile } from '../../../../appSlice';
import { useAppDispatch, useAppSelector } from '../../../../state/hooks';
import ProjectPreview from '../../../Project/ProjectPreview';
import { bgColor } from '../../../utils/Colors';
import Drawer from '../../../utils/Drawer';
import Footer from '../../Footer';
import { loadProjects, notFound } from '../projectsSlice';
import ProjectsDisplay from './ProjectsDisplay';
import './ProjectsPage.scss';
import SearchBar from './SearchBar';
import SocialNetwork from './SocialNetwork';

export type projectType = {
  id: number;
  title: string;
  stack: {
    title: string;
    link?: string;
  }[];
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
        sx={{ backgroundColor: bgColor.outter }}
      >
        <Grid container justifyContent='center' sx={{ margin: '2rem' }}>
          <SocialNetwork
            icon={(<GitHubIcon />)}
            redirectUrl='https://github.com/iLLoReal'
            glow={bgColor.socialNetwork}
            text='GitHub' />
          <SocialNetwork
            icon={(<LinkedInIcon />)}
            redirectUrl='https://www.linkedin.com/in/olivier-laffon/'
            glow={bgColor.socialNetwork}
            text='LinkedIn' />
          <SocialNetwork
            icon={<CropPortraitIcon />}
            redirectUrl='/resume'
            glow={bgColor.socialNetwork}
            text='CV' />
        </Grid>
        <SearchBar
          projectStore={projectStore}
          isOnMobile={!notOnMobile}
        />
        {
          isDrawerHidden && (
            <BrowserView style={{
              width: '100%',
              position: 'sticky',
              top: '0'
            }}>
              <div style={{
                width: '100%',
                margin: '10px'
              }}>
                <Tooltip title='Prévisualiser le projet'>
                  <Avatar
                    variant={isDrawerHidden ? 'rounded' : 'square'}
                    onClick={() => setIsDrawerHidden(false)}
                    sx={{ width: '100%' }}
                  >
                    <p>
                      Preview
                      <KeyboardArrowRightIcon />
                    </p>
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
        <Footer
          className='projects_footer'
          width='100%'>
          <Card sx={{
            backgroundColor: 'inherit',
            color: 'inherit',
            border: 'none',
            boxShadow: 'none'
          }}>
            <Button
              sx={{ color: 'inherit' }}
              onClick={() => window.location.replace('mailto:olivier.laffon.dev@gmail.com')}
            >
              Contact
            </Button>
          </Card>
        </Footer>
      </Grid>
      {!isDrawerHidden &&
        <BrowserView>
          <Drawer
            open={
              <p>
                Preview
                <KeyboardArrowRightIcon />
              </p>
            }
            close={
              <p>
                Preview
                <KeyboardArrowLeftIcon />
              </p>
            }
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
