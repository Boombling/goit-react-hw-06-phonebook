import React, { Component } from 'react';
import PhoneBook from './components/Phonebook';
import ContactList from './components/ContactsList';
import FilterContact from './components/FilterContact';

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
    const { contacts, filter } = this.state;
    const lowerCase = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(lowerCase)
    );
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  }

  getVisibleContact = () => {
    const { filter, contacts } = this.state;
    
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact => contact.text.toLowerCase().includes(normalizedFilter));
  }
  deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter( contact => contact.id !== contactId)
    }))
  }
  
  render() {
    return (
      <div>
        <h1>PhoneBook</h1>
        <PhoneBook onSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <FilterContact value={this.state.filter} onChange={this.changeFilter}/>
        <ContactList contactList={this.getContacts()} onDeleteContact={this.deleteContact}/>
      </div>
    )
  }
}

export default App;
