import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { handleContactsState } from '../../redux/selectors';
import { addContactThunk } from '../../redux/thunk';

export const Contactsform = () => {
  const contacts = useSelector(handleContactsState);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    if (target.name === 'name') {
      setName(target.value);
    } else {
      setPhone(target.value);
    }
  };
  const handleSubmit = evt => {
    evt.preventDefault();
    if (contacts.find(item => item.name === name)) {
      alert(`${name} is already in contacts.`);
    } else {
      dispatch(addContactThunk({ name, phone }));
      setName('');
      setPhone('');
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label>
        Name
        <input
          onChange={handleChange}
          value={name}
          className="form__input"
          type="text"
          name="name"
          required
        />
      </label>
      <label>
        Namber
        <input
          onChange={handleChange}
          value={phone}
          className="form__input"
          type="tel"
          name="number"
          required
        />
      </label>
      <button className="form__button" type="submit">
        Add contact
      </button>
    </form>
  );
};
