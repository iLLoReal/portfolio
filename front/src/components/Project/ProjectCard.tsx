import { Button, Card, CardContent, CardHeader, CardMedia, Grid, Typography } from '@mui/material';
import Link from '@mui/material/Link';
import React, { Dispatch, SetStateAction } from 'react';
import { MobileOnlyView } from 'react-device-detect';
import { projectType } from '../pages/Projects/ProjectsPage/ProjectsPage';

type Props = {
  project: projectType;
  select: Dispatch<SetStateAction<projectType>>;
}

const ProjectCard = ({ project, select }: Props) => {
  const handleProjectClick = (e: React.MouseEvent<HTMLDivElement>) => {
    window.location.replace("/projects/" + project.title);
  }
  return (
    <div
      onClick={(e) => handleProjectClick(e)}
      style={{ textAlign: 'center', color: '#F0F7F4', backgroundColor: '#009FB7', border: 'none', boxShadow: 'none' }}
    >
      <CardHeader title={`Projet ${project.title}`} sx={{ backgroundColor: '#272727', color: '#E8E1EF' }} />
      <div
        style={{ textAlign: 'left', border: '0.2rem solid #272727', margin: '0.1rem' }}>
        <div
          style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}
        >
          <div>
            <Typography sx={{ fontSize: '0.4rem', color: 'inherit' }} color="text.secondary" gutterBottom>
              Stack:
            </Typography>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
              {project.stack.map((techno: { title: string; link?: string }, id: number) =>
                <p style={{ fontSize: '1vw' }} key={project.id + '/stack/' + id + '/' + techno}>
                  {techno.title}
                </p>)}
            </div>
          </div>
          <div>
            <div
              onMouseEnter={() => select(project)}
              style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
            >
              <CardMedia title={project.title} component='img' image={project.previewUrl} sx={{ maxWidth: 'auto', height: '56.25vw', objectFit: 'contain' }} />
            </div>
          </div>
        </div>
      </div>
      <MobileOnlyView>
        <Link underline='none'>
          <Button onClick={() => select(project)}>
            Preview
          </Button>
        </Link>
      </MobileOnlyView>
    </div>
  )
}

export default ProjectCard