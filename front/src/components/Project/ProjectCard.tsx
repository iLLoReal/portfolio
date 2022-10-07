import { Card, CardContent, CardHeader } from '@mui/material';
import React, { Dispatch, SetStateAction } from 'react'
import { useNavigate } from 'react-router-dom';
import { projectType } from '../pages/Projects/ProjectsPage/ProjectsPage'
import ProjectPreview from './ProjectPreview';

type Props = {
  project: projectType;
  select: Dispatch<SetStateAction<projectType>>;
}

const ProjectCard = ({ project, select }: Props) => {
  let navigate = useNavigate();
  const handleProjectClick = (e: React.MouseEvent<HTMLDivElement>) => {
    console.log('Ici');
    navigate("/projects/" + project.title);
  }
  return (
    <Card
      sx={{ minHeight: 'fit-content'}}
      onMouseEnter={() => select(project)}
      onClick={(e) => handleProjectClick(e)}
    >
      <CardHeader title={project.title} sx={{ border: '1px solid red' }} />
      <CardContent>
        {project.stack.map((techno: string, id: number) =>
          <p key={project.id + '/stack/' + id + '/' + techno}>
            {techno}
          </p>)}
      </CardContent>
    </Card>
  )
}

export default ProjectCard