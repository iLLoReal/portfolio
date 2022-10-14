import useMediaQuery from '@mui/material/useMediaQuery';
import React, { useEffect, useState } from 'react';

type resolution = { height: number, width: number };
type Tuple<T, N extends number> = N extends N ? number extends N ? T[] : _TupleOf<T, N, []> : never;
type _TupleOf<T, N extends number, R extends unknown[]> = R['length'] extends N ? R : _TupleOf<T, N, [T, ...R]>;
type Tuple5<T> = Tuple<T, 5>;


type Props = {
  children: React.ReactElement[] | React.ReactElement;
  style?: React.CSSProperties;
  windowSizeRanges?: Tuple5<resolution>;
}

const defaultStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'flex-start'
};

const defaultRanges: Tuple5<resolution> = [
  { height: 2580, width: 989 },
  { height: 1290, width: 494 },
  { height: 645, width: 247 },
  { height: 322, width: 123 },
  { height: 161, width: 61 }
];

const Responsive = ({ children, style = defaultStyle, windowSizeRanges = defaultRanges }: Props) => {
  const over1200 = useMediaQuery('(min-width:1200px)');
  const from600to1199 = useMediaQuery('(min-width:600px) and (max-width: 1199px)');
  const from350to599 = useMediaQuery('(min-width:350px) and (max-width: 599px)')
  const from250to349 = useMediaQuery('(min-width:250px) and (max-width: 349px)')
  const below250 = useMediaQuery('(max-width:249px)')

  const [resolution, setResolution] = useState<resolution>({ height: 2580, width: 989 });

  useEffect(() => {
    if (over1200)
      setResolution(windowSizeRanges[0]);
    else if (from600to1199)
      setResolution(windowSizeRanges[1]);
    else if (from350to599)
      setResolution(windowSizeRanges[2]);
    else if (from250to349)
      setResolution(windowSizeRanges[3]);
    else if (below250)
      setResolution(windowSizeRanges[4]);
  }, [below250, from250to349, from350to599, from600to1199, over1200, windowSizeRanges]);

  return (
    <div style={{
      height: resolution.height,
      width: resolution.width,
      ...style
    }}>
      {Object.prototype.toString.call(children) === '[object Array]' ? (
        children as React.ReactElement<any, string | React.JSXElementConstructor<any>>[]
      ).map((child: React.ReactElement, id: number) => child)
        : children}
    </div>
  )
}

export default Responsive