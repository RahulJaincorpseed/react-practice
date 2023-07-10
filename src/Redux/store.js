
import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from "redux-thunk";  
import { TableDataReducer, counterReducerExample, productReducerExample } from './Reducer/CounterReducer';

const rootReducer = combineReducers({
    counterReducerExample,
    productReducerExample,
    TableDataReducer
})


export const store = createStore(rootReducer, applyMiddleware(thunk))