import { CardHeader, CardMedia, useMediaQuery } from '@mui/material';
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
    <div style={{ width: '100%', textAlign: 'center' }}>
      <CardHeader title={project.title} />
      <CardMedia
        className='project_preview_media'
        image={project.previewUrl}
        component='img'/>
    </div>
  )
}

export default ProjectPreview