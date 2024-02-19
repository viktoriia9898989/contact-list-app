import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NewContact from './pages/NewContact/NewContact';
import NotFound from './pages/NotFound/NotFound';
import Header from './components/Header/Header';
import UpdateContact from './pages/UpdateContact/UpdateContact';
import ContactList from './pages/ContactList/ContactList';
import Home from './pages/Home/Home';

import { Provider } from 'react-redux';
import store from './store/'


function App() {
  
  return (
    <Provider store={store}>
      <BrowserRouter>
      <Header>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/new-contact' element={<NewContact/>} />
          <Route path='/update-contact/:id' element={<UpdateContact/>} />
          <Route path='/contact-list' element={<ContactList />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Header>
    </BrowserRouter>

    </Provider>
  );
}

export default App;

