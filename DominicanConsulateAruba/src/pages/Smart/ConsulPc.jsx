import React from "react";

import CardImage from "../../compnents/Card/CardImage";
import Consulimg from "../../static/image/consul.jpeg";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import SpeedDials from "../../compnents/Speeddial";
import Grid from "@material-ui/core/Grid";
import Grow from "@material-ui/core/Grow";
import Logo from '../../compnents/aruba.jfif'


export default function ConsulPc() {
 

  return (
    <Grid container spacing={3}>
      <Grid item xs={2} style={{ marginTop: "30vh", position:'sticky' }}>
        <SpeedDials />
      </Grid>
      <Grow in={true} mountOnEnter unmountOnExit timeout={{ enter: 1000 }}>
      <Grid item xs={8} style={{ marginTop: "15vh" }}>
      <Paper style={{padding:35, display:'flex', justifyContent:'center', alignContent:'center', alignItems:'center', marginBottom:10}} elevation={5}>
            <img src={Logo} alt={Logo} style={{width:'8vw'}} />
          <Typography variant="h4" style={{textAlign:'center'}}>
          Cónsul General en Aruba
          </Typography>
          </Paper>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <CardImage img_={Consulimg} />
          
            <Paper
              elevation={3}
              style={{ width: "100%", height: "50vh", padding: 15 }}
            >
              <Typography variant="h4">Name</Typography>
              <Typography variant="body1">
                s simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
                not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged. It was popularised
                in the 1960s with the release of Letraset sheets containing
                Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsu
              </Typography>
            </Paper>
         
        </div>

        <Paper
          elevation={3}
          style={{
            width: "95%",
            height: "35vh",
            marginTop: "10vh",
            marginBottom: "10vh",
            padding: 25,
          }}
        >
          <Typography variant="body1">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32. The standard chunk of
            Lorem Ipsum used since the 1500s is reproduced below for those
            interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
            Malorum" by Cicero are also reproduced in their exact original form,
            accompanied by English versions from the 1914 translation by H.
            Rackham.
          </Typography>
        </Paper>
      </Grid>
      </Grow>
    </Grid>
  );
}
