import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  getContactsThunk,
  deleteContactThunk,
  addContactThunk,
} from './operations';

const arrThunks = [getContactsThunk, deleteContactThunk, addContactThunk];

const addState = type => arrThunks.map(item => item[type]);

const handlePending = (state, { payload }) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.error.message;
};

const handleFulfillGet = (state, { payload }) => {
  state.isLoading = false;
  state.items = payload;
  state.error = null;
};
const handleFulfillAdd = (state, { payload }) => {
  state.isLoading = false;
  state.items.push(payload);
  state.error = null;
};
const handleFulfillDelete = (state, { payload }) => {
  state.isLoading = false;
  state.items = state.items.filter(item => item.id !== payload.id);
  state.error = null;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getContactsThunk.fulfilled, handleFulfillGet)
      .addCase(addContactThunk.fulfilled, handleFulfillAdd)
      .addCase(deleteContactThunk.fulfilled, handleFulfillDelete)
      .addMatcher(isAnyOf(...addState('pending')), handlePending)
      .addMatcher(isAnyOf(...addState('rejected')), handleRejected);
  },
});

export const { addContact, removeContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
