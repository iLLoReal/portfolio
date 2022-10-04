import { CardHeader, CardMedia, useMediaQuery } from '@mui/material';
import { projectType } from '../pages/Projects/ProjectsPage';
import './ProjectPreview.scss';

type Props = {
  project: projectType;
}

const ProjectPreview = ({ project }: Props) => {

  return (
    <div style={{width: '100%', textAlign: 'center'}}>
      <CardHeader title={project.title} />
      <CardMedia
        title={project.title}
        className='project_preview_media'
        image={project.previewUrl}
      />
    </div>
  )
}

export default ProjectPreview