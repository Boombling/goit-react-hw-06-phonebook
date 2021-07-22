import React, { Component } from 'react';
import PhoneBook from './components/Phonebook/Phonebook';
import ContactList from './components/ContactsList/ContactsList';
import FilterContact from './components/FilterContact/FilterContact';
import './App.css';

class App extends Component {   
  render() {
    return (
      <div>
        <h1 className='title'>PhoneBook</h1>
        <PhoneBook />
        <h2 className='title'>Contacts</h2>
        <FilterContact />
        <ContactList  />
      </div>
    )
  }
}

export default App;
