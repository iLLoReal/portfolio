import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../../../state/hooks';
import ProjectVideo from '../../../Project/ProjectVideo';
import Responsive from '../../../utils/Responsive';
import Footer from '../../Footer';
import { projectType } from '../ProjectsPage/ProjectsPage';
import { notFound } from '../projectsSlice';
import './ProjectPage.scss';
import ProjectPageFooter from './ProjectPageFooter';
import ProjectPageHeader from './ProjectPageHeader';

const defaultProject = notFound;

/**
 * Composant qui prend une page, représentant un projet en fonction de son titre
 */
const ProjectPage = () => {
  const { projectTitle } = useParams() || '0';
  const projectStore = useAppSelector((state) => state.projectStore)
  const [project, setProject] = useState<projectType>(defaultProject)


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
    <div className='project_page_container'>
      <ProjectPageHeader project={project} />
      <ProjectVideo project={project} />
      <ProjectPageFooter project={project} />
    </div>
  )
}

export default ProjectPage
