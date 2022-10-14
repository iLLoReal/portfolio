import GitHubIcon from '@mui/icons-material/GitHub';
import CardHeader from '@mui/material/CardHeader';
import { projectType } from '../pages/Projects/ProjectsPage/ProjectsPage';
import SocialNetwork from '../pages/Projects/ProjectsPage/SocialNetwork';
import Responsive from '../utils/Responsive';
import './ProjectVideo.scss';

type Props = {
  project: projectType;
}

const ProjectVideo = ({ project }: Props) => {
  return (
    <div className='project_video_container'>
      <Responsive style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <CardHeader title="Preview" />
        <SocialNetwork icon={<GitHubIcon style={{ color: 'black' }} />} redirectUrl={project.gitUrl} />

        <iframe className='project_video_media' title={project.title} src={project.videoUrl} />
      </Responsive>
    </div>
  )
}

export default ProjectVideo