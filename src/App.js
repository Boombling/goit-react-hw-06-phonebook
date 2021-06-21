import React, { Component } from 'react';
import PhoneBook from './components/Phonebook/Phonebook';
import ContactList from './components/ContactsList/ContactsList';
import FilterContact from './components/FilterContact/FilterContact';
import './App.css';

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

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  }

  getVisibleContact = () => {
    const { filter, contacts } = this.state;
    
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  }
  deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter( contact => contact.id !== contactId)
    }))
  }
  
    componentDidMount() {
      const contact = localStorage.getItem('contacts');
      const parsedContacts = JSON.parse(contact);

      if (parsedContacts) {
      this.setState({contacts: parsedContacts})
      }
    }

   componentDidUpdate(prevProps, prevState) {
     if (this.state.contacts !== prevState.contacts) {
          localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
        }
    }
  render() {
    return (
      <div>
        <h1 className='title'>PhoneBook</h1>
        <PhoneBook onSubmit={this.formSubmitHandler}  />
        <h2 className='title'>Contacts</h2>
        <FilterContact value={this.state.filter} onChange={this.changeFilter}/>
        <ContactList contactList={this.getVisibleContact()} onDeleteContact={this.deleteContact} />
      </div>
    )
  }
}

export default App;
