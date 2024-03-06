import { filterContact } from '../../redux/reducers';
import { handleFilterState } from '../../redux/selectors';
import { useDispatch, useSelector } from 'react-redux';

export const Filter = ({ value, onFilter }) => {
  const filter = useSelector(handleFilterState);
  const dispatch = useDispatch();

  const handleFilter = value => {
    dispatch(filterContact(value));
  };
  return (
    <label>
      Finds contacts by name
      <input
        onChange={e => handleFilter(e.target.value)}
        className="form__input"
        type="text"
        name="search"
        value={filter}
      />
    </label>
  );
};
