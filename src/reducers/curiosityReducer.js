import { handleActions } from 'redux-actions';
import { createAsyncReducer, initialAsyncState } from '../utils/asyncHelpers';
import { NASA_CURIOSITY_FETCH } from '../actionTypes/nasaActionType';

export default handleActions(
  createAsyncReducer(NASA_CURIOSITY_FETCH),
  initialAsyncState
);
