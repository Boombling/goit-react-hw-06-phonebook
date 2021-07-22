import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import actions from "./phonebook-actions";

const items = createReducer([], {
    [actions.addContact]: (state, { payload }) => state.map((contact) => contact.name).includes(payload.name)
        ? alert(`${payload.name} is already in contacts`)
        : [...state, payload],
    [actions.deletedContact]: (state, {payload}) => state.filter(({ id }) => id !== payload),
})

const filter = createReducer('', {
    [actions.changeFilter]: (_, {payload}) => payload
});

// const items = (state = [], {type, payload}) => {
//     switch (type) {
//         case types.ADD:
//             return [...state, payload];
        
//         case types.DELETE:
//             return state.filter(({ id }) => id !== payload);
        
//         default:
//             return state;
//     }
// }

// const filter = (state = '', {type, payload}) => {
//     switch (type) {
//         case types.CHANGE_FILTER:
//             return payload;
        
//         default:
//             return state;
//     }
// }

export default combineReducers({
    items,
    filter
})