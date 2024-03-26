import { createSlice } from '@reduxjs/toolkit';
import {
  logInThunk,
  registerThunk,
  refreshThunk,
  logOutThunk,
} from './operations';

const handleAuthFulfill = (state, { payload }) => {
  state.token = payload.token;
  state.user = payload.user;
  state.isLoggedIn = true;
};
const handleLogOutFulfill = (state, { payload }) => {
  state.token = null;
  state.user = {
    name: null,
    email: null,
  };
  state.isLoggedIn = false;
};

const handleRefreshPending = (state, { payload }) => {
  state.isRefreshing = true;
};
const handleRefreshFulfilled = (state, { payload }) => {
  state.isRefreshing = false;
  state.isLoggedIn = true;
  state.user = payload;
};

const handleRefreshRejected = (state, action) => {
  state.isRefreshing = false;
};
const initialState = {
  token: null,
  user: {
    name: null,
    email: null,
  },
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(refreshThunk.pending, handleRefreshPending)
      .addCase(refreshThunk.fulfilled, handleRefreshFulfilled)
      .addCase(refreshThunk.rejected, handleRefreshRejected)
      .addCase(registerThunk.fulfilled, handleAuthFulfill)
      .addCase(logInThunk.fulfilled, handleAuthFulfill)
      .addCase(logOutThunk.fulfilled, handleLogOutFulfill);
  },
});

export const authReducer = authSlice.reducer;
