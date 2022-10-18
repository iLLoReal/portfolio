import { Avatar, Button, Link } from '@mui/material';
import React from 'react'


type Props = {
  icon: React.ReactElement;
  redirectUrl: string;
  glow?: string;
  text?: string;
}

const SocialNetwork = ({ icon, redirectUrl = 'none', glow = '#FED766', text = '' }: Props) => {
  const onClickHandler = (link: string) => {
    window.location.replace(link)
  }
  return (
    <div>
      <Avatar>
        <Link underline='none'>
          <Button
            onClick={() => onClickHandler(redirectUrl)}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              color: glow,
              backgroundColor: '#009FB7',
              fontSize: '0.38rem'
            }}
          >
            {icon}
            {text && text}
          </Button>
        </Link>
      </Avatar>
    </div>
  )
}

export default SocialNetwork