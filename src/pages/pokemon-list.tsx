import { FunctionComponent, useEffect, useState } from "react";
import Pokemon from "../models/pokemon";
import POKEMONS from "../models/mock-pokemon";
import PokemonCard from "../components/pokemon-card";


const PokemonList: FunctionComponent = () => {
  
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);

    useEffect(() => {
        setPokemons(POKEMONS);
    },[]);

    return (
        <div>
            <h1 className="center">Pokédex</h1>
            <div className="container">
                <div className="row">
                    {pokemons.map(pokemon => (
                        // On utilise le composant PokemonCard en lui passant une prop representant le pokémon à afficher.
                        <PokemonCard key={pokemon.id} pokemon={pokemon} borderColor="red" />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default PokemonList;

// Les Hooks sont toujours appeles a la racine et jamais dans une boucle.
  // Hook d'Etat: useState()
  // const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  // // Hook d'Effet: useEffect(() => {},[ ])
  // useEffect(() => {
  //   // Appelle la méthode du hook d'état setPokemons et on lui passe notre liste de pokémons à afficher.
  //   setPokemons(POKEMONS);
  //   // On passe un tableau avec un deuxième argument qui evite de recharger notre liste de pokémons a chaque fois sans changement d'etat.
  // },[]);