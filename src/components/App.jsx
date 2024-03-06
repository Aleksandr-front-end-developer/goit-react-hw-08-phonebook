import { lazy, Suspense } from 'react';
import { Contactsform } from './Contactsform/Contactsform';
import { Filter } from './Filter/Filter';
import './style.scss';
import { useSelector } from 'react-redux';
import { handleError, handleIsLoading } from '../redux/selectors';
import { DNA } from 'react-loader-spinner';
const ContactsList = lazy(() => import('./ContactsList/ContactsList'));

export const App = () => {
  const isLoading = useSelector(handleIsLoading);
  const error = useSelector(handleError);

  return (
    <div className="phonebook">
      <h1>Phonebook</h1>
      <Contactsform />
      <h2>Contacts</h2>
      <Filter />
      <Suspense fallback={<div>Loading...</div>}>
        {isLoading && <DNA />}
        {error ? <p>{error}</p> : <ContactsList />}
      </Suspense>
    </div>
  );
};
