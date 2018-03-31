import { handleActions } from 'redux-actions';
import { createAsyncReducer, initialAsyncState } from 'redux-actions-async';
import { NASA_DATA_FETCH } from '../actionTypes/nasaActionType';

export default handleActions(
  createAsyncReducer(NASA_DATA_FETCH),
  initialAsyncState
);
