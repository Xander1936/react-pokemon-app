import { useEffect, useState } from 'react';
import './App.css'
import Pokemon from './models/pokemon';
import POKEMONS from './models/mock-pokemon';

function App() {
  // Les Hooks sont toujours appeles a la racine et jamais dans une boucle.
  // Hook d'Etat: useState()
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  // Hook d'Effet: useEffect(() => {},[ ])
  useEffect(() => {
    // Appelle la méthode du hook d'état setPokemons et on lui passe notre liste de pokémons à afficher.
    setPokemons(POKEMONS);
    // On passe un tableau avec un deuxième argument qui evite de recharger notre liste de pokémons a chaque fois sans changement d'etat.
  },[]);

  return (
      <div>
        {/* <p>Il y a {pokemons.length} pokémons dans le Pokédex.</p> */}
        <h1 className='center'>Pokédex</h1>
        {/* Affiche la liste des Pokémons */}
        <div className="container">
          <div className="row">
            {pokemons.map(({id, name, picture, created}) =>(
              <div className="col s6 m4" key={id}>
                <div className="card horizontal">
                  <div className="card-image">
                    <img src={picture} alt={name} />
                  </div>
                  <div className="card-stacked">
                    <div className="card-content">
                      <p> {name} </p>
                      {/* Récupère la date et la transforme en HTML  */}
                      <p><small> {created.toString()} </small></p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
  )
}

export default App
