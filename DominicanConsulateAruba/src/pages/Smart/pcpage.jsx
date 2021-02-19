import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Slide from "@material-ui/core/Slide";
import FolderOpenOutlinedIcon from "@material-ui/icons/FolderOpenOutlined";
import DoneOutlineIcon from "@material-ui/icons/DoneOutline";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Logo from "../../compnents/aruba.jfif";
import Data from "../../data/data.json";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    marginTop: "15vh",
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    marginTop: "12vh",
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));
export default function PcPage({ info }) {
  const [data, setdata] = React.useState("");
  const [selectedIndex, setSelectedIndex] = React.useState("");

  function save() {
    if (info) {
      console.log("new data");
      console.log(info);
      const value = info;
      setdata(Data[`${value}`]);
      localStorage.setItem("rememberMe", info);
    } else if (localStorage.getItem("rememberMe")) {
      console.log("remember");

      const value = localStorage.getItem("rememberMe");

      setdata(Data[`${value}`]);
    }
  }
  React.useEffect(() => {
    save();
  });
  const classes = useStyles();

  const handleListItemClick = (event) => {
    setSelectedIndex(event);
  };
  console.log();

  if (data) {
    return (
      <div className={classes.root}>
        <CssBaseline />

        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <img src={Logo} alt="Logo" style={{ width: "15vw" }} />
          <ListItem>
            <Typography variant="h4">{data.title}</Typography>
          </ListItem>
          <div className={classes.drawerContainer}>
            <List>
              {data.tipos.map((info, index) => {
                console.log(index);

                return (
                  <>
                    <ListItem
                      button
                      key={info.title}
                      selected={selectedIndex.title === info.title}
                      onClick={(event) => handleListItemClick(info)}
                    >
                      <ListItemIcon>
                        {" "}
                        <FolderOpenOutlinedIcon />
                      </ListItemIcon>
                      <ListItemText primary={info.title} />
                    </ListItem>
                    <Divider />
                  </>
                );
              })}
            </List>
          </div>
        </Drawer>
        <Slide
          direction="up"
          in={true}
          mountOnEnter
          unmountOnExit
          timeout={{ enter: 1000 }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
          {selectedIndex ? ( <Typography  variant="h4" style={{textAlign:'justify', marginTop:'15vh',  marginBottom:-70}}>{selectedIndex.title}</Typography>):( <Typography  variant="h4" style={{textAlign:'justify',  marginTop:'15vh', marginBottom:-70}}>{data.title}</Typography>)}
            <main className={classes.content}>
              <Toolbar />
              {selectedIndex ? (
                <>
                  <Paper elevation={5} style={{ padding: 35 }}>
                    <Typography variant="h5" style={{ textAlign: "justify" }}>
                      {selectedIndex.Description}
                    </Typography>
                  </Paper>
                  <Slide
                    direction="up"
                    in={true}
                    mountOnEnter
                    unmountOnExit
                    timeout={{ enter: 1000 }}
                  >
                    <Grid
                      item
                      xs={12}
                      style={{ marginLeft: "10px", marginTop: "20px" }}
                    >
                       <Typography variant="h4" style={{ marginBottom:20}}>Requisitos</Typography>
                      <Paper elevation={5}>
                        
                        <List component="nav" aria-label="main mailbox folders">
                          {selectedIndex.Requisitos.map((info) => {
                            return (
                              <>
                             
                                <ListItem button>
                                  <ListItemIcon>
                                    <DoneOutlineIcon />
                                  </ListItemIcon>
                                  <ListItemText primary={info.title} />
                                </ListItem>
                                <Divider />
                              </>
                            );
                          })}
                        </List>
                      </Paper>
                    </Grid>
                  </Slide>
                </>
              ) : (
                <Paper elevation={5} style={{ padding: 35 }}>
                  <Typography variant="h5" style={{ textAlign: "justify" }}>
                    {data.Description}
                  </Typography>
                </Paper>
              )}
            </main>
          </div>
        </Slide>
      </div>
    );
  } else {
    return <div>loading..</div>;
  }
}
