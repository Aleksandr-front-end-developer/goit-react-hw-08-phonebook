import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { setToken } from '../auth/operations';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const getPersistedToken = thunkAPI => {
  const state = thunkAPI.getState();
  return state.auth.token;
};

export const getContactsThunk = createAsyncThunk(
  'contacts/get',
  async (body, thunkAPI) => {
    const persistedToken = getPersistedToken(thunkAPI);
    try {
      setToken(persistedToken);
      const res = await axios.get('/contacts');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  'contact/add',
  async (contact, thunkAPI) => {
    const persistedToken = getPersistedToken(thunkAPI);
    try {
      setToken(persistedToken);
      const res = await axios.post('/contacts', { ...contact });
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  'contact/delete',
  async (id, thunkAPI) => {
    const persistedToken = getPersistedToken(thunkAPI);
    try {
      setToken(persistedToken);
      const res = await axios.delete(`/contacts/${id}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
