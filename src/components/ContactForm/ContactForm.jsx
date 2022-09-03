import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import contactsOperations from 'redux/contacts/contacts-operations';
import { getContacts } from 'redux/contacts/contacts-selectors';
import { Box, TextField, Button, Container } from '@mui/material';


function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);

  const handleInputChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return new Error(`Something went wrong in ContactForm`);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const contactExist = contacts.find(contact => contact.name === name);
    if (!contactExist) {
      dispatch(contactsOperations.addContact({ name, number }));
      setName('');
      setNumber('');
    } else {
      alert(`${name} is already in contacts`);
    }
  };

  return (
<Container>
      <Box
        component="form"
        sx={{
          '& > :not(style)': {
            display: 'flex',
            m: 10,
            width: '35ch',
          },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          label="Name"
          variant="standard"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange = {handleInputChange}
          required
          
        />
        <TextField
          label="Number"
          variant="standard"
          type="tel"
          name="number"
          placeholder="+38(0XX)XXX-XX-XX"
          onChange = {handleInputChange}
          pattern={{
            value:
              /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
            message:
              'This must be digits and may contain spaces, dashes, parentheses or start with +.',
          
          }}
          required
        />
        <Button variant="contained" type="submit">
          Add contact
        </Button>
      </Box>
    </Container>
  );
}

export default ContactForm;
