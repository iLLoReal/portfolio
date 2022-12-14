import { Button, Card, CardContent, CardHeader, CardMedia, Grid, Typography } from '@mui/material';
import Link from '@mui/material/Link';
import React, { Dispatch, SetStateAction } from 'react';
import { MobileOnlyView } from 'react-device-detect';
import { useNavigate } from 'react-router-dom';
import { projectType } from '../pages/Projects/ProjectsPage/ProjectsPage';
import { bgColor, color, colors } from '../utils/Colors';

type Props = {
  project: projectType;
  select: Dispatch<SetStateAction<projectType>>;
}

const ProjectCard = ({ project, select }: Props) => {
  let navigate = useNavigate();

  const handleProjectClick = (e: React.MouseEvent<HTMLDivElement>) => {
    navigate("/projects/" + project.title);
  }
  return (
    <Card
      variant='elevation'
      onClick={(e) => handleProjectClick(e)}
      sx={{ textAlign: 'center', color: color.card, backgroundColor: bgColor.card, border: 'none', boxShadow: 'none' }}
    >
      <CardHeader title={`Projet ${project.title}`} sx={{ backgroundColor: bgColor.cardHeader, color: color.cardHeader }} />
      <CardContent
        sx={{ color: color.cardContent, textAlign: 'left', backgroundColor: bgColor.cardContent, border: `0.2rem solid ${colors.black}`, margin: '0.1rem' }}>
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
              onMouseEnter={() => select(project)}
              container
              direction={'column'}
              justifyContent='center'
            >
              <CardMedia title={project.title} component='img' image={project.previewUrl} sx={{ maxWidth: 'auto', height: 'auto', objectFit: 'contain' }} />
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