import PropTypes from 'prop-types';
import {Button } from '@mui/material';
import {ListItem, Text} from './Contact.styled'

const ContactItem = ({ contact, onDelete }) => {
  const { id, name, number } = contact;
  return (
    <ListItem>
      <Text>{name}</Text>
      <Text>{number}</Text>
      <Button variant="contained"
        type="button"
        id={id}
        onClick={e => {
          onDelete(e.target.id);
        }}
      >
        Delete
      </Button>
    </ListItem>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  onDelete: PropTypes.func.isRequired,
};

export { ContactItem };
