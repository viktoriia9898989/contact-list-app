import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NewContact from './pages/NewContact/NewContact';
import NotFound from './pages/NotFound/NotFound';
import Header from './components/Header/Header';
import UpdateContact from './pages/UpdateContact/UpdateContact';
import ContactList from './pages/ContactList/ContactList';
import Home from './pages/Home/Home';

import { useState } from 'react';


function App() {
  const [stor, setStor] = useState(
    [
      
      {
        id: "96641c87-5bab-466f-8633-7dc67ane6cbb",
        name: "Viktoria Pryk",
        phone: "+380952531729",
        email: "vikavikazzz98@gmail.com",
        avatar: '21',
        gender: "women",
        status: "Work",
        favorite: false
      },
      {
        id: "96641c87-5bab-466f-8633-8dc69ane6cbb",
        name: "Viktoria Pryk",
        phone: "+380952531729",
        email: "vikavikazzz98@gmail.com",
        avatar: '21',
        gender: "women",
        status: "Work",
        favorite: true
      },
    ]
  );

  const handleNewContact = (NewContact) => {
    setStor(prevStor => [...prevStor, NewContact])

  }

  const handleDeleteContact = (id) => {
    setStor(prevStor => prevStor.filter(contact => contact.id !== id))

  }

  const handlerUpdateContact = (updatedContact) => {
    setStor(prevStor => {
      return prevStor.map(contact => {
        if (contact.id === updatedContact.id) {
          return { ...contact, ...updatedContact }

        }
        return contact
      })
    })
  }

  const handleToggleFavorite = (contactId) => {
    setStor((prevStor) =>
      prevStor.map((contact) =>
        contact.id === contactId ? { ...contact, favorite: !contact.favorite } : contact
      )
    );

  };

  return (
    <BrowserRouter>
      <Header>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/new-contact' element={<NewContact onNewContact={handleNewContact} />} />
          <Route path='/update-contact/:id' element={<UpdateContact stor={stor} />} />
          <Route path='/contact-list' element={<ContactList
            stor={stor}
            onUpdateContact={handlerUpdateContact}
            onDeleteContact={handleDeleteContact} 
            onToggleFavorite={handleToggleFavorite} />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Header>
    </BrowserRouter>
  );
}

export default App;

