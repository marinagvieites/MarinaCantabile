import React, { useState } from 'react';
import "./Item.css";

/*
export const Item = ({ name, img, stock, price, category }) => {

  return (<div className="card">
    <h3> {name} </h3>
    <img className="card--img" src={img} />
    <p> Precio: $ {price} </p>
    <p> Stock: {stock} </p>
    <p> Categoría: {category} </p>
    <button className="card--more"> Ver más </button>
  </div>)
}
*/

 export const Item = ({ producto }) => {
  return (
    <div className="card">
      <h3 className="card--title">{producto.name}</h3>
      <img
        className="card--img" width={100} height={100} src={producto.img} alt={producto.name}
      />
      <div className="card--price">$ {producto.price}</div>
      {/* <ItemCount stock={producto.stock} /> */}
      < DescriptionButton description={producto.description} />
    </div>
  );
  function DescriptionButton ({ description })  {
    const [descriptionState, setDescriptionState] = useState(0);
    const actionMore = () => {
      setDescriptionState(1);
    };
    const descriptionComponent =  (descriptionState >=1) ? <div className="descriptionContent">{description}</div> : <div className="descriptionContent"></div>;
    return (
      <div className= "descriptionButton">
       {descriptionComponent}
        <button className="card--more" onClick={actionMore}> Ver Más </button>
      </div>
    )
    
  }
} 