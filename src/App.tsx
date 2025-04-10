import React, { FunctionComponent } from 'react';
import PokemonList from './pages/pokemon-list';
import './App.css'
// import { useEffect, useState } from 'react';
// import Pokemon from './models/pokemon';
// import POKEMONS from './models/mock-pokemon';

const App: FunctionComponent = () => {
  
  return (
      <div>
        <PokemonList />
      </div>
  )
}

export default App;
