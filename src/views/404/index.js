
import PokemonContext from "../../context/pokemons";
import {useContext} from "react";

export default function FourOFour(){
    const {pokemons} = useContext(PokemonContext);
    console.log(pokemons);

    return(
        <div>
            <h2>Perdona, no encontré lo que estabas buscando</h2>
        </div>
    );
}