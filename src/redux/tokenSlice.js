import { createSlice } from '@reduxjs/toolkit';
// import getFromLocalStorage from 'utilites/getFromLocalStore';

const initialState = JSON.parse(localStorage.getItem('token')) || '';

const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    addToken: (state, { payload }) => payload,
    deleteToken: (state, { payload }) => '',
  },
});

export const { addToken, deleteToken } = tokenSlice.actions;

export default tokenSlice.reducer;
