import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import MailIcon from "@material-ui/icons/Mail";
import Data from "../../data/data.json";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Container from '@material-ui/core/Container';
import Slide from '@material-ui/core/Slide';
const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

export default function MobilePage({ info }) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const [data, setdata] = React.useState("");
  const [selectedIndex, setSelectedIndex] = React.useState("");

  const handleListItemClick = (event) => {
    setSelectedIndex(event);
  };

  function save() {
    if (info) {
      console.log("new data");
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

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {data.tipos.map((text, index) => (
          <ListItem button key={text.title} selected={selectedIndex.title === text.title}
          onClick={(event) => handleListItemClick(text)}>
            <ListItemIcon>
               <MailIcon />
            </ListItemIcon>
            <ListItemText primary={text.title} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );
  if (data) {
    return (
      <div style={{ marginTop: "15vh" }}>
          
          {selectedIndex ? ( <Typography  variant="h4" style={{textAlign:'justify', marginBottom:10}}>{selectedIndex.title}</Typography>):( <Typography  variant="h4" style={{textAlign:'justify', marginBottom:10}}>{data.title}</Typography>)}
        <React.Fragment key={"left"}>
          <Button onClick={toggleDrawer("left", true)} variant="contained" color="secondary" style={{marginBottom:10}}>{`Tipos de ${data.title}`}</Button>
          <Drawer
            anchor={"left"}
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
          >
            {list("left")}
          </Drawer>
          
        </React.Fragment>
        <Container maxWidth="sm">
        {selectedIndex ? (
              <>

              <Paper elevation={5} style={{padding:35, marginBottom:35}}>
                <Typography  variant="subtitle1" style={{textAlign:'justify'}}>{selectedIndex.Description}</Typography>
                </Paper>
                <Typography variant="h4" style={{ marginBottom:20}}>Requisitos</Typography>
                <Slide direction="up" in={true} mountOnEnter unmountOnExit timeout={{enter:1000}}>
                  
                  <Paper elevation={5}  variant="subtitle1" style={{ textAlign: "justify" }}>
                    
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
                </Slide>

              </>
            ): (<Paper elevation={5} style={{ padding: 35 }}>
                <Typography variant="subtitle1" style={{ textAlign: "justify" }}>
                  {data.Description}
                </Typography>
              </Paper>) }

        
        </Container>
      </div>
    );
  } else {
    return <div>loading..</div>;
  }
}
