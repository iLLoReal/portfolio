import React from 'react'
import Footer from '../../Footer'
import './ProjectsFooter.scss';

type Props = {}

const ProjectsFooter = (props: Props) => {
  return (
    <Footer className='projects_footer_container'>
      <div>ContinuousDelivery</div>
      <div>GrafikArt</div>
    </Footer>
  )
}

export default ProjectsFooter