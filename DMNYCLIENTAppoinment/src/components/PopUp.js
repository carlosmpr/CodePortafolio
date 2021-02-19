import React, { useState } from "react";
import Formulario from "./Formulario";
import ShowList from "./List";
import "./PopUp.css";
const PopUp = ({ data ,Departamento ,Servicio}) => {
 
  const [contador, setcontador] = useState(0);


  const Tasklist = () => {
    return [...Array(Object.keys(data).length)].map((e, i) => (
      <div className="Task-item" key={i + 1}>{i + 1}</div>
    ));
  };

  return (
    <>
      {contador >= Object.keys(data).length ? (
        <Formulario Departamento={Departamento} Servicio={Servicio} />
      ) : (
        <>
          <div className="Task">{Tasklist()}</div>

          <div key={data[contador]["title"]}>
            <ShowList data={data[contador]["title"]} index={contador} />
            {data[contador]["image"] ? (<img  className="Task-img"src={require(`./img/${data[contador]["image"]}`)} alt={data[contador]["title"]} />):(null) }
            
          </div>
          <button  className="Button"onClick={() => setcontador(contador + 1)}>siguiente</button>
        </>
      )}
    </>
  );
};

export default PopUp;
