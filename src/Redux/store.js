
import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from "redux-thunk";  
import { TableDataReducer, counterReducerExample, productReducerExample } from './Reducer/CounterReducer';
import { UserReducer } from './Reducer/UserReducer';
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
    counterReducerExample,
    productReducerExample,
    TableDataReducer,
    UserReducer
})



export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))