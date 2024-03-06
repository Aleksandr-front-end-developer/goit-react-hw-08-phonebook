import { useDispatch, useSelector } from 'react-redux';
import { ContactItem } from '../ContactItem/ContactItem';
import { handleContactsState, handleFilterState } from '../../redux/selectors';
import { useEffect } from 'react';
import { getContactsThunk } from '../../redux/thunk';

const ContactsList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  const contacts = useSelector(handleContactsState);
  const filter = useSelector(handleFilterState);

  const filterContacts = () => {
    // return [];
    if (!contacts) return [];
    if (filter !== '') {
      return contacts.filter(item =>
        item.name.trim().toLowerCase().includes(filter.trim().toLowerCase())
      );
    }
    return contacts;
  };

  return (
    <ul>
      {filterContacts().map(contact => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

export default ContactsList;
