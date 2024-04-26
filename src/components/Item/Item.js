import React, { useState } from 'react';
import "./Item.css";
import { ItemCount } from '../ItemCount/ItemCount';
import { ItemDetailContainer } from '../ItemDetailContainer/ItemDetailContainer';
import { Link } from "react-router-dom";
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
      <ItemCount stock={producto.stock} onAdd={onAdd} initial={1}/> 
      < DescriptionButton description={producto.description} />
    </div>
  );
  function onAdd(){
    console.log('Agregar al carrito');
  }
  function DescriptionButton ({ description })  {
    const [descriptionState, setDescriptionState] = useState(0);
    const actionMore = () => {
      setDescriptionState(1);
    };
    return (
      <div className= "descriptionButton">
        <Link to={`/item/${producto.id}`}> Ver detalle </Link>
      </div>
    )
    
  }
} 