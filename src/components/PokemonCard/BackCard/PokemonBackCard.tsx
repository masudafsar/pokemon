import React from 'react';
import styles from './PokemonBackCard.module.scss';
import { Pokemon } from '../../../types/entity/pokemon';

interface Props {
    pokemon: Pokemon
}

export const PokemonBackCard: React.FC<Props> = ({ pokemon }) => (
  <div className={styles.Card}>
    <div className={styles.Id}>{`#${pokemon.id}`}</div>
    <div className={styles.Name}>{pokemon.name}</div>
    {pokemon.stats && (
    <div className={styles.Stats}>
      {pokemon.stats.map((stat) => (
        <div key={stat.stat.name} className={styles.Stat}>
          <div className={styles.StatTitle}>{stat.stat.name}</div>
          <div className={styles.StatBase}>
            <div className={styles.StatProgress}>
              <div style={{ width: `${stat.base_stat}%` }} className={styles.StatProgressInner} />
            </div>
            <div className={styles.StatValue}>{stat.base_stat}</div>
          </div>
        </div>
      ))}
    </div>
    )}
  </div>
);
