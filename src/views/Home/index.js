
// importar el Hook de useContext que va permitir buscar el contexto y usarlo dentro del componente
// usar useEffect para ejecutar la función de alert del Provider

import {useContext, useEffect} from "react";
import PokemonContext from "../../context/pokemons";
import PokemonList from "./components/PokemonList";

export default function Home(){
    const {getPokemons, pokemons, isLoading} = useContext(PokemonContext);

    useEffect(() => {
        getPokemons().catch(null);
    }, []);
    
    if(isLoading){
        return (<p>Cargando resultados...</p>);
    }

    return(
        <div>
            <h1>Bienvenido, este es el Home</h1>
            <PokemonList pokemons={pokemons}/>
        </div>
    );
}