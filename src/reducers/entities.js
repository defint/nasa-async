import _ from 'lodash';

const entities = (state = {}, action) => {
  if (action.payload && action.payload.entities) {
    return _.merge(state, action.payload.entities);
  }

  return state;
};

export default entities;
