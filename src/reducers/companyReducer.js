import {
  createAsyncSelector,
  createLoadingSelector,
  handleAsyncActions,
} from 'redux-actions-async';
import { combineReducers } from 'redux';
import {
  COMPANY_DELETE,
  COMPANY_ADD,
  COMPANY_FETCH,
} from '../actionCreators/companyActionCreators';
import companySchema from '../schemas/company';

const _fetchSelector = state => state.company.fetch;
const _addSelector = state => state.company.add;
const _deleteSelector = state => state.company.delete;

export const dataSelector = createAsyncSelector(_fetchSelector, [
  companySchema,
]);
export const loadingSelector = createLoadingSelector(
  _fetchSelector,
  _addSelector,
  _deleteSelector
);

export default combineReducers({
  add: handleAsyncActions(COMPANY_ADD),
  delete: handleAsyncActions(COMPANY_DELETE),
  fetch: handleAsyncActions(COMPANY_FETCH),
});
