import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { products } from "../../data/data";
import { ItemDetail } from "../ItemDetail/ItemDetail";

export const ItemDetailContainer = () => {
    const { idItem } = useParams();
    console.log(idItem);

    /*
    const [myProduct, setMyProduct] = useState({});
    const myPromise = new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 1500)
    });
    useEffect (() => {
        myPromise.then((data) => {
            setMyProduct(data.find((prod) => prod.id === idItem));
        });
       
    }, [idItem]);
*/
    let myProduct;
    for (let prod of products){
        if (prod.id == idItem){
            myProduct = prod;
            break;
        }
    }

  return (
    <div>
        <ItemDetail prod={myProduct} /> </div>
  );
}
