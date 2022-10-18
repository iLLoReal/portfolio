import React from 'react'

type Props = {
  children: React.ReactElement;
  className?: string;
  width?: string;
  style?: React.CSSProperties;
}

const Footer = ({ children, className = 'none', width = '100vw', style={} }: Props) => {
  return (
    <div className={className} style={{ width: width, ...style }}>{children}</div>
  )
}

export default Footer