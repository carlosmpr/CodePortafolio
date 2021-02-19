import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import StarIcon from "@material-ui/icons/Star";
import SpeedDials from "../compnents/Speeddial";
import Slide from "@material-ui/core/Slide";
import Logo from '../compnents/aruba.jfif'
import Paper from "@material-ui/core/Paper";
const useStyles = makeStyles((theme) => ({
  root: {
    
    width: "100%",

    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
}));

export default function Comments() {
  const classes = useStyles();

  return (
    <>
      <Grid container spacing={3}>
        <Grid item sm={2} xs={1} style={{ marginTop: "15vh" }}>
          <SpeedDials />
        </Grid>
        <Slide
          direction="up"
          in={true}
          mountOnEnter
          unmountOnExit
          timeout={{ enter: 1000 }}
        >
          <Grid item sm={8} xs={10} style={{marginTop:'15vh'}}>
          <Paper style={{padding:35, display:'flex', flexDirection:'column', justifyContent:'center', alignContent:'center', alignItems:'center', marginBottom:10}} elevation={5}>
            <img src={Logo} alt={Logo} style={{width:'8vw'}} />
          <Typography variant="h4" style={{textAlign:'center'}}>
          Comentarios
          </Typography>
          </Paper>
            <List className={classes.root}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <ListItemText
                  primary="Brunch this weekend?"
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        Ali Connors
                      </Typography>
                      {" — Excelente servicio"}
                      <StarIcon
                        style={{ backgroundColor: "orange", color: "white" }}
                      />
                      <StarIcon
                        style={{ backgroundColor: "orange", color: "white" }}
                      />
                      <StarIcon
                        style={{ backgroundColor: "orange", color: "white" }}
                      />
                      <StarIcon
                        style={{ backgroundColor: "orange", color: "white" }}
                      />
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar
                    alt="Travis Howard"
                    src="/static/images/avatar/2.jpg"
                  />
                </ListItemAvatar>
                <ListItemText
                  primary="Summer BBQ"
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        to Scott, Alex, Jennifer
                      </Typography>
                      {" — Dure mas de 5 horas esperando por el pasaporte"}
                      <StarIcon />
                      <StarIcon />
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                </ListItemAvatar>
                <ListItemText
                  primary="Oui Oui"
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        Sandra Adams
                      </Typography>
                      {" — Excelente servicio, muy atentos"}
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                    </React.Fragment>
                  }
                />
              </ListItem>

              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <ListItemText
                  primary="Brunch this weekend?"
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        Ali Connors
                      </Typography>
                      {" — Excelente servicio"}
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar
                    alt="Travis Howard"
                    src="/static/images/avatar/2.jpg"
                  />
                </ListItemAvatar>
                <ListItemText
                  primary="Summer BBQ"
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        to Scott, Alex, Jennifer
                      </Typography>
                      {" — Dure mas de 5 horas esperando por el pasaporte"}
                      <StarIcon />
                      <StarIcon />
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                </ListItemAvatar>
                <ListItemText
                  primary="Oui Oui"
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        Sandra Adams
                      </Typography>
                      {" — Excelente servicio, muy atentos"}
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                    </React.Fragment>
                  }
                />
              </ListItem>

              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <ListItemText
                  primary="Brunch this weekend?"
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        Ali Connors
                      </Typography>
                      {" — Excelente servicio"}
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar
                    alt="Travis Howard"
                    src="/static/images/avatar/2.jpg"
                  />
                </ListItemAvatar>
                <ListItemText
                  primary="Summer BBQ"
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        to Scott, Alex, Jennifer
                      </Typography>
                      {" — Dure mas de 5 horas esperando por el pasaporte"}
                      <StarIcon />
                      <StarIcon />
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                </ListItemAvatar>
                <ListItemText
                  primary="Oui Oui"
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        Sandra Adams
                      </Typography>
                      {" — Excelente servicio, muy atentos"}
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                      <StarIcon />
                    </React.Fragment>
                  }
                />
              </ListItem>
            </List>
          </Grid>
        </Slide>
      </Grid>
    </>
  );
}
