import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PhoneIcon from "@material-ui/icons/Phone";
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";
import ThumbUp from "@material-ui/icons/ThumbUp";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import MapIcon from "@material-ui/icons/Map";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import BasicTable from "./Table";
import BorderColorIcon from '@material-ui/icons/BorderColor';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    "aria-controls": `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function Contact() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
          <Tab label="Telefonos" icon={<PhoneIcon />} {...a11yProps(0)} />
          <Tab label="Horarios" icon={<AccessTimeIcon />} {...a11yProps(1)} />
          <Tab label="Direccion" icon={<MapIcon />} {...a11yProps(2)} />
          <Tab label="Redes Sociales" icon={<ThumbUp />} {...a11yProps(3)} />
          <Tab label="Eventos" icon={<ShoppingBasket />} {...a11yProps(4)} />
          <Tab label="Formulario" icon={<BorderColorIcon />} {...a11yProps(5)} />
          <Tab label="Mensaje de Hoy" icon={<ThumbUp />} {...a11yProps(6)} />
        </Tabs>
      </AppBar>
      <TabPanel
        value={value}
        index={0}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Telefono: 000-000-0000, fax:000-000-0000 , whatsapp:000-000-0000{" "}
        <Button variant="contained" color="primary">
          Call Now
        </Button>
      </TabPanel>
      <TabPanel
        value={value}
        index={1}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Horarios laborables: Lunes a Viernes 8:00 AM - 4:00PM
      </TabPanel>
      <TabPanel
        value={value}
        index={2}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.{" "}
        <Button variant="contained" color="primary">
          Como llegar
        </Button>
      </TabPanel>
      <TabPanel
        value={value}
        index={3}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button> <FacebookIcon style={{ fontSize: 60,  color:'blue' }}/></Button>
        <Button> <InstagramIcon style={{ fontSize: 60,  color:'pink' }}/></Button>
        <Button> <TwitterIcon style={{ fontSize: 60,  color:'lightblue' }}/></Button>
        <Button> <YouTubeIcon style={{ fontSize: 60,  color:'red' }}/></Button>
        
      </TabPanel>
      <TabPanel
        value={value}
        index={4}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <BasicTable />
      </TabPanel>
      <TabPanel
        value={value}
        index={5}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
         Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.{" "}
        <Button variant="contained" color="primary">
          Descargar formulario
        </Button>
      </TabPanel>
      <TabPanel
        value={value}
        index={6}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
         Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.{" "}
      </TabPanel>
    </div>
  );
}
