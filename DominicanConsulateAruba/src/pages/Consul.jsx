import React from 'react'
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ConsulPc from './Smart/ConsulPc';
import ConsulMobile from './Smart/ConsulMobile';



function MyComponent() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  return matches;
}
export default function Consul(props) {
  return (
    <div>
      {MyComponent() ? (<ConsulPc />) : (<ConsulMobile />)}
    </div>
  )
}
