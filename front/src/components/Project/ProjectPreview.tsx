import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import { useEffect } from 'react';
import { projectType } from '../pages/Projects/ProjectsPage/ProjectsPage';
import './ProjectPreview.scss';

type Props = {
  project: projectType;
}

const ProjectPreview = ({ project }: Props) => {

  useEffect(() => {
    console.log(project);
  }, [project])

  return (
    <div className='project_preview_container'>
      <CardHeader title={project.title} />
      <CardMedia
        className='project_preview_media'
        image={project.previewUrl}
        component='img'
      />

      <CardContent>{project.context}</CardContent>
    </div>
  )
}

export default ProjectPreview