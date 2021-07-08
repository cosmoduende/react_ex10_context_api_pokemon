
// mencionar que aquí hacemos uso de fragment "<>" para evitar que se rendericen muchos divs

import PokemonListItem from "./PokemonListItem";

export default function PokemonList({pokemons}){
    return(
        <div>
        {pokemons?.map((pokemon, index) => <PokemonListItem key={index} {...pokemon}/>)}
        </div>
    );
}
