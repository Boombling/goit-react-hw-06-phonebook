import React, { Component } from 'react';
import PhoneBook from './components/Phonebook';
import ContactList from './components/ContactsList';

class App extends Component {
  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  }
  formSubmitHandler = (contact) => {
    const { contacts } = this.state;
    const name = contacts.map((contact) => contact.name);
    name.includes(contact.name) ? alert(`${contact.name} is already in contacts`) : this.setState((prevState) => (
      {
        contacts: [contact, ...prevState.contacts],
      }))
  }
  getContacts = () => {
    const { filter, contacts } = this.state;
    const lowerCase = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(lowerCase)
    );
  };

 
  render (){
    return (
      <div>
        <h1>PhoneBook</h1>
        <PhoneBook onSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <ContactList contactList={this.getContacts()}/>
      </div>
    )
  }
}

export default App;
