import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from 'services/contactsApi';
import filterReducer from './slices/filterSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore, PERSIST } from 'redux-persist';
import userSlice from './slices/userSlice';

const persistConfig = {
  key: 'user',
  version: 1,
  storage: storage,
};

const persistedUserSlice = persistReducer(persistConfig, userSlice);

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    user: persistedUserSlice,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [PERSIST],
      },
    }).concat(contactsApi.middleware),
  devTools: true,
});

export let persistor = persistStore(store);
