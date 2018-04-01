import ApolloClient from 'apollo-boost';
import * as React from 'react';
import { ApolloProvider } from 'react-apollo';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import App from './App';
import { defaults, resolvers, typeDefs } from './graphql';
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

const client = new ApolloClient({
  uri: 'https://w5xlvm3vzz.lp.gql.zone/graphql',
  clientState: {
    typeDefs,
    resolvers,
    defaults,
  },
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <App />
    </Provider>
  </ApolloProvider>,
  document.getElementById('root') as HTMLElement,
);
registerServiceWorker();
