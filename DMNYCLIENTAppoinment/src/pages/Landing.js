import React from "react";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import "./Landing.css";

const Landing = () => (
  <div className="Landing">
    <Link to="/services" className="Menu-Start">
      <Card title="Hacer cita en linea" />
    </Link>
    {/* <Card title="Para consultar estatus del pasaporte" reference="status" /> */}
  </div>
);

export default Landing;
