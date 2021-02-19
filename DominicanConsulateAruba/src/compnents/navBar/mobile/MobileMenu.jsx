import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

export default function MobileMenu() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
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
        <ListItem>
          <Link to="/Consul" style={{ textDecoration: "none", color: "black" }}>
            {" "}
            <Button color="inherit">Consul</Button>
          </Link>
        </ListItem>
        <Link
          to={{ pathname: "/page", param1: "pasaporte" }}
          style={{ textDecoration: "none", color: "black" }}
        >
          {" "}
          <Button color="inherit">Pasaporte</Button>
        </Link>

        <ListItem>
          <Link to="/Faq" style={{ textDecoration: "none", color: "black" }}>
            {" "}
            <Button color="inherit">Faq</Button>
          </Link>
        </ListItem>

        <ListItem>
          <Link to="/Citas" style={{ textDecoration: "none", color: "black" }}>
            <Button color="inherit">Citas</Button>
          </Link>
        </ListItem>

        <ListItem>
          <Link
            to="/Comentarios"
            style={{ textDecoration: "none", color: "black" }}
          >
            <Button color="inherit">Comentarios</Button>
          </Link>
        </ListItem>
      </List>
      <Divider />
      <List>
        {["Otro", "otro", "otro"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <React.Fragment key={"left"}>
        <Button onClick={toggleDrawer("left", true)}>
          <MenuIcon />
        </Button>
        <SwipeableDrawer
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
          onOpen={toggleDrawer("left", true)}
        >
          {list("left")}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}
