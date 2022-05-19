import React from 'react';
import cn from 'classnames';
import styles from './BackContent.module.scss';
import { Pokemon } from '../../../types/entity/pokemon';

interface Props {
    pokemon: Pokemon;
}

export const BackContent: React.FC<Props> = ({ pokemon }) => (
  pokemon.stats && (
    <div className={styles.Stats}>
      {pokemon.stats.map((stat) => (
        <div key={stat.stat.name} className={cn(styles.Stat, styles[stat.stat.name])}>
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
  )
);
