import React from "react";
import Paypal from "./reasuble/Paypal";

const Soloenvio = () => {
  return (
    <Paypal
      Informacion="Pagar soloe el envio"
      contenido="pagar solo el envio de su documento utilizando la tarjeta de credito de las siguientes maneras"
      amount="40.05"
    />
  );
};

export default Soloenvio;
