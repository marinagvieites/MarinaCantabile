import React from 'react';
import { Link } from "react-router-dom";
import logoproyecto from './assets/logoproyecto.svg';
import { CartWidget } from '../CartWidget/CartWidget';
import "./NavBar.css";

export const NavBar = () => {
    return (
        <nav className='containerNav'> 
            <Link to="/"> 
                <div> 
                    <img src={logoproyecto} width={60} height={60} alt="logo" /> 
                </div>
            </Link>
            <h3>  Tienda Online </h3>
            <ul className="containerNav--ul">
                <Link to="category/partituras"> Partituras </Link>
                <Link to="category/clases"> Clases </Link>
                <Link to="category/instrumentos"> Instrumentos </Link>
            </ul>
            <CartWidget />
        </nav>
    )
}





