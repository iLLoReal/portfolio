import React from 'react'

type Props = {
  children: React.ReactElement;
  className?: string;
}

const Footer = ({ children, className = 'none' }: Props) => {
  return (
    <div className={className} style={{ width: '100vw' }}>{children}</div>
  )
}

export default Footer