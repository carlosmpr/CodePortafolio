import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';

import Typography from '@material-ui/core/Typography';




const useStyles = makeStyles((theme) => ({
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  paper: {
    paddingBottom: 50,
  },
  list: {
    marginBottom: theme.spacing(2),
  },
  subheader: {
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    
    top: 'auto',
    bottom: 0,
  },
  grow: {
    flexGrow: 1,
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <div style={{marginTop:100}}>
      <AppBar position="fixed" color="dafault" className={classes.appBar} style={{padding:25, display:'flex', alignItems:'center', backgroundColor:'#f2f5f8'}}>
          <Typography variant='caption text'>
          <span style={{fontWeight:'bold'}}> Copyright</span>© 2021 <span style={{fontWeight:'bold'}}>ARCHITS</span> All Rights Reserved
          </Typography>
        </AppBar>
      </div>
    </React.Fragment>
  );
}
