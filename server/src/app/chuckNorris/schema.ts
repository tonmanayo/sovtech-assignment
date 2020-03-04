import { gql } from 'apollo-server';

const typeDefs = gql`    
    type Joke {
        icon_url: String
        id: ID
        url: String
        value: String
    }

    type CategoriesResponse {
        categories: [String]
    }

    type Query {
        jokeCategories: CategoriesResponse
        joke(category: String!): Joke
    }
`;

export default typeDefs;
