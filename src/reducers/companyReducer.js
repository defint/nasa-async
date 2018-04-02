import { handleAsyncActions } from 'redux-actions-async';
import { combineReducers } from 'redux';
import {
  COMPANY_DELETE,
  COMPANY_ADD,
  COMPANY_FETCH,
} from '../actionTypes/companyActionType';

export default combineReducers({
  add: handleAsyncActions(COMPANY_ADD),
  delete: handleAsyncActions(COMPANY_DELETE),
  fetch: handleAsyncActions(COMPANY_FETCH),
});
