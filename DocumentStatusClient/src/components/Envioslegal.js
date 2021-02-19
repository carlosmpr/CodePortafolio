import React from "react";
import Card from "./reasuble/Card";
import page from "./page.svg";
import legal from "./foreclosure.svg";
const Envioslegal = () => {
  return (
    <div className="row" style={{ marginTop: "15rem" }}>
      <Card
        direcc="/EnviosLegal/soloenvio"
        title="Pagar solo el envio del documento"
        image={page}
      />

      <Card
        direcc="EnviosLegal/Legalizacion"
        title="Pagar solo el envio del documento"
        image={legal}
      />
    </div>
  );
};

export default Envioslegal;
