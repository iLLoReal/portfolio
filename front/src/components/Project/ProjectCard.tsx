import { Card, CardContent, CardHeader, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { projectType } from '../pages/Projects/ProjectsPage/ProjectsPage';

type Props = {
  project: projectType;
}

const ProjectCard = ({ project }: Props) => {
  let navigate = useNavigate();

  const handleProjectClick = (e: React.MouseEvent<HTMLDivElement>) => {
    navigate("/projects/" + project.title);
  }
  return (
    <Card
      variant='elevation'
      onClick={(e) => handleProjectClick(e)}
    >
      <CardHeader title={`Projet ${project.title}`} />
      <CardContent>
        <Grid
          container
          direction={'column'}
        >
          <Grid item>
            <Typography sx={{ fontSize: '0.7rem', color: 'inherit' }} color="text.secondary" gutterBottom>
              Stack:
            </Typography>
            <Grid container justifyContent={'space-around'}>
              {project.stack.map((techno: { title: string; link?: string }, id: number) =>
                <p style={{ fontSize: '0.7rem', color: 'inherit' }} key={project.id + '/stack/' + id + '/' + techno}>
                  {techno.title}
                </p>)}
            </Grid>
          </Grid>
          <Grid item>
            <Grid
              container
              direction={'column'}
              justifyContent='center'
            >
              <CardMedia title={project.title} component='img' image={project.previewUrl} sx={{ maxWidth: 'auto', height: 'auto', objectFit: 'contain' }} />
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default ProjectCard