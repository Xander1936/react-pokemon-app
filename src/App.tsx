import { useEffect, useState } from 'react';
import './App.css'
import Pokemon from './models/pokemon';
import POKEMONS from './models/mock-pokemon';

function App() {
  // Les Hooks sont toujours appeles a la racine et jamais dans une boucle.
  // Hook d'Etat
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  // Hook d'Effet
  useEffect(() => {
    // Appelle la méthode du hook d'état setPokemons et on lui passe notre liste de pokémons à afficher.
    setPokemons(POKEMONS);
    // On passe un tableau avec un deuxième argument qui evite de recharger notre liste de pokémons a chaque fois sans changement d'etat.
  },[]);

  return (
      <div>
        <h1>Pokédex</h1>
        <p>Il y a {pokemons.length} pokémons dans le Pokédex.</p>
      </div>
  )
}

export default App
