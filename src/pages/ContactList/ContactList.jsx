import React from 'react';
import ContactItem from '../../components/ContactItem/ContactItem';
import SideBar from '../../components/SideBar/SideBar';
import './ContactList.css'
import { useSelector ,useDispatch } from 'react-redux';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const searchTherm = useSelector(state => state.searchTherm)
  const dispatch = useDispatch();

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  const filteredContacts = searchTherm
  ? contacts.filter((contact) => contact.name.toLowerCase().includes(searchTherm))
  : contacts;

  return (
    <div className='wrapper'>
      <main className="cont">
        {filteredContacts.map((contact) => (
          <ContactItem key={contact.id} contact={contact} onDelete={handleDeleteContact} />
        ))}
      </main>

      {<div className="sidebar">
        {/* { <SideBar/> } */}
      </div> }
    </div>
  );
};

export default ContactList;
