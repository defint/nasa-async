import { createAsyncAction } from '../utils/asyncHelpers';
import { fetchPlanet, fetchCuriosityPhotos } from '../endpoints/nasa';
import { NASA_DATA_FETCH, NASA_CURIOSITY_FETCH } from '../actionTypes/nasaActionType';

export const nasaFetchPlanet = createAsyncAction(
  NASA_DATA_FETCH,
  fetchPlanet
);

export const nasaFetchCuriosity = createAsyncAction(
  NASA_CURIOSITY_FETCH,
  fetchCuriosityPhotos
);
