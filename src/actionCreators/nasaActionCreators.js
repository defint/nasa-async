import { fetchPlanet } from '../endpoints/nasa';
import { createAsyncAction } from 'redux-actions-async';

export const NASA_DATA_FETCH = 'NASA_DATA_FETCH';

export const nasaFetchPlanet = createAsyncAction(
  NASA_DATA_FETCH,
  fetchPlanet
);
