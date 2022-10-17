import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import Tooltip from '@mui/material/Tooltip';
import { useEffect, useState } from 'react';
import './Drawer.scss';

export type Props = {
  open: React.ReactNode;
  close: React.ReactNode;
  children: React.ReactNode;
  hide: boolean;
  isHiddenHandler?: React.Dispatch<React.SetStateAction<boolean>> | null;
  buttonWritingMode?: { writingMode: string; transform: string; };
}
const Drawer = ({
  open,
  close,
  children,
  hide,
  isHiddenHandler = null,
  buttonWritingMode = { writingMode: 'tb-rl', transform: 'rotate(-180deg)' }
}: Props) => {
  const [hideMenu, setHideMenu] = useState(hide);

  useEffect(() => {
    isHiddenHandler && isHiddenHandler(hideMenu)
  }, [hideMenu, isHiddenHandler])


  return (
    <div className='side_menu_container'>
      <Tooltip title='Prévisualiser le projet'>
        <Avatar
          className={'side_menu_container_avatar_close'}
          variant={hideMenu ? 'rounded' : 'square'}
          onClick={() => setHideMenu(!hideMenu)}
          sx={{
            writingMode: buttonWritingMode.writingMode,
            transform: buttonWritingMode.transform
          }}
        >
          {hideMenu ? open : close}
        </Avatar>
      </Tooltip>
      <Collapse orientation="horizontal" in={!hideMenu}>
        <Card className='side_menu_card_children_display'>
          {children}
        </Card>
      </Collapse>
    </div>
  )
}

export default Drawer