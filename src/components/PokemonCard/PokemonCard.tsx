import React from 'react';
import styles from './PokemonCard.module.scss';
import { Pokemon } from '../../types/entity/pokemon';

interface Props {
    pokemon: Pokemon;
    onClick?: () => void;
    children?: React.ReactNode;
}

export const PokemonCard: React.FC<Props> = ({ children, pokemon, onClick }) => (
  <div className={styles.Card} onClick={onClick} aria-hidden="true">
    <div className={styles.Id}>{`#${pokemon.id}`}</div>
    <div className={styles.Name}>{pokemon.name}</div>
    {children}
  </div>
);
