import React from 'react';
import { render } from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers/reducers';
import { syncHistory } from 'react-router-redux';
import { browserHistory } from 'react-router';

import * as GlobelRedux from './utils/redux/Global';

const rootElement = document.getElementById('app');

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

// Sync dispatched route actions to the history
const reduxRouterMiddleware = syncHistory(browserHistory);
const createStoreWithMiddleware = applyMiddleware(
  reduxRouterMiddleware,
  thunkMiddleware
)(createStore);


const store = createStoreWithMiddleware(
  reducers,
  window.devToolsExtension ? window.devToolsExtension() : undefined
);

const handleSubscribe = () => {
  GlobelRedux.setStore(store.getState());
}
let unsubscribe = store.subscribe(handleSubscribe);

GlobelRedux.setDispatch(store.dispatch);

reduxRouterMiddleware.listenForReplays(store);

console.log('store', store.getState());

import Routes from './routes';

render(
  <Provider store={store}>
    {/* Your root Component */}
    <Routes />
  </Provider>,
  rootElement
);
