import { handleAsyncActions } from 'redux-actions-async';
import { NASA_DATA_FETCH } from '../actionTypes/nasaActionType';
import { combineReducers } from 'redux';

export default combineReducers({
  aa: handleAsyncActions(NASA_DATA_FETCH),
  bb: handleAsyncActions(NASA_DATA_FETCH),
});
