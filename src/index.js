import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import * as reducers from './reducers';
import NormalizrDemo from './containers/CompanyPage';
import registerServiceWorker from './registerServiceWorker';

export const storeFactory = reducer => {
  const middlewares = [thunk];

  const enhancers = [applyMiddleware(...middlewares)];

  const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : compose;

  return createStore(reducer, composeEnhancers(...enhancers));
};

ReactDOM.render(
  <Provider store={storeFactory(combineReducers(reducers))}>
    <NormalizrDemo />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
