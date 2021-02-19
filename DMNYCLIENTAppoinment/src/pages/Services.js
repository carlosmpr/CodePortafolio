import React, { useState } from "react";
import Card from "../components/Card";
import data from "./data.json";
import ShowServices from "../components/ShowServices";

const servicios = [
  "Pasaporte",
  "Legal",
  "Traducciones",
  "Apostillas",
  "Visas",
  "Doble Ciudadania",
  "Proteccion",
  "Asuntos Comunitarios"
];

const Services = () => {
  const [select, setselect] = useState("");

  if (select) {
    return <ShowServices data={data[`${select}`]} Departamento={select}/>;
  }
  return (
    <div className="Landing">
    
      {servicios.map((servicio) => (
        <div onClick={() => setselect(servicio)} key={servicio}>
          
          <Card title={servicio} />
        </div>
      ))}
    </div>
  );
};

export default Services;
