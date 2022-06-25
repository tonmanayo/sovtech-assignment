import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import rootReducer, { RootState } from './reducers'
import { setupListeners } from '@reduxjs/toolkit/query'
import { chuckNorrisApiSlice } from '../features/chuckNorrisJokes/api/apiSlice';

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(chuckNorrisApiSlice.middleware),
});

export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>

setupListeners(store.dispatch)

export default store
