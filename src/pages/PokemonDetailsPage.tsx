import React from 'react';

import { useParams } from 'react-router-dom';
import styles from './PokemonDetailsPage.module.scss';
import { usePokemonDetails } from '../hooks/usePokemonDetails';
import { POKEMON_COUNT } from '../helpers/constants';
import { getRandomInt } from '../helpers/getRandomInt';
import { PokemonCard } from '../components/PokemonCard/PokemonCard';
import { Pokemon } from '../types/entity/pokemon';

interface Props {
    showRandomPokemon?: boolean;
}

export const PokemonDetailsPage: React.FC<Props> = ({ showRandomPokemon }) => {
  const { id } = useParams();
  let pokemonId = parseInt(`${id}`);
  pokemonId = !showRandomPokemon && !Number.isNaN(pokemonId) ? pokemonId : getRandomInt(0, POKEMON_COUNT) + 1;
  const [data, isLoaded] = usePokemonDetails(pokemonId, [pokemonId]);
  return (
    <div className={styles.PokemonDetailsPage}>
      {isLoaded && <PokemonCard pokemon={data as Pokemon} />}
    </div>
  );
};
