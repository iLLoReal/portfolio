import CardHeader from '@mui/material/CardHeader'
import React from 'react'
import { projectType } from '../ProjectsPage/ProjectsPage'
import { useNavigate } from 'react-router-dom';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import './ProjectPageHeader.scss';

type Props = {
  project: projectType
}

const ProjectPageHeader = ({ project }: Props) => {
  let navigate = useNavigate();

  return (
    <div className='project_page_header'>
      <KeyboardBackspaceIcon
        className='project_page_navigate_back'
        fontSize='large'
        onClick={() => navigate('/')}
      />
      <CardHeader title={project.title} />
      <div className='project_page_stack'>
        {project.stack.map((tech: string, id: number) => (<p id={tech + 'header/stack/' + id}>{tech}</p>))}
      </div>
    </div>
  )
}

export default ProjectPageHeader