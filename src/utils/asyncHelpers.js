import { createAction } from 'redux-actions';
import _ from 'lodash';

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
    data: payload,
  }),
  [toFail(asyncType)]: (state, { payload }) => ({
    ...state,
    loading: false,
    error: payload,
  }),
});

export { createAsyncAction, initialAsyncState, createAsyncReducer };
