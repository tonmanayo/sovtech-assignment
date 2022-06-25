import { combineReducers } from 'redux'
import { chuckNorrisApiSlice } from './../features/chuckNorrisJokes/api/apiSlice';
import chuckNorrisReducer from './../features/chuckNorrisJokes/reducers';


const rootReducer = combineReducers({
    [chuckNorrisApiSlice.reducerPath]: chuckNorrisApiSlice.reducer,
    checkNorris: chuckNorrisReducer,
}, );

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
