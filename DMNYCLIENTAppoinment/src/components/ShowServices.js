import React, { useState } from "react";
import PopUp from "./PopUp";
import ShowList from "./List";
import Formulario from "./Formulario";
const ShowServices = ({ data, Departamento }) => {

 
  const [requirements, setRequirements] = useState("");
  const [TipoServicio, setServicio] = useState("");
  

const checkRequisitos = (info) => {



  if(info.Requisitos){
    setRequirements(info.Requisitos)
    setServicio(info.Titulo)
  }
  
}




  if (requirements) {
    return <PopUp data={requirements} Departamento={Departamento} Servicio={TipoServicio} />;
  }

  
  if(!data.Tipos){
    return <Formulario  Departamento={Departamento} Servicio="" />
  }
  return data.Tipos.map((info, index) => {
    return (
      <div onClick={() => checkRequisitos(info)} key={info.Titulo}>
        
        <ShowList index={index} data={info.Titulo} />
      </div>
    );
  });
};

export default ShowServices;
