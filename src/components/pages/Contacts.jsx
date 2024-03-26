import ContactsList from 'components/ContactsList/ContactsList';
import { Contactsform } from 'components/Contactsform/Contactsform';
import { Filter } from 'components/Filter/Filter';
import { ThreeDots } from 'react-loader-spinner';
import { handleIsLoading } from '../../redux/contacts/selectors';
import { useSelector } from 'react-redux';
import { Container, Typography } from '@mui/material';
const Contacts = () => {
  const isLoading = useSelector(handleIsLoading);
  return (
    <Container>
      <Typography
        component="h1"
        variant="h2"
        color="inherit"
        align="left"
        noWrap
        sx={{ flex: 1 }}
      >
        Phonebook
      </Typography>
      <Contactsform />
      <Typography
        component="h3"
        variant="h4"
        color="inherit"
        align="left"
        noWrap
        sx={{ flex: 1 }}
      >
        Contacts:
      </Typography>
      <Filter />
      {isLoading && <ThreeDots color="#1976d2" />}
      <ContactsList />
    </Container>
  );
};
export default Contacts;
