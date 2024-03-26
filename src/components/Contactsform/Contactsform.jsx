import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleContactsState } from '../../redux/contacts/selectors';
import { addContactThunk } from '../../redux/contacts/operations';

import {
  Box,
  Button,
  CssBaseline,
  TextField,
  ThemeProvider,
  createTheme,
} from '@mui/material';
import toast from 'react-hot-toast';

const defaultTheme = createTheme();

export const Contactsform = () => {
  const contacts = useSelector(handleContactsState);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    if (target.name === 'name') {
      setName(target.value);
    } else {
      setNumber(target.value);
    }
  };
  const handleSubmit = evt => {
    evt.preventDefault();
    if (contacts.find(item => item.name === name)) {
      toast(`${name} is already in contacts.`);
    } else {
      dispatch(addContactThunk({ name, number }))
        .unwrap()
        .catch(error => toast.error(error));
      setName('');
      setNumber('');
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Box
        maxWidth="sm"
        component="form"
        onSubmit={handleSubmit}
        noValidate
        sx={{ mt: 1 }}
      >
        <TextField
          margin="normal"
          required
          fullWidth
          name="name"
          label="Name"
          type="text"
          autoComplete="current-password"
          value={name}
          onChange={handleChange}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="number"
          label="Namber"
          type="tel"
          autoComplete="current-password"
          value={number}
          onChange={handleChange}
        />
        <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
          Add contact
        </Button>
      </Box>
    </ThemeProvider>
  );
};
