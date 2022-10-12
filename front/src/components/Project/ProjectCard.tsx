import { Button, Card, CardContent, CardHeader, CardMedia, Grid, Typography } from '@mui/material';
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
      variant='elevation'
      onClick={(e) => handleProjectClick(e)}
      sx={{ textAlign: 'center', color: '#F0F7F4', backgroundColor: '#009FB7', border: 'none', boxShadow: 'none' }}
    >
      <CardHeader title={`Projet ${project.title}`} sx={{ backgroundColor: '#272727', color: '#E8E1EF' }} />
      <CardContent
        sx={{ textAlign: 'left', border: '0.2rem solid #272727', margin: '0.1rem' }}>
        <Typography sx={{ fontSize: 25, color: 'inherit' }} color="text.secondary" gutterBottom>
          Stack:
        </Typography>
        <Grid
          container
          direction={'column'}
          justifyContent={'space-around'}
        >
          <Grid item>
            <Grid container justifyContent={'space-around'}>
              {project.stack.map((techno: string, id: number) =>
                <p style={{ fontSize: '4vw' }} key={project.id + '/stack/' + id + '/' + techno}>
                  {techno}
                </p>)}
            </Grid>
          </Grid>
          <Grid item>
            <Grid
              onMouseEnter={() => select(project)}
              container
              justifyContent={'center'}
            >
              <CardMedia title={project.title} component='img' image={project.previewUrl} sx={{ maxWidth: 'auto', height: '56.25vw', objectFit: 'cover' }} />
            </Grid>
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