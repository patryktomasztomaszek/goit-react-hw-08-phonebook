import { combineReducers } from '@reduxjs/toolkit';
import contactsReducer from './reducers/contactsReducers';
import filterReducer from './reducers/filterReducers';


const rootReducer = combineReducers({
    contacts: contactsReducer,
    filter: filterReducer
});

export default rootReducer;
