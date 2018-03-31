import { handleActions } from 'redux-actions';
import { createAsyncReducer, initialAsyncState } from 'redux-actions-async';
import { NASA_CURIOSITY_FETCH } from '../actionTypes/nasaActionType';

export default handleActions(
  createAsyncReducer(NASA_CURIOSITY_FETCH),
  initialAsyncState
);
