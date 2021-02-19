import React, { Fragment } from "react";
import passport from "./passport.svg";
import Legal from "./case.svg";
import Card from "./reasuble/Card";

const Landing = () => {
  return (
    <Fragment>
      <div className="row" style={{ marginTop: "15rem" }}>
        <Card
          direcc="/pasaporte"
          title="Pagar envio de pasaporte"
          image={passport}
        />
        <Card
          direcc="/Envioslegal"
          title="Pagar envio de Documento Legal"
          image={Legal}
        />
      </div>
    </Fragment>
  );
};

export default Landing;
