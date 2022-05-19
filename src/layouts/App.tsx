import React from 'react';

import styles from './App.module.scss';
import { usePokemonDetails } from '../hooks/usePokemonDetails';

const App: React.FC = () => {
  const [data] = usePokemonDetails(1);
  return (
    <div className={styles.App}>
      <h1 className="text-blue-500">Hi Pokémon</h1>
      <p>{data?.name}</p>
    </div>
  );
};

export default App;
