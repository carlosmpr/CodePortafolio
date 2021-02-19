import React from "react";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Logo from "../compnents/aruba.jfif";
import Grid from "@material-ui/core/Grid";
import SpeedDials from "../compnents/Speeddial";
import Slide from '@material-ui/core/Slide';

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));
export default function Citas() {
  const classes = useStyles();

  return (

    <>

      <Grid container spacing={3}>
        <Grid item sm={2} xs={1} style={{ marginTop: "15vh" }}>
          <SpeedDials />
        </Grid>
        <Slide direction="up" in={true} mountOnEnter unmountOnExit timeout={{enter:1000}}>
        <Grid item sm={8} xs={10} style={{ marginTop: "15vh" }} >
        <Paper style={{padding:35, display:'flex', flexDirection:'column', justifyContent:'center', alignContent:'center', alignItems:'center', marginBottom:10}} elevation={5}>
            <img src={Logo} alt={Logo} style={{width:'8vw'}} />
          <Typography variant="h4" style={{textAlign:'center'}}>
          Hacer cita por internet
          </Typography>
          </Paper>
         
            <Paper
              elevation={5}
              style={{
                width: "100%",
                height: "80vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              
              <form
                noValidate
                autoComplete="off"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <TextField
                  id="outlined-basic"
                  label="Nombre"
                  variant="standard"
                  style={{ width: "50%", marginBottom: "3vh" }}
                />
                <TextField
                  id="outlined-basic"
                  label="Apellido"
                  variant="standard"
                  style={{ width: "50%", marginBottom: "3vh" }}
                />
                <TextField
                  id="outlined-basic"
                  label="Telefono"
                  variant="standard"
                  style={{ width: "50%", marginBottom: "3vh" }}
                />
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="standard"
                  style={{ width: "50%", marginBottom: "3vh" }}
                />

                <TextField
                  id="datetime-local"
                  label="Next appointment"
                  type="datetime-local"
                  defaultValue="2017-05-24T10:30"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </form>
            </Paper>
         
        </Grid>
        </Slide>
      </Grid>
    </>
  );
}
