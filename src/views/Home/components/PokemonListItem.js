
import {Link} from "react-router-dom";

export default function PokemonListItem({name, url}){
    const getId = () => url.split("/")[6];
    
    return(
        <div style={{margin:50, backgroundColor:"#cecece", float:"left", borderRadius: 50}}>
        <p>{name}</p>
        <button>
            <Link to={`/pokemon/${getId()}`}>Ver detalle</Link>
        </button>
        </div>
    )
}