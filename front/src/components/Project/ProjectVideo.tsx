import CardHeader from '@mui/material/CardHeader';
import { projectType } from '../pages/Projects/ProjectsPage/ProjectsPage';
import './ProjectVideo.scss';
type Props = {
  project: projectType;
}

const ProjectVideo = ({ project }: Props) => {
  return (
    <div className='project_video_container'>
      <CardHeader title="Preview" />
      <iframe className='project_video_media' title={project.title} src={project.videoUrl} />
      <div className='project_video_context'>
        <p>{project.context}</p>
      </div>
    </div>
  )
}

export default ProjectVideo