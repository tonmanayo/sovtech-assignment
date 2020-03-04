import { combineReducers } from 'redux'
import home from './../pages/home/reducer'

const rootReducer = combineReducers({
    home
});

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
