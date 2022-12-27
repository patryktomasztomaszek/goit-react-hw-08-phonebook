import { configureStore } from '@reduxjs/toolkit';
import { phonebookApi } from 'services/phonebookApi';
import tokenSlice from './tokenSlice';
import filterSlice from './filterSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore, PERSIST } from 'redux-persist';
import userSlice from './userSlice';

const persistConfig = {
  key: 'user',
  version: 1,
  storage: storage,
};

const persistedUserSlice = persistReducer(persistConfig, userSlice);

export let store = configureStore({
  reducer: {
    [phonebookApi.reducerPath]: phonebookApi.reducer,
    token: tokenSlice,
    user: persistedUserSlice,
    filter: filterSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [PERSIST],
      },
    }).concat(phonebookApi.middleware),
  devTools: true,
});

export let persistor = persistStore(store);
