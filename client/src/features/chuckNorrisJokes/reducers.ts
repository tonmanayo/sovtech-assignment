import { combineReducers } from 'redux'
import categoriesReducer from './categories/categoriesSlice';
import jokesReducer from './jokes/jokesSlice';

const chuckNorrisReducer = combineReducers({
    categories: categoriesReducer,
    jokes: jokesReducer,
}, );

export type ChuckNorrisState = ReturnType<typeof chuckNorrisReducer>

export default chuckNorrisReducer
