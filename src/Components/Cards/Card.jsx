import React from "react";
import "./Card.css";

const Card = ({ img, title, info }) => {
  return (
    <div className="card">
      <div className="image">
        <img src={img} alt="br" />
      </div>
      <h2>{title}</h2>
      <p>{info}</p>
    </div>
  );
};

export default Card;
