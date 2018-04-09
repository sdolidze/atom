import ApolloClient from 'apollo-boost';
import createHistory from 'history/createBrowserHistory';
import * as React from 'react';
import { ApolloProvider } from 'react-apollo';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import { applyMiddleware, createStore } from 'redux';
import { PersistConfig, persistReducer, persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage';
import promiseMiddleware from 'redux-promise-middleware';
import { AppWithRedux } from './components/AppWithRedux';
import { defaults, resolvers, typeDefs } from './graphql';
import './index.css';
import { rootReducer } from './redux';
import registerServiceWorker from './registerServiceWorker';

const history = createHistory();

const middleware = [promiseMiddleware(), routerMiddleware(history)];

const persistConfig: PersistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

/* tslint:disable:no-string-literal */
const composeStoreWithMiddleware = applyMiddleware(...middleware)(createStore);
const store = composeStoreWithMiddleware(
  persistedReducer,
  window['__REDUX_DEVTOOLS_EXTENSION__'] &&
    window['__REDUX_DEVTOOLS_EXTENSION__'](),
);
/* tslint:enable:no-string-literal */

const persistor = persistStore(store);

const client = new ApolloClient({
  uri: 'https://w5xlvm3vzz.lp.gql.zone/graphql',
  clientState: {
    typeDefs,
    resolvers,
    defaults,
  },
});

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ApolloProvider client={client}>
        <PersistGate loading={null} persistor={persistor}>
          <AppWithRedux />
        </PersistGate>
      </ApolloProvider>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root') as HTMLElement,
);
registerServiceWorker();
