import { handleAsyncActions } from 'redux-actions-async';
import { NASA_CURIOSITY_FETCH } from '../actionTypes/nasaActionType';

export default handleAsyncActions(NASA_CURIOSITY_FETCH);
