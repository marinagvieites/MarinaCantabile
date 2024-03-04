import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer bienvenida="Bienvenidos a la tienda online de 🎹marinacantabile🎹" />
    </div>

  );
}

export default App;
