import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import nasaReducer from './reducers/nasaReducer';
import App from './App';
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
  <Provider store={storeFactory(nasaReducer)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
