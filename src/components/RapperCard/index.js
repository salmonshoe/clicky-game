import React from "react";
import "./style.css";

function RapperCard(props) {
  return (
    <div className="card">
      <div className="img-container" onClick={() => props.countRapper(props.id)}>
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  );
}

export default RapperCard;
