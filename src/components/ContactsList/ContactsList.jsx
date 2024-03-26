import { useDispatch, useSelector } from 'react-redux';
import { ContactItem } from '../ContactItem/ContactItem';
import { handleFilterState } from '../../redux/filter/selectors';
import { handleContactsState } from '../../redux/contacts/selectors';
import { useEffect } from 'react';
import { getContactsThunk } from '../../redux/contacts/operations';
import { Box, List } from '@mui/material';

const ContactsList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  const contacts = useSelector(handleContactsState);
  const filter = useSelector(handleFilterState);

  const filterContacts = () => {
    if (filter !== '') {
      return contacts.filter(item =>
        item.name.trim().toLowerCase().includes(filter.trim().toLowerCase())
      );
    }
    return contacts;
  };

  return (
    <Box maxWidth="sm" component="div" sx={{ mt: 1 }}>
      <List disablePadding>
        {filterContacts().map(contact => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
      </List>
    </Box>
  );
};

export default ContactsList;
