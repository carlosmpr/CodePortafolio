import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import {Link} from 'react-router-dom'
import Avatar from '@material-ui/core/Avatar';
import Logo from './aruba.jfif'
import SimpleMenu from './navBar/Services';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import MobileMenu from './navBar/mobile/MobileMenu';



function MyComponentMedium() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  return matches;
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  
  },
  menuButton: {
    marginRight: theme.spacing(2),
    backgroundColor:"white"
  },
  title: {
    flexGrow: 1,
  },

  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="white">
        <Toolbar>

          <IconButton edge="start" className={classes.menuButton} color="white" aria-label="menu">
            <Link to='/'> <Avatar alt="Remy Sharp" src={Logo} className={classes.large} /></Link>
          
          </IconButton>
         


          {MyComponentMedium()  ?  ( <Typography variant="h5" className={classes.title}>
            CONSULADO DOMINICANO EN ARUBA
          </Typography>): ( <Typography variant="subtitle1" className={classes.title}>
            CONSULADO DOMINICANO EN ARUBA
          </Typography>)}
         
          
          {MyComponentMedium()  ?  ( <>
            <Link to='/Consul' style={{textDecoration:'none', color:'black'}}> <Button color="inherit">Consul</Button></Link>
          <Link to='/Faq'  style={{textDecoration:'none', color:'black'}}> <Button color="inherit">Faq</Button></Link>
          
         <SimpleMenu />
          <Link to="/Citas"  style={{textDecoration:'none', color:'black'}}>
          <Button color="inherit">Citas</Button>
          </Link>
          <Link to='/Comentarios'  style={{textDecoration:'none', color:'black'}}><Button color="inherit">Comentarios</Button></Link>
          
          
          </>
          ): ( <MobileMenu />)}
         
        </Toolbar>
      </AppBar>
    </div>
  );
}