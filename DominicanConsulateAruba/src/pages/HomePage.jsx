import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import SpeedDials from "../compnents/Speeddial";
import Banner from "./HomePageComponents/Banner";
import Servicios from "./HomePageComponents/Servicios";
import News from "./HomePageComponents/News";
import Contact from "./HomePageComponents/Contact";
import { Paper } from "@material-ui/core";
import Logo from '../compnents/aruba.jfif'
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ServiciosMobile from "./HomePageComponents/ServiciosMobile";
import NewsMobile from "./HomePageComponents/NewsMobile";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "15vh",
    marginRight: "3vw",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));


function MyComponent() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  return matches;
}

export default function HomePage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item sm={2} xs={1}>
          <SpeedDials />
        </Grid>

        <Grid item sm={9} xs={10} >
          <Paper style={{padding:35, display:'flex', flexDirection:'column', justifyContent:'center', alignContent:'center', alignItems:'center'}} elevation={5}>
            <img src={Logo} alt={Logo} style={{width:'8vw'}} />
            {MyComponent() ? ( <Typography variant="h4" style={{textAlign:'center'}}>
          Bienvenido a la página oficial del Consulado General de la República Dominicana en Aruba.
          </Typography>): ( <Typography variant="subtitle1" style={{textAlign:'center'}}>
          Bienvenido a la página oficial del Consulado General de la República Dominicana en Aruba.
          </Typography>)}
         
          </Paper>
          <Banner />
          <Typography variant="h3" style={{ marginBottom: 50, marginTop: 35}}>
            Servicios
          </Typography>
          {MyComponent() ? (

            <>
             <Servicios />
         
            </>
          ): (
          <div style={{marginTop:'10vh', marginBottom:'10vh'}}>
          <ServiciosMobile /> </div>)}
         
          
         {MyComponent() ? (
           <>
           <Typography variant="h3" style={{ marginBottom: "5vh", marginTop:-200 }}>
           Noticias Destacadas
         </Typography>
           <News />
           </>
           ) : (
             <>
            <Typography variant="h3" style={{ marginBottom: "5vh"}}>
            Noticias Destacadas
          </Typography>
           <NewsMobile />
           </>
           )}

          <Grid item xs={12}>
            <Typography variant="h3" style={{ marginBottom: "5vh" }}>
              Contacto
            </Typography>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              <Contact />
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
