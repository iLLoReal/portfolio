import React from 'react'
import Footer from '../../Footer';
import { projectType } from '../ProjectsPage/ProjectsPage'
import './ProjectPageFooter.scss';
type Props = {
  project: projectType;
}

const ProjectPageFooter = ({ project }: Props) => {
  return (
    <Footer className='project_page_footer'>
      <p>{project.context}</p>
    </Footer>
  )
}

export default ProjectPageFooter