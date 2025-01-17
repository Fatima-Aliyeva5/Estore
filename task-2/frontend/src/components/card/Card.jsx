import React from "react";
import "./Card.scss";

const Card = ({product}) => {
  return (
    <div className="card-container card ">
     <div className="card-image">
     <img
        src={product?.image}
        alt={product?.title}
      />
     </div>
    
      <div className="card-content">
      <div className="card-rate">
        <i className="fa-regular fa-star" style={{color: "#FFD43B"}}></i>
        <i className="fa-regular fa-star" style={{color: "#FFD43B"}}></i>
        <i className="fa-regular fa-star" style={{color: "#FFD43B"}}></i>
        <i className="fa-regular fa-star" style={{color: "#9e9e9e"}}></i>
        <i className="fa-regular fa-star" style={{color: "#9e9e9e"}}></i>
      </div>
      <div className="card-title">
        <h3>{product?.title}</h3>
      </div>
      <div className="card-category">
        <p>{product?.category}</p>
      </div>
      <div className="card-price">
        <span>{product?.price}</span>
      </div>
      </div>
        
    </div>
  );
};

export default Card;
