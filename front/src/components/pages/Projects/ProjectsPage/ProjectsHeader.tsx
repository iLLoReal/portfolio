import BadgeIcon from '@mui/icons-material/Badge';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Header from '../../Header';
import { projectType } from './ProjectsPage';
import SearchBar from './SearchBar';
import SocialNetworksDisplay from '../../../SocialNetworks/SocialNetworksDisplay';
type Props = {
  projectList: projectType[];
  notOnMobile: boolean;
}

const ProjectsHeader = ({ projectList, notOnMobile }: Props) => {
  return (
    <Header className='projects_header_container'>
      <SocialNetworksDisplay
        networks={
          [
            { icon: <GitHubIcon />, url: 'https://github.com/iLLoReal' },
            { icon: <LinkedInIcon />, url: 'https://www.linkedin.com/in/olivier-laffon/' },
            { icon: <BadgeIcon>CV</BadgeIcon>, url: '/resume' },
          ]
        } />
      <SearchBar
        projectList={projectList}
        isOnMobile={!notOnMobile}
      />
    </Header>
  )
}

export default ProjectsHeader