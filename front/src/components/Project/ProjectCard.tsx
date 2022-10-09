import { Button, Card, CardContent, CardHeader, Typography } from '@mui/material';
import Link from '@mui/material/Link';
import React, { Dispatch, SetStateAction } from 'react';
import { MobileOnlyView } from 'react-device-detect';
import { useNavigate } from 'react-router-dom';
import { projectType } from '../pages/Projects/ProjectsPage/ProjectsPage';

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
      onMouseEnter={() => select(project)}
      onClick={(e) => handleProjectClick(e)}
    >
      <CardHeader avatar={project.title} action='site web' />
      <Typography sx={{ fontSize: 25 }} color="text.secondary" gutterBottom>
        Stack:
      </Typography>
      <CardContent>
        {project.stack.map((techno: string, id: number) =>
          <p key={project.id + '/stack/' + id + '/' + techno}>
            {techno}
          </p>)}
      </CardContent>
      <MobileOnlyView>
        <Link underline='none'>
          <Button onClick={() => select(project)}>
            Preview
          </Button>
        </Link>
      </MobileOnlyView>
    </Card>
  )
}

export default ProjectCard