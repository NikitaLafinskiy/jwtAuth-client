import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { authReducer } from './auth/AuthSlice';

const reducer = combineReducers({ authReducer });

export const setupStore = () => {
  return configureStore({ reducer });
};

export type RootState = ReturnType<typeof reducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
