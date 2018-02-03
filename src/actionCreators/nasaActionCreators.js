import { fetchPlanet } from '../endpoints/nasa';
import { createAsyncAction } from '../utils/asyncHelpers';
import { NASA_DATA_FETCH } from '../actionTypes/nasaActionType';

export const nasaFetchPlanet = createAsyncAction(
  NASA_DATA_FETCH,
  fetchPlanet
);
