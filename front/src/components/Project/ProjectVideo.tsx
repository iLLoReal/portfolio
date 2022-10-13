import CardHeader from '@mui/material/CardHeader';
import { projectType } from '../pages/Projects/ProjectsPage/ProjectsPage';
import MultipleResponsive from '../utils/MultipleResponsive';
import './ProjectVideo.scss';
type Props = {
  project: projectType;
}

const ProjectVideo = ({ project }: Props) => {
  return (
    <div className='project_video_container'>
      <CardHeader title="Preview" />
      <MultipleResponsive>
        <iframe className='project_video_media' title={project.title} src={project.videoUrl} />
        <div className='project_video_context'>
          <p>{project.context}</p>
        </div>
      </MultipleResponsive>
    </div>
  )
}

export default ProjectVideo