import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Envioslegal from "./components/Envioslegal";
import Legalizacion from "./components/Legalizaion";
import Soloenvio from "./components/Soloenvio";
import Pagopasaporte from "./components/Pagopasaporte";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Route path="/" exact component={Landing} />
        <Route path="/pasaporte" exact component={Pagopasaporte} />
        <Route path="/Envioslegal" exact component={Envioslegal} />
        <Route path="/EnviosLegal/soloenvio" exact component={Soloenvio} />
        <Route
          path="/EnviosLegal/Legalizacion"
          exact
          component={Legalizacion}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
