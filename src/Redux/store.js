
import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from "redux-thunk";  
import { TableDataReducer, counterReducerExample, productReducerExample } from './Reducer/CounterReducer';
import { UserReducer } from './Reducer/UserReducer';
import { composeWithDevTools } from "redux-devtools-extension";
import { DataTableReducer } from './Reducer/DataTableReducer';

const rootReducer = combineReducers({
    counterReducerExample,
    productReducerExample,
    TableDataReducer,
    UserReducer,
    DataTableReducer,
})



export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))