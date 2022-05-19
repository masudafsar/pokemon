import { PokemonType } from './PokemonType';
import { PokemonStat } from './PokemonStat';
import { PokemonSprite } from './PokemonSprite';

export interface Pokemon {
    id: number,
    name: string,
    types: PokemonType[],
    sprites: PokemonSprite,
    stats: PokemonStat[],
}
