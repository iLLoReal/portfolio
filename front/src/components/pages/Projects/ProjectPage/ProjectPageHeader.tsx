import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import CardHeader from '@mui/material/CardHeader';
import { useNavigate } from 'react-router-dom';
import { color } from '../../../utils/Colors';
import { projectType } from '../ProjectsPage/ProjectsPage';
import './ProjectPageHeader.scss';

type Props = {
  project: projectType
}

const ProjectPageHeader = ({ project }: Props) => {
  let navigate = useNavigate();

  const handleTechClick = (tech: { title: string; link?: string }) => {
    tech.link && window.location.replace(tech.link);
  }

  return (
    <div className='project_page_header'>
      <KeyboardBackspaceIcon
        className='project_page_navigate_back'
        sx={{color: color.header}}
        fontSize='large'
        onClick={() => navigate('/')}
      />
      <CardHeader sx={{color: color.header}} title={project.title} />
      <div className='project_page_stack'>
        {project.stack.map((tech: { title: string; link?: string }, id: number) => (
          <p style={{color: color.header, cursor: 'pointer'}} onClick={() => handleTechClick(tech)} id={tech + 'header/stack/' + id}>
            {tech.title}
          </p>))}
      </div>
    </div>
  )
}

export default ProjectPageHeader