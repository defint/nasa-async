import { handleAsyncActions, createAsyncSelector, createLoadingSelector } from 'redux-actions-async';
import { NASA_DATA_FETCH } from '../actionCreators/nasaActionCreators';

const _selector = state => state;
export const dataSelector = createAsyncSelector(_selector);
export const loadingSelector = createLoadingSelector(_selector);

export default handleAsyncActions(NASA_DATA_FETCH);
