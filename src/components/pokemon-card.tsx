import { FunctionComponent, useState } from 'react';
import Pokemon from '../models/pokemon';
import './pokemon-card.css'
import formatDate from '../helpers/format-date';
import formatType from '../helpers/format-type';

// Nouveau type props qui devra contenir un objet qui est un pokemon. 
type Props = {
    pokemon: Pokemon;
    // ? indique la variable borderColor est facultative
    borderColor?: string
}

// On lie notre type Props avec notre propriété d'entrée.
// Grâce à la généricité de TypeScript
const PokemonCard: FunctionComponent<Props> = ({pokemon, borderColor = '#009688'}) => {

    const [color, setColor] = useState<string>();

    const showBorder = () => {
        setColor(borderColor);
    }

    const hideBorder = () => {
        setColor('#f5f5f5'); // On remet la bordure en gris.
    }

    return (
        // s12 signifie que sur les petits écrans (s: small), signifie qu'il va afficher 01 pokémon sur l'écran et sur les écrans moyens m-6 (m: medium), il va afficher 02 pokémons et chaque pokémon va prendre la moitié de l'écran: 1/2.
        <div className="col s12 m6" onMouseEnter={showBorder} onMouseLeave={hideBorder}>
            <div className="card horizontal" style={{ borderColor: color }}>
                <div className="card-image">
                    <img src={pokemon.picture} alt={pokemon.name} />
                </div>
                <div className="card-stacked">
                    <div className="card-content">
                        <p> {pokemon.name} </p>
                        {/* Computed property ou Propriétés calculées pour la date et le type de pokemon (affiche une couleur differente selon le type de pokemon) */}
                        <p><small> {formatDate(pokemon.created)} </small></p>
                        {pokemon.types.map(type => (
                            <span key={type} className={formatType(type)} > {type} </span>
                        ))}
                        {/* Récupère la date et la transforme en HTML  */}
                        {/* <p><small> {pokemon.created.toString()} </small></p> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PokemonCard;
