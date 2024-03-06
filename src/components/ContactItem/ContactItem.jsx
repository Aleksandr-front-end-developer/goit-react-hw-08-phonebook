import { useDispatch } from 'react-redux';

import { deleteContactThunk } from '../../redux/thunk';

export const ContactItem = ({ contact: { name, phone, id } }) => {
  const dispatch = useDispatch();
  return (
    <li>
      {name}: {phone}
      <button onClick={() => dispatch(deleteContactThunk(id))} type="butoon">
        Delete
      </button>
    </li>
  );
};
