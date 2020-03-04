import { ApolloServer } from 'apollo-server';

import resolvers from './app/chuckNorris/resolvers';
import typeDefs from './app/chuckNorris/schema';

import chuckNorrisAPI from './app/datasources/chuckNorris';

const server = new ApolloServer({
    resolvers,
    typeDefs,
    introspection: true,
    playground: true,
    dataSources: () => ({
        checkNorrisAPI: new chuckNorrisAPI(),
    })
});

server.listen()
    .then(({ url }) => console.log(`Server ready at ${url}. `));
