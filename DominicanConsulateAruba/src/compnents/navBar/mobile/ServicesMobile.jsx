
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import {Link} from 'react-router-dom'

const useStyles = makeStyles({
  root: {
    height: 240,
    flexGrow: 1,
    maxWidth: 400,
  },
});

export default function ServicesMobile() {
  const classes = useStyles();

  return (
    <TreeView
      className={classes.root}
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
    >
      <TreeItem nodeId="1" label="Servicios">
      <Link to={{pathname:"/page", 
    param1: 'pasaporte' }}  style={{textDecoration:'none', color:'black'}}> <TreeItem nodeId="2" label="Pasporte" /> </Link>
        <TreeItem nodeId="3" label="Legal" />
        <TreeItem nodeId="4" label="Actas" />
      </TreeItem>
    
    </TreeView>
  );
}