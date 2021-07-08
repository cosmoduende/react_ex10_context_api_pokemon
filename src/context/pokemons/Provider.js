import PokemonContext from "./index";

// Mencionar que children es una propiedad por default, refiere a todo lo que tenga el tag
// Mencionar que el atributo value indica lo que quieres que los demás componentes vean a 
// través de él y que si es cambiado desde un lugar va cambiar para todos los componentes

// proceder a crear carpeta "api" y archivo "apiCall" también

import apiCall from "../../api";
import { useState } from "react";

export default function PokemonProvider({children}){
    const [pokemons, setPokemons] = useState([]);
    const [pokemonDetail, setPokemonDetail] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const getPokemons = async () => {
        try{
            setIsLoading(true);
            const pokemonResult = await apiCall({url: "https://pokeapi.co/api/v2/pokemon?limit=100"});
            setPokemons(pokemonResult.results);
        } catch(error){
            setPokemons([]);
        } finally{
            setIsLoading(false);
        }
    };

    const getPokemonDetail = async (id) => {
        if (!id) Promise.reject("EL ID es requerido");
        try{
            setIsLoading(true);
            const pokemonDetail = await apiCall({url: `https://pokeapi.co/api/v2/pokemon/${id}`});
            setPokemonDetail(pokemonDetail);
        } catch(error){
            setPokemonDetail({});
        } finally{
            setIsLoading(false);
        }
    };

    return(
        <PokemonContext.Provider value={{getPokemons, pokemons, getPokemonDetail, pokemonDetail, isLoading}}>
            {children}
        </PokemonContext.Provider>
    );
};