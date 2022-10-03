import ArrowBack from '@mui/icons-material/ArrowBack';
import InfoIcon from '@mui/icons-material/Info';
import MenuIcon from '@mui/icons-material/Menu';
import { Card, CardHeader, IconButton } from '@mui/material';
import Axios from 'axios';
import { Dispatch, SetStateAction, useState } from 'react';
import { projectType } from '../pages/Projects/ProjectsPage';

type Props = {
  project: projectType | null;
  select: Dispatch<SetStateAction<projectType | null>>;
}

function ProjectPreview({ project, select }: Props) {
  const [hideMenu, setHideMenu] = useState(false);

  const downloadResume = async () => {
    await Axios.get('http://localhost:3001/cv-olivier-laffon-2022.pdf');
  }

  return (
    <>
      {!hideMenu &&
        <Card style={{ flex: '2' }}>
          <CardHeader
            action={
              <IconButton onClick={() => downloadResume}>
                <InfoIcon />
              </IconButton>
            }
            title={'Olivier Laffon'}
          />
          {project && <CardHeader
            action={
              <IconButton onClick={() => setHideMenu(true)}>
                <ArrowBack />
              </IconButton>
            }
            title={project.title}
          />}

        </Card>
      }
      {hideMenu && <MenuIcon sx={{ cursor: 'pointer' }} onClick={() => setHideMenu(false)} />}

    </>
  )
}

export default ProjectPreview