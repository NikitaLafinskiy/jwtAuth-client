import { createSlice } from '@reduxjs/toolkit';
import { AuthState } from 'types/auth.d';

const initialState: AuthState = {
  user: { email: '', password: '', id: 0 },
  isAuth: false,
  error: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    auth: (state, action) => {
      state.user = action.payload.user;
      state.isAuth = true;
      state.error = '';
    },
    authDidFail: (state, action) => {
      state.user = { id: 0, email: '', password: '' };
      state.isAuth = false;
      state.error = action.payload;
    },
    authLogout: (state, action) => {
      state.user = { id: 0, email: '', password: '' };
      state.isAuth = false;
      state.error = '';
    },
  },
});

export const authReducer = authSlice.reducer;
