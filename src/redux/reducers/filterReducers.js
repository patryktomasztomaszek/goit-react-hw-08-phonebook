import { createReducer } from '@reduxjs/toolkit';
import { updateFilter } from '../actions';

const initialState = '';

const filterReducer = createReducer(initialState, {
  [updateFilter]: (state, { payload }) => (state = payload),
});

export default filterReducer;