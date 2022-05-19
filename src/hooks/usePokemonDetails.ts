import { useGetRequest } from './useGetRequest';
import { useRequestType } from '../types/hook/useRequestType';
import { PokemonDetailsResponse } from '../types/api/pokemon-details';

export const usePokemonDetails = (id: number): useRequestType<PokemonDetailsResponse> => useGetRequest(`/pokemon/${id}`);
