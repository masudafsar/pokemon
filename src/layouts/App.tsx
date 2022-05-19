import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { PokemonDetailsPage } from '../pages/PokemonDetailsPage';

const App: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<PokemonDetailsPage showRandomPokemon />} />
      <Route path="/:id" element={<PokemonDetailsPage />} />
    </Routes>
  </Router>
);

export default App;
