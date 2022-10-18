import React from 'react'
import { color } from '../../../utils/Colors';
import Footer from '../../Footer';
import { projectType } from '../ProjectsPage/ProjectsPage'
import './ProjectPageFooter.scss';
type Props = {
  project: projectType;
  style?: React.CSSProperties;
}

const ProjectPageFooter = ({ project, style={} }: Props) => {
  return (
    <Footer className='project_page_footer' style={{ color: color.footer, ...style }}>
      <>{project.context}</>
    </Footer>
  )
}

export default ProjectPageFooter