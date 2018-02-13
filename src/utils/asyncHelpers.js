import { createAction } from 'redux-actions';
import _ from 'lodash';
import { denormalize } from 'normalizr';
import { createSelector } from 'reselect';

const toSuccess = asyncType => `${asyncType}_SUCCESS`;
const toFail = asyncType => `${asyncType}_FAIL`;
const toRequest = asyncType => `${asyncType}_REQUEST`;

const createAsyncAction = (asyncType, request, after = _.identity) => (
  ...args
) => {
  const pendingType = createAction(toRequest(asyncType));
  const completeType = createAction(toSuccess(asyncType));
  const errorType = createAction(toFail(asyncType));

  return async dispatch => {
    dispatch(pendingType());

    try {
      const response = await request(...args);
      const data = response.data || response;
      const payload = data ? await after(data, dispatch) : null;
      dispatch(completeType(payload));
      return payload;
    } catch (error) {
      dispatch(errorType(error));
      return error;
    }
  };
};

const initialAsyncState = { loading: false, data: null, error: '' };

const createAsyncReducer = asyncType => ({
  [toRequest(asyncType)]: state => ({ ...state, loading: true }),
  [toSuccess(asyncType)]: (state, { payload }) => ({
    ...state,
    loading: false,
    data: payload.result || payload,
  }),
  [toFail(asyncType)]: (state, { payload }) => ({
    ...state,
    loading: false,
    error: payload,
  }),
});

const createAsyncNormalizeSelector = (schema, selector) =>
  createSelector([selector, state => state.entities], (listOrId, allList) => {
    const dataListOrId = _.get(listOrId, 'data');

    if (_.isEmpty(dataListOrId)) {
      return _.isArray(schema) ? [] : {};
    }

    return schema ? denormalize(dataListOrId, schema, allList) : dataListOrId;
  });

export {
  createAsyncAction,
  initialAsyncState,
  createAsyncReducer,
  createAsyncNormalizeSelector,
};
