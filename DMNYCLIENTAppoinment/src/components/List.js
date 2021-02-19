import React from "react";
import "./List.css";

const ShowList = ({ data, index }) => {
  return (
    <div className="Lista">
      <span className="Lista-span">{index + 1}</span>
      <p className="Lista-title">{data}</p>
    </div>
  );
};

export default ShowList;
