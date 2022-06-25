import { createSlice } from "@reduxjs/toolkit";

interface ICategoryState {
    category: string
}

const initialState: ICategoryState = {
    category: '',
};

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        setCategory(state, { payload: category }) {
            state.category = category
        }
    }
});

export const selectCategory = (state: ICategoryState) => state.category
export const { setCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer
