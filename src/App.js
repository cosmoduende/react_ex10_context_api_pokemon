import logo from './logo.svg';
import './App.css';

import Routes from "./routes";

// importar PokemonsProvider y acomodar dentro del return el tag

import PokemonsProvider from "./context/pokemons/Provider";

function App() {
  return(
    <PokemonsProvider>
      <Routes />
    </PokemonsProvider>
  ); 
}

export default App;
