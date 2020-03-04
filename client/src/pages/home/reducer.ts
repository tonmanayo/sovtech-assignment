import { createSlice } from "@reduxjs/toolkit";

interface IJoke {
    icon_url: string
    id: string
    url: string
    value: string
    category: string
}

interface IJokesState {
    jokes: {[key: string]: IJoke}
    category: string
    error: string
    loading: boolean
}

const initialState: IJokesState = {
    jokes: {},
    category: '',
    error: '',
    loading: false
};

const jokesSlice = createSlice({
    name: 'jokes',
    initialState,
    reducers: {
        setJoke(state, { payload: { joke, loading, error } }) {
            if (joke) {
                state.jokes = { ...state.jokes, [joke.id]: { ...joke } };
                state.error = error;
            }
            state.error = error;
            state.loading = loading
        },
        setCategory(state, { payload: category }) {
            state.category = category
        }
    }
});

export const { setJoke, setCategory } = jokesSlice.actions;
export default jokesSlice.reducer
