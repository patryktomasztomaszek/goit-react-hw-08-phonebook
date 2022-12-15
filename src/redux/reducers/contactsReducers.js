import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact } from '../actions';

const initialState = [];

const contactsReducer = createReducer(initialState, {
  [addContact]: (state, { payload }) => (state = [payload, ...state]),
  [deleteContact]: (state, { payload }) =>
    (state = state.filter(c => c.id !== payload)),
});

export default contactsReducer;