import React from 'react';
import cn from 'classnames';
import styles from './FrontContent.module.scss';
import { Pokemon } from '../../../types/entity/pokemon';

interface Props {
    pokemon: Pokemon;
}

export const FrontContent: React.FC<Props> = ({ pokemon }) => (
  <>
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
  </>
);
