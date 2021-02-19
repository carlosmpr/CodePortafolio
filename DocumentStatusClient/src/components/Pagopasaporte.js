import React from "react";
import Paypal from "./reasuble/Paypal";

const Pagopasaporte = () => {
  return (
    <Paypal
      Informacion="Pagar envio de Pasaporte"
      contenido="Pagar el envio de su pasaporte utilizando la tarjeta de credito de las siguientes maneras"
      amount="25.75"
    />
  );
};

export default Pagopasaporte;
