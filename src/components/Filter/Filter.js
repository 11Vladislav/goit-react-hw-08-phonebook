import { changeFilter } from 'redux/contacts/contacts-actions';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { Box, TextField } from '@mui/material';


const Filter = () => {
  const value = useSelector(state => state.contacts.filter);

  const dispatch = useDispatch();

  return (
    <Box
      sx={{
        '& > :not(style)': { m: 3, width: '35ch', marginBottom: '5ch', marginLeft: '0', },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        label="Find contacts by name"
        variant="standard"
        value={value}
        onChange={e => dispatch(changeFilter(e.currentTarget.value))}
      />
    </Box>
  );
};

Filter.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Filter;
