
import { useEffect } from "react";
import {useParams} from "react-router-dom";

import PokemonContext from "../../context/pokemons";
import {useContext} from "react";
// dejar pokestats para el final si da tiempo
import PokeStats from "./components/PokeStats";

export default function PokeDetail(){
    const {id} = useParams();
    const {getPokemonDetail, pokemonDetail, isLoading} = useContext(PokemonContext);

    // Cada que se cambie la pantalla o cada que cambie el id solicitar el detalle del pokemon
    
    useEffect(() => {
        getPokemonDetail(id).catch(null);
    }, []);

    if(isLoading){
        return(<p>Cargando pokemon...</p>)
    }

    return(
        <div style={{margin:50}}>
             <h3 style={{marginTop:30, marginBottom:15}}>Info General</h3>
            <p>{`Name: ${pokemonDetail?.name}`}</p>
            <p>{`Peso: ${pokemonDetail?.weight} kgs.`}</p>
            <p>{`Altura: ${pokemonDetail?.height} cms.`}</p>
            <div style={{float:"left"}}>
                <h3 style={{marginTop:30, marginBottom:15}}>Habilidades</h3>
                <PokeStats stats={pokemonDetail?.stats ?? []}/>
            </div>
            <div style={{float:"left"}}>
                <img style={{width:300}} src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`}  />
            </div>
        </div>
    );
}