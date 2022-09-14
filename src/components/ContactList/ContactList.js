import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getFilteredContacts } from 'redux/contacts/contacts-selectors';
import contactsOperations from 'redux/contacts/contacts-operations';
import { ContactItem } from './ContactItem';
import {List} from './Contact.styled'


export const ContactList = () => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);
  const filteredContacts = useSelector(getFilteredContacts);

  
  return (
    <List>
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <ContactItem
            contact={{ id, name, number }}
            key={id}
            onDelete={id => dispatch(contactsOperations.deleteContact(id))}
          />
        );
      })}
    </List>
  );
};

export default ContactList;