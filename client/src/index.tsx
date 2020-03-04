import React from 'react';
import ReactDOM from 'react-dom';

import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { Provider } from "react-redux";
import store from './config/store'

import Pages from './pages';

// Styles
import './styles/tailwind.css';
import 'font-awesome/css/font-awesome.min.css';

const cache = new InMemoryCache();
const link = new HttpLink({
    uri: 'http://localhost:4000/'
});

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
    cache,
    link
});


const render = () => {
    ReactDOM.render(
            <ApolloProvider client={client}>
                <Provider store={store}>
                    <Pages />
                </Provider>
            </ApolloProvider>,

        document.getElementById('root')
    )
};

render();

if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept('./pages', render)
}
