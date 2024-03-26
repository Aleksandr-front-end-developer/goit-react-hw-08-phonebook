import { useDispatch } from 'react-redux';
import { deleteContactThunk } from '../../redux/contacts/operations';
import { Button, ListItem, ListItemText } from '@mui/material';

export const ContactItem = ({ contact: { name, number, id } }) => {
  const dispatch = useDispatch();
  return (
    <ListItem sx={{ py: 1, px: 0 }}>
      <ListItemText sx={{ mr: 2 }} primary={name} secondary={number} />
      <Button onClick={() => dispatch(deleteContactThunk(id))} size="small">
        Delete
      </Button>
    </ListItem>
  );
};
