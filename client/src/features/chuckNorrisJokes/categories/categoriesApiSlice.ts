import { gql } from "graphql-request";
import { chuckNorrisApiSlice } from "../api/apiSlice";
import { createEntityAdapter, createSelector } from '@reduxjs/toolkit';

const GET_CATEGORIES = gql`
query jokeCategories {
    jokeCategories {
        categories
    }
}
`;

type Category = string
type Categories = Category[]
type CategoryState = {
    categories: Categories
}
type JokeCategories = {
    jokeCategories: {
        categories: Categories
    }
}

const categoriesAdapter = createEntityAdapter<JokeCategories>({
})

const initialState = categoriesAdapter.getInitialState<CategoryState>({
    categories: [],
})

export const extendedCategoriesSlice = chuckNorrisApiSlice.injectEndpoints({
    endpoints: build => ({
        getCategory: build.query({
            query: () => ({
                document: GET_CATEGORIES,
            }),
            transformResponse: (response: JokeCategories) => {
                console.log('response');
                console.log(response);

                return response.jokeCategories.categories
            },
            providesTags: (result, error, arg) => {
                if (!result) {
                    return [{ type: 'JokeCategories', id: "LIST" }]
                }

                const test: any = result.map(id => {
                    return { type: 'JokeCategories', id }
                })
                return [
                    { type: 'JokeCategories', id: "LIST" },
                    ...test]
            }
        }),
    }),
    overrideExisting: false,
})

export const selectCategoriesResults = extendedCategoriesSlice.endpoints.getCategory.select({});
export const selectCategoriesData = createSelector(selectCategoriesResults, (result) => result.data);

export const { useGetCategoryQuery } = extendedCategoriesSlice