import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getContactsThunk, deleteContactThunk, addContactThunk } from './thunk';

const arrThunks = [getContactsThunk, deleteContactThunk, addContactThunk];

const addState = type => arrThunks.map(item => item[type]);

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterContact: (state, action) => action.payload,
  },
});

const handlePendingGet = (state, { payload }) => {
  state.isLoading = true;
};

const handleRejectedGet = (state, action) => {
  state.isLoading = false;
  state.error = action.error.message;
};

const handleFulfillGet = (state, { payload }) => {
  state.isLoading = false;
  state.items = payload;
  state.error = null;
};
const handleFulfillAddGet = (state, { payload }) => {
  state.items.push(payload);
  state.error = null;
};
const handleFulfillDeleteGet = (state, { payload }) => {
  state.items = state.items.filter(item => item.id !== payload.id);
  state.error = null;
};

const contatsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(getContactsThunk.fulfilled, handleFulfillGet)
      .addCase(addContactThunk.fulfilled, handleFulfillAddGet)
      .addCase(deleteContactThunk.fulfilled, handleFulfillDeleteGet)
      .addCase(getContactsThunk.pending, handlePendingGet)
      .addMatcher(isAnyOf(...addState('rejected')), handleRejectedGet);
  },
});

export const { addContact, removeContact } = contatsSlice.actions;
export const { filterContact } = filterSlice.actions;

export const contatsReducer = contatsSlice.reducer;
export const filterReducer = filterSlice.reducer;
