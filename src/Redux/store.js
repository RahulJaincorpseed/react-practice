
import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from "redux-thunk";  
import { counterReducerExample, productReducerExample } from './Reducer/CounterReducer';

const rootReducer = combineReducers({
    counterReducerExample,
    productReducerExample
})


export const store = createStore(rootReducer, applyMiddleware(thunk))