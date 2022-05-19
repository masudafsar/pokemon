import React, { MouseEventHandler } from 'react';
import cn from 'classnames';
import styles from './PokemonFrontCard.module.scss';
import { Pokemon } from '../../../types/entity/pokemon';

interface Props {
    pokemon: Pokemon;
    onClick?: () => void;
}

export const PokemonFrontCard: React.FC<Props> = ({ pokemon, onClick }) => (
  <div className={styles.Card} onClick={onClick} aria-hidden="true">
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
          className={cn(styles.Type, styles[type.type.name])}
        >
          {type.type.name}
        </li>
      ))}
    </ul>
    )}
  </div>
);
