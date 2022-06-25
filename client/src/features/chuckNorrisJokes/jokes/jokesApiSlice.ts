// Need to use the React-specific entry point to import createApi
import { createEntityAdapter, createSelector } from '@reduxjs/toolkit';
import { gql } from 'graphql-request'
import { useAppDispatch } from '../../../config/hooks';
import store from '../../../config/store';
import { chuckNorrisApiSlice } from '../api/apiSlice';
import { addJoke } from './jokesSlice';

const GET_JOKE = gql`
    query getJoke($category: String!) {
        joke(category: $category) {
            icon_url
            id
            url
            value
        }
    }
`;

const jokesAdapter = createEntityAdapter({

})

const initialState = jokesAdapter.getInitialState({
  jokes: []
})

export const extendedJokesSlice = chuckNorrisApiSlice.injectEndpoints({
  endpoints: build => ({
    getJokeByCategory: build.query({
      query: (category) => ({
        document: GET_JOKE,
        variables: { category: category?.category || 'animal' },
      }),
      transformResponse: (response) => {
        store.dispatch(addJoke(response.joke))
        return response.joke
      },
      providesTags: (result, error, id) => [{ type: 'Joke', id, result}],
    }),
  }),
  overrideExisting: false,
})

export const selectJokesResults = extendedJokesSlice.endpoints.getJokeByCategory.select({});
export const selectJokesData = createSelector(selectJokesResults, (jokeResults) => jokeResults.data);

export const {
  selectAll: selectAllJokes,
  selectById: selectJokeById,
  selectIds: selectJokeIds,

} = jokesAdapter.getSelectors((state: any) => selectJokesData(state) ?? initialState);

export const { useGetJokeByCategoryQuery } = extendedJokesSlice
