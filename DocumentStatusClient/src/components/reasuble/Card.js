import React from "react";
import { Link } from "react-router-dom";

const Card = props => {
  return (
    <Link to={props.direcc}>
      <div className="col s12 m4">
        <div className="card">
          <div className="card-image">
            <img src={props.image} style={{ width: "100%" }}></img>
          </div>
          <div className="card-content">
            <p>{props.title}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
