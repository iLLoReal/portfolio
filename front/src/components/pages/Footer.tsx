import React from 'react'

type Props = {
  children: React.ReactElement;
  className?: string;
  width?: string;
}

const Footer = ({ children, className = 'none', width = '100vw' }: Props) => {
  return (
    <div className={className} style={{ width: width }}>{children}</div>
  )
}

export default Footer