import { handleActions } from 'redux-actions';
import { changeStore } from '../actionCreators/nasaActionCreators';

const counterReducer = handleActions(
  {
    [changeStore]: state => state + 1,
  },
  0
);

export default counterReducer;
