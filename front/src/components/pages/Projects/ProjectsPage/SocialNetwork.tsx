import { Avatar, Button, Link } from '@mui/material';
import React from 'react'


type Props = {
  icon: React.ReactElement;
  onClickHandler: () => void;
}

const SocialNetwork = ({icon, onClickHandler = () => {}}: Props) => {
  return (
    <div>
      <Avatar>
        <Link underline='none'>
          <Button onClick={() => onClickHandler()}>
            {icon}
          </Button>
        </Link>
      </Avatar>
    </div>
  )
}

export default SocialNetwork