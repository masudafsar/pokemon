import React from 'react';
import styles from './PokemonCard.module.scss';
import { Pokemon } from '../../types/entity/pokemon';

interface Props {
    pokemon: Pokemon
}

export const PokemonCard: React.FC<Props> = ({ pokemon }) => (
  <div className={styles.Card}>
    <div className={styles.Id}>{`#${pokemon.id}`}</div>
    <div className={styles.Name}>{pokemon.name}</div>
    <div className={styles.Image}>
      <img src={pokemon.sprites.other['official-artwork'].front_default} alt={pokemon.name} />
    </div>
    {pokemon.types && (
    <ul className={styles.Types}>
      {pokemon.types.map((type) => (
        <li
          key={type.type.name}
          className={styles.Type}
        >
          {type.type.name}
        </li>
      ))}
    </ul>
    )}
  </div>
);
