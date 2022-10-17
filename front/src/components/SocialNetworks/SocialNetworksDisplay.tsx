import React from 'react'
import SocialNetwork from './SocialNetwork';
import Grid from '@mui/material/Grid';
type Props = {
  networks: { icon: React.ReactElement; url: string }[];
}

const SocialNetworksDisplay = ({ networks }: Props) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', margin: '2rem', backgroundColor: '#009FB7' }}>
      {networks.map((network: { icon: React.ReactElement; url: string; }) =>
        <SocialNetwork icon={network.icon} redirectUrl={network.url} />
      )}
    </div>
  )
}

export default SocialNetworksDisplay