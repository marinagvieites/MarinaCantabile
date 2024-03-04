import React from 'react'
import logoproyecto from './assets/logoproyecto.svg'
import { CartWidget } from '../CartWidget/CartWidget'
import "./NavBar.css"

export const NavBar = () => {
    return (
        <nav className='containerNav'>  <div>
            <img src={logoproyecto} width={60} height={60} alt="logo" />
        </div>
            <h3> Nuestros productos </h3>
            <div>
                <button>Partituras</button>
                <button>Cursos Online</button>
                <button>Juegos musicales</button>
                
            </div>
            <CartWidget />
        </nav>
    )
}





