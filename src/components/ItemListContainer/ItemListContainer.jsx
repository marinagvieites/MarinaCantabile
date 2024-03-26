import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { products } from "../../data/data";
import { ItemList } from "../ItemList/ItemList";
import "./ItemListContainer.css";

export const ItemListContainer = (props) => {
  const { idCategory } = useParams();
  console.log(idCategory);

  const [myProducts, setMyProducts] = useState([]);
  const myPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1000)

  });
  useEffect(() => {
    myPromise.then((data) => {
      setMyProducts(
        idCategory
          ? data.filter((prod) => prod.category === idCategory)
          : data
      );
    });

  }, [idCategory]);







  return (
    <div className="container--cards">
      <ItemList products={myProducts} />
      <h1>{props.bienvenida}</h1>
    </div>
  )
}
