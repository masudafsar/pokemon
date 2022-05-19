import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styles from './App.module.scss';
import { PokemonDetailsPage } from '../pages/PokemonDetailsPage';

const App: React.FC = () => (
  <div className={styles.App}>
    <Router>
      <Routes>
        <Route path="/" element={<PokemonDetailsPage showRandomPokemon />} />
        <Route path="/:id" element={<PokemonDetailsPage />} />
      </Routes>
    </Router>
  </div>
);

export default App;
