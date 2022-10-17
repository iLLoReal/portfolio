import React from 'react'

type Props = {
  children: React.ReactElement[];
  className?: string;
}

const Header = ({ children, className = 'none' }: Props) => {
  return (
    <div className={className}>
      {children.map((child: React.ReactElement, id: number) => <div key={'header/' + id}>{child}</div>)}
    </div>
  )
}

export default Header