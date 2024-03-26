import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar  />
      <Routes>
        <Route path='/' element={<ItemListContainer bienvenida="Bienvenidos a la tienda online de 🎹marinacantabile🎹" />} />
        <Route path="category/:idCategory" element={<ItemListContainer bienvenida="Bienvenidos a la tienda online de 🎹marinacantabile🎹" />} />
        <Route path="item/:idItem" element={<ItemDetailContainer />} />
        
      </Routes>
      </BrowserRouter>
      
      <div className='pepe'></div>

    
  
  </div> );
}


export default App;
