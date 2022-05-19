import React, { useCallback, useState } from 'react';

import { useParams } from 'react-router-dom';
import styles from './PokemonDetailsPage.module.scss';
import { usePokemonDetails } from '../hooks/usePokemonDetails';
import { POKEMON_COUNT } from '../helpers/constants';
import { getRandomInt } from '../helpers/getRandomInt';
import { PokemonFrontCard } from '../components/PokemonCard/FrontCard/PokemonFrontCard';
import { Pokemon } from '../types/entity/pokemon';
import { PokemonBackCard } from '../components/PokemonCard/BackCard/PokemonBackCard';

interface Props {
    showRandomPokemon?: boolean;
}

export const PokemonDetailsPage: React.FC<Props> = ({ showRandomPokemon }) => {
  const { id } = useParams();
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  const onCardClickHandler = useCallback(() => {
    setIsFlipped((prevState) => !prevState);
  }, []);

  let pokemonId = parseInt(`${id}`);
  pokemonId = !showRandomPokemon && !Number.isNaN(pokemonId) ? pokemonId : getRandomInt(0, POKEMON_COUNT) + 1;
  const [data, isLoaded] = usePokemonDetails(pokemonId, [pokemonId]);

  return (
    <div className={styles.PokemonDetailsPage}>
      {isLoaded && (
        !isFlipped ? (
          <PokemonFrontCard pokemon={data as Pokemon} onClick={onCardClickHandler} />
        ) : (
          <PokemonBackCard pokemon={data as Pokemon} onClick={onCardClickHandler} />
        )
      )}
    </div>
  );
};
