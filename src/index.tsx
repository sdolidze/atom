import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import App from './App';
import './index.css';
import rootReducer from './reducers';
import registerServiceWorker from './registerServiceWorker';

/* tslint:disable:no-string-literal */
const composeStoreWithMiddleware = applyMiddleware(promiseMiddleware())(
  createStore,
);
const store = composeStoreWithMiddleware(
  rootReducer,
  window['__REDUX_DEVTOOLS_EXTENSION__'] &&
    window['__REDUX_DEVTOOLS_EXTENSION__'](),
);
/* tslint:enable:no-string-literal */

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement,
);
registerServiceWorker();
