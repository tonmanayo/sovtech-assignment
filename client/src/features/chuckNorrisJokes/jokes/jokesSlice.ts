import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IJoke {
    icon_url: string
    id: string
    url: string
    value: string
    category: string
}

interface IJokesState {
    jokes: IJoke[]
}

const initialState: IJokesState = {
    jokes: [],
};

const jokesSlice = createSlice({
    name: 'jokes',
    initialState,
    reducers: {
        addJoke(state, action: PayloadAction<IJoke>) {
            if (action.payload) {
                
                state.jokes = [action.payload, ...state.jokes];
            }
        },
    }
});

export const selectJokes = (state: IJokesState) => state.jokes
export const { addJoke } = jokesSlice.actions;
export default jokesSlice.reducer
