
import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from "redux-thunk";  
import { counterReducerExample } from './Reducer/CounterReducer';

const rootReducer = combineReducers({
    counterReducerExample
})


export const store = createStore(rootReducer, applyMiddleware(thunk))