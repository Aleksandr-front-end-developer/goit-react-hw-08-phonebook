import { createAsyncThunk } from '@reduxjs/toolkit';
import { getContacts, postContact, deleteContact } from '../services/mockAPI';

export const getContactsThunk = createAsyncThunk('contacts/fetchAll', () =>
  getContacts()
);

export const addContactThunk = createAsyncThunk('contacts/addContact', item =>
  postContact(item)
);
export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  id => deleteContact(id)
);
