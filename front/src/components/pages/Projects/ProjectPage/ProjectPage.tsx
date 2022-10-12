import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppSelector } from '../../../../state/hooks';
import ProjectPreview from '../../../Project/ProjectPreview';
import ProjectVideo from '../../../Project/ProjectVideo';
import { projectType } from '../ProjectsPage/ProjectsPage';
import { notFound } from '../projectsSlice';
import './ProjectPage.scss';

const defaultProject = notFound;

/**
 * Composant qui prend une page, représentant un projet en fonction de son titre
 */
const ProjectPage = () => {
  const { projectTitle } = useParams() || '0';
  const projectStore = useAppSelector((state) => state.projectStore)
  const [project, setProject] = useState<projectType>(defaultProject)
  let navigate = useNavigate();

  const findProjectByTitle = (projects: projectType[], title: string) => {
    const projectNotFound = defaultProject;
    const projectFound = projects.find((project: projectType) => project.title.toLowerCase().includes(title));
    return projectFound || projectNotFound;
  }

  useEffect(() => {
    const projecTitleLower = projectTitle?.toLowerCase();
    if (projecTitleLower != null) {
      setProject(findProjectByTitle(projectStore.projects, projecTitleLower));
    }
  }, [projectStore, projectTitle])

  return (
    <Card sx={{ backgroundColor: '#009FB7', color: '#E8E1EF', display: 'flex', flexDirection: 'column' }}>
      <CardContent className='project_page_stack'>
      <KeyboardBackspaceIcon
        fontSize='large'
        sx={{ cursor: 'pointer', color: 'lightblue' }}
        onClick={() => navigate('/')} />
        <CardHeader title={project.title} />
        <Grid container justifyContent={'space-around'}>
          {project.stack.map(
            (technologie: string, id: number) =>
              <InputLabel sx={{ color: '#E8E1EF' }} key={'stack/' + id}>
                {technologie}
              </InputLabel>
          )}
        </Grid>
      </CardContent>
      <ProjectVideo project={project} />
    </Card>
  )
}

export default ProjectPage
