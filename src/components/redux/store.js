import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import phonebookReducer from "./phonebook/phonebook-reducer";

const rootReducer = combineReducers({
    phoneboock: phonebookReducer,
})

const store = createStore(rootReducer, composeWithDevTools());

export default store;