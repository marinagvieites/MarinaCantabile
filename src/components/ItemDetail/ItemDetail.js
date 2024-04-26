import React from 'react';
import { ItemCount } from '../ItemCount/ItemCount';



export const ItemDetail = ({prod}) => {
  //{ id, name, img, category, description, price, stock };
  //prod = prod.prod;
  return (
    <article className="CardItem">
      <header className="Header">
        <h2 className="ItemHeader"> {prod.name} </h2>
      </header>
      <picture> <img src={prod.img} alt={prod.name}  width={100} height={100} className="ItemImg" /> </picture>
      <section>
        <p className="Info"> Categoría: {prod.category} </p>
        <p className="Info"> Descripción: {prod.description} </p>
        <p className="Info"> Precio: ${prod.price} </p>
      </section>
      <footer className="ItemFooter">
        <ItemCount initial={1} stock={prod.stock} onAdd={(quantity) => console.log('Cantidad agregada')}/>
      </footer>
    </article>
  )
  
}
