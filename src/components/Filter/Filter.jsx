import { filterContact } from '../../redux/filter/slice';
import { handleFilterState } from '../../redux/filter/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { Box, TextField } from '@mui/material';

export const Filter = ({ value, onFilter }) => {
  const filter = useSelector(handleFilterState);
  const dispatch = useDispatch();

  const handleFilter = value => {
    dispatch(filterContact(value));
  };
  return (
    <>
      <Box maxWidth="sm" component="div" sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          fullWidth
          name="name"
          label="Finds contacts by name"
          type="text"
          onChange={e => handleFilter(e.target.value)}
          value={filter}
        />
      </Box>
    </>
  );
};
