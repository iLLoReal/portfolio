import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import { projectType } from '../pages/Projects/ProjectsPage/ProjectsPage';

type Props = {
  project: projectType;
}

const ProjectVideo = ({ project }: Props) => {
  return (
    <div style={{ color: '#272727', height: '100vh', width: '100vw', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
      <CardHeader title='Preview' sx={{ textAlign: 'center' }} />
      <iframe style={{ height: '56.25vh', width: '56.25vw', maxHeight: '100%', marginLeft: 'calc((100vw - 56.25vw) % 2)' }}
        src={project.videoUrl}
        title={project.title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <div style={{ border: '1px solid #E8E1EF', backgroundColor: '#272727', width: '100%', textAlign: 'center', height: 'auto' }}>
        <CardContent sx={{ backgroundColor: '#272727', color: '#E8E1EF', textAlign: 'center', width: '100%' }}>
          {project.context}
        </CardContent>
      </div>
    </div>
  )
}

export default ProjectVideo