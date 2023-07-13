
import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from "redux-thunk";  
import { TableDataReducer, counterReducerExample, productReducerExample } from './Reducer/CounterReducer';
import { UserReducer } from './Reducer/UserReducer';

const rootReducer = combineReducers({
    counterReducerExample,
    productReducerExample,
    TableDataReducer,
    UserReducer
})


export const store = createStore(rootReducer, applyMiddleware(thunk))