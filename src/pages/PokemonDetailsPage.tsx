import React, { useCallback, useState } from 'react';

import { useParams } from 'react-router-dom';
import styles from './PokemonDetailsPage.module.scss';
import { usePokemonDetails } from '../hooks/usePokemonDetails';
import { POKEMON_COUNT } from '../helpers/constants';
import { getRandomInt } from '../helpers/getRandomInt';
import { FrontContent } from '../components/PokemonCard/FrontCard/FrontContent';
import { Pokemon } from '../types/entity/pokemon';
import { PokemonCard } from '../components/PokemonCard/PokemonCard';
import { BackContent } from '../components/PokemonCard/BackCard/BackContent';

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
          <PokemonCard pokemon={data as Pokemon} onClick={onCardClickHandler}>
            <FrontContent pokemon={data as Pokemon} />
          </PokemonCard>
        ) : (
          <PokemonCard pokemon={data as Pokemon} onClick={onCardClickHandler}>
            <BackContent pokemon={data as Pokemon} />
          </PokemonCard>
        )
      )}
    </div>
  );
};
