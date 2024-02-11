import React from 'react';
import ContactItem from '../../components/ContactItem/ContactItem';
import SideBar from '../../components/SideBar/SideBar';
import './ContactList.css'

const ContactList = ({ stor, onToggleFavorite, onDeleteContact }) => {
  return (
    <div className='test'>
      <main className="cont">
        {stor.map((contact) => (
          <ContactItem
            key={contact.id}
            contact={contact}
            onToggleFavorite={onToggleFavorite}
            onDeleteContact={onDeleteContact}
          />
        ))}
      </main>

      <div className="sidebar2">
        {/* <SideBar stor={stor} /> */}
      </div>
    </div>
  );
};

export default ContactList;
