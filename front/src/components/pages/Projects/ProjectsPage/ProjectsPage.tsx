import { Button, Card } from '@mui/material';
import { useEffect, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../state/hooks';
import { loadProjects } from '../../../Project/projectsSlice';
import SocialNetworksDisplay from '../../../SocialNetworks/SocialNetworksDisplay';
import Footer from '../../Footer';
import Header from '../../Header';

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
  const projectList = useMemo<projectType[]>(() => {
    return projectStore.projects;
  }, [projectStore.projects]);

  useEffect(() => {
    dispatch(loadProjects());
  }, [dispatch]);


  return (
    <div>
      <Header />
        <SocialNetworksDisplay />
        <Footer
          className='projects_footer'
          width='100%'
        >
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
    </div>
  )
}

export default ProjectsPage
