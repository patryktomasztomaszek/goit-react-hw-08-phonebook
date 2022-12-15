import { configureStore } from '@reduxjs/toolkit';
import { devToolsEnhancer } from '@redux-devtools/extension';
import rootReducer from './reducer';

const enhancer = devToolsEnhancer();
const store = configureStore({ reducer: rootReducer }, enhancer);

export default store;
