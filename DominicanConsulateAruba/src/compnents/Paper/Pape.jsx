import Typography from "@material-ui/core/Typography";
import React from "react";
import Grow from "@material-ui/core/Grow";
import { Paper } from "@material-ui/core";
import {Link} from 'react-router-dom'





export default function Pape({ img_, title_, data_ }) {
  const newTo = { 
    pathname:"/page", 
    param1: data_ 
  };
  return (
  <Link to={newTo}  style={{textDecoration:'none', color:'black'}}>
    <Grow in={true} mountOnEnter unmountOnExit timeout={{ enter: 1300 }}>
      
      <Paper
        style={{
          width: "100%",
          height: "10vh",
          display: "flex",
          
          justifyContent: "center",
          alignItems: "center",
        }}

        elevation={5}
      >
        
          <img src={img_} alt={img_} style={{ width: "8vw"}} />
        

        <Typography variant="h4">{title_}</Typography>
      </Paper>
     
    </Grow>
     </Link>
  );
}
