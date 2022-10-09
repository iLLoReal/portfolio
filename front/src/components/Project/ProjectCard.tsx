import { Button, Card, CardContent, CardHeader, CardMedia, Grid, Typography } from '@mui/material';
import Link from '@mui/material/Link';
import React, { Dispatch, SetStateAction } from 'react';
import { MobileOnlyView } from 'react-device-detect';
import { useNavigate } from 'react-router-dom';
import { projectType } from '../pages/Projects/ProjectsPage/ProjectsPage';
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
      onMouseEnter={() => select(project)}
      onClick={(e) => handleProjectClick(e)}
      sx={{ textAlign: 'center' }}
    >
      <CardHeader title={project.title} sx={{ backgroundColor: 'lightgrey' }} />
      <CardContent sx={{ textAlign: 'left' }}>
        <Typography sx={{ fontSize: 25 }} color="text.secondary" gutterBottom>
          Stack:
        </Typography>
        <Grid
          container
          justifyContent={'left'}
        >
          <Grid item>
            {project.stack.map((techno: string, id: number) =>
              <p key={project.id + '/stack/' + id + '/' + techno}>
                {techno}
              </p>)}
          </Grid>

        </Grid>
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