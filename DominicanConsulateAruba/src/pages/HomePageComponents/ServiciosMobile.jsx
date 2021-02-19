import React from "react";
import Pape from "../../compnents/Paper/Pape";
import Passport from "../../static/icons/passport.svg";
import Legal from "../../static/icons/balance.svg";
import Actas from "../../static/icons/google-docs.svg";
import Grid from "@material-ui/core/Grid";


export default function ServiciosMobile() {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => {
    console.log(window.pageYOffset);
    if (window.pageYOffset >= 150.5999984741211) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <Grid item xs={12}>
      <div
        style={{
          height: "25vh",
          width: "100%",
          display: "flex",
          flexDirection:'column',
          justifyContent: "space-around",
        }}
      >
        {isVisible ? serviciosShow() : null}
      </div>
    </Grid>
  );
}

const serviciosShow = () => {
  return (
    <>
      <Grid item xs={12} style={{marginBottom:10}}>
        <Pape img_={Passport} title_={"Pasaporte"} data_={"pasaporte"}/>
      </Grid>

      <Grid item xs={12} style={{marginBottom:10}}>
        <Pape img_={Legal} title_={"Poderes"} data_={"legal"}/>
      </Grid>

      <Grid item xs={12} style={{marginBottom:10}}>
        <Pape img_={Actas} title_={"Actas"}  data_={"acta"}/>
      </Grid>

      <Grid item xs={12} style={{marginBottom:10}}>
        <Pape img_={Actas} title_={"Actas"} data_={"acta"}/>
      </Grid>
    </>
  );
};
