import React, { useEffect, useState } from 'react'
import useMediaQuery from '@mui/material/useMediaQuery';
type Props = {
  children: React.ReactElement[];
}

const Responsive = ({ children }: Props) => {
  const over1200 = useMediaQuery('(min-width:1200px)');
  const from600to1199 = useMediaQuery('(min-width:600px) and (max-width: 1199px)');
  const from350to599 = useMediaQuery('(min-width:350px) and (max-width: 599px)')
  const from250to349 = useMediaQuery('(min-width:250px) and (max-width: 349px)')
  const below250 = useMediaQuery('(min-width:800px) and (max-width: 1199px)')
  const [resolution, setResolution] = useState([2580, 989]);

  useEffect(() => {
    if (over1200)
      setResolution([2580, 989]);
    else if (from600to1199)
      setResolution([1290, 494]);
    else if (from350to599)
      setResolution([645, 247]);
    else if (from250to349)
      setResolution([322, 123]);
    else if (below250)
      setResolution([161, 61]);
  }, [below250, from250to349, from350to599, from600to1199, over1200]);

  return (
    <div style={{
      height: resolution[0],
      width: resolution[1]
    }}>
      {children.map((child: React.ReactElement, id: number) => { return (child) })}
    </div>
  )
}

export default Responsive