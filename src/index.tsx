import ApolloClient from 'apollo-boost';
import * as React from 'react';
import { ApolloProvider } from 'react-apollo';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import { AppWithRedux } from './components/AppWithRedux';
import { defaults, resolvers, typeDefs } from './graphql';
import './index.css';
import { rootReducer } from './redux';
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
  <BrowserRouter>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <AppWithRedux />
      </Provider>
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById('root') as HTMLElement,
);
registerServiceWorker();
