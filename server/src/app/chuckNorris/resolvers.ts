import { IResolvers, ApolloError } from "apollo-server";

const resolvers: IResolvers = {
    Query: {
        jokeCategories: async (_, __, { dataSources }) => {
            const categories = await dataSources.checkNorrisAPI.getAllCategories();
            if (!categories) throw new ApolloError('Could not get categories', '404');
            return {
                categories
            }
        },
        joke: (_, { category }, { dataSources }) => {
            if (!category) throw new Error(`Invalid input ${category}`);
            return dataSources.checkNorrisAPI.getJokeByCategory({ category })
        }
    }
};

 export default resolvers
