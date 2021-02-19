import React from 'react'
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import PcPage from './Smart/pcpage'
import MobilePage from './Smart/MobilePage';

function MyComponent() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  return matches;
}
export default function Page(props) {
  return (
    <div>
      {MyComponent() ? (<PcPage info={props.location.param1} />) : (<MobilePage info={props.location.param1}/>)}
    </div>
  )
}
