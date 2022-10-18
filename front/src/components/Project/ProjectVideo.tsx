import GitHubIcon from '@mui/icons-material/GitHub';
import { projectType } from '../pages/Projects/ProjectsPage/ProjectsPage';
import SocialNetwork from '../pages/Projects/ProjectsPage/SocialNetwork';
import bgColor, { color } from '../utils/Colors';
import Responsive from '../utils/Responsive';
import './ProjectVideo.scss';

type Props = {
  project: projectType;
}

const ProjectVideo = ({ project }: Props) => {
  return (
    <div style={{backgroundColor: bgColor.outter}} className='project_video_container'>
      <Responsive style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: '1rem'}}>
          GitHub<SocialNetwork icon={<GitHubIcon style={{ color: color.socialNetwork }} />} redirectUrl={project.gitUrl} />
        </div>
        <iframe style={{margin: 'none'}} className='project_video_media' title={project.title} src={project.videoUrl} />
      </Responsive>
    </div>
  )
}

export default ProjectVideo