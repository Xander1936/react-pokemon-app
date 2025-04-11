import { FunctionComponent } from 'react';
import Pokemon from '../models/pokemon';
import './pokemon-card.css'

// Nouveau type props qui devra contenir un objet qui est un pokemon. 
type Props = {
    pokemon: Pokemon;
    // ? indique la variable borderColor est facultative
    borderColor?: string
}

// On lie notre type Props avec notre propriété d'entrée.
// Grâce à la généricité de TypeScript
const PokemonCard: FunctionComponent<Props> = ({pokemon, borderColor = '#009688'}) => {

    return (
        // s12 signifie que sur les petits écrans (s: small), signifie qu'il va afficher 01 pokémon sur l'écran et sur les écrans moyens m-6 (m: medium), il va afficher 02 pokémons et chaque pokémon va prendre la moitié de l'écran: 1/2.
        <div className="col s12 m6">
            <div className="card horizontal" style={{ borderColor: borderColor }}>
                <div className="card-image">
                    <img src={pokemon.picture} alt={pokemon.name} />
                </div>
                <div className="card-stacked">
                    <div className="card-content">
                        <p> {pokemon.name} </p>
                        {/* Récupère la date et la transforme en HTML  */}
                        <p><small> {pokemon.created.toString()} </small></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PokemonCard;
