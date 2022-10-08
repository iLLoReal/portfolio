import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import InputLabel from '@mui/material/InputLabel';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppSelector } from '../../../../state/hooks';
import ProjectPreview from '../../../Project/ProjectPreview';
import { projectType } from '../ProjectsPage/ProjectsPage';
import { notFound } from '../projectsSlice';

const defaultProject = notFound;

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
        <CardContent>
          <CardHeader title='Stack:'/>
          {project.stack.map(
            (technologie: string, id: number) =>
              <InputLabel key={'stack/' + id}>
                {technologie}
              </InputLabel>
          )}
          <CardHeader title='Preview'/>
            <ProjectPreview project={project} />
        </CardContent>
      </Card>
  )
}

export default ProjectPage