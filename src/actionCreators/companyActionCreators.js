import { createAsyncAction } from 'redux-actions-async';
import { normalize } from 'normalizr';
import company from '../schemas/company';
import {
  COMPANY_ADD,
  COMPANY_DELETE,
  COMPANY_FETCH,
} from '../actionTypes/companyActionType';
import {
  addCompany,
  deleteCompany,
  fetchCompanies,
} from '../endpoints/company';

export const fetchCompaniesAsync = createAsyncAction(
  COMPANY_FETCH,
  fetchCompanies,
  data => normalize(data, [company])
);

export const addCompanyAsync = createAsyncAction(
  COMPANY_ADD,
  addCompany,
  (data, dispatch) => {
    dispatch(fetchCompaniesAsync());
  }
);

export const deleteCompanyAsync = createAsyncAction(
  COMPANY_DELETE,
  deleteCompany,
  (data, dispatch) => {
    dispatch(fetchCompaniesAsync());
  }
);
