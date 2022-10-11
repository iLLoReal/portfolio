import { Avatar, Button, Link } from '@mui/material';
import React from 'react'


type Props = {
  icon: React.ReactElement;
  redirectUrl: string
}

const SocialNetwork = ({icon, redirectUrl = 'none'}: Props) => {
  const onClickHandler = (link: string) => {
      window.location.replace(link)
  }
  return (
    <div>
      <Avatar>
        <Link underline='none'>
          <Button onClick={() => onClickHandler(redirectUrl)} sx={{color: '#FED766', backgroundColor: '#009FB7'}}>
            {icon}
          </Button>
        </Link>
      </Avatar>
    </div>
  )
}

export default SocialNetwork