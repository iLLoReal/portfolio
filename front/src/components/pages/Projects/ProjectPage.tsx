import { Button, Card, CardHeader, Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppSelector } from '../../../state/hooks';
import { projectType } from './ProjectsPage';

const defaultProject: projectType = { id: -1, title: 'none', stack: ['none'], previewUrl: 'https://img.freepik.com/free-psd/phone-14-pro-front-view_187299-22711.jpg?w=826&t=st=1664891574~exp=1664892174~hmac=8a76ae7fad69dcdfe7f2853dc822ecc162b8d2bcf108a6043a95365039565096' };

/**
 * Composant qui prend une page, représentant un projet en fonction de son titre
 */
const ProjectPage = () => {
  const { projectTitle } = useParams() || '0';
  const projectStore = useAppSelector((state) => state.projectStore)
  const [project, setProject] = useState<projectType>(defaultProject)
  let navigate = useNavigate();

  const handleBackToMain = () => {
    navigate('/projects');
  }

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
    <Card>
      <Button onClick={handleBackToMain}>
        Back
      </Button>
      <CardHeader title={project.title} />
      <Grid container>
        {project.stack.map(
          (technologie: string, id: number) =>
            <Grid item xs={1} key={'stack/' + id}>
              {technologie}
            </Grid>
        )}
      </Grid>
    </Card>
  )
}

export default ProjectPage
