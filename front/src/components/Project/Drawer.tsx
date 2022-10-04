import { Collapse } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import { useState } from 'react';
import Tooltip from '@mui/material/Tooltip';
import './Drawer.scss';

type Props = {
  open: React.ReactNode;
  close: React.ReactNode;
  children: React.ReactNode;
}
const Drawer = ({ open, close, children }: Props) => {
  const [hideMenu, setHideMenu] = useState(true);

  return (
    <div>
      <Container className='side_menu_container'>
        <Tooltip title='Prévisualiser le projet'>
          <Avatar
            className={'side_menu_container_avatar_close'}
            variant={hideMenu ? 'rounded' : 'square'}
            onClick={() => setHideMenu(!hideMenu)}
          >
            {hideMenu ? open : close}
          </Avatar>
        </Tooltip>
        <Collapse orientation="horizontal" in={!hideMenu}>
          <Card>
            {children}
          </Card>
        </Collapse>
      </Container>
    </div>
  )
}

export default Drawer