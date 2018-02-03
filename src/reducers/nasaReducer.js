import { handleActions } from 'redux-actions';
import { createAsyncReducer, initialAsyncState } from '../utils/asyncHelpers';
import { NASA_DATA_FETCH } from '../actionTypes/nasaActionType';

export default handleActions(
  createAsyncReducer(NASA_DATA_FETCH),
  initialAsyncState
);
