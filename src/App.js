import React, { Component } from 'react';
import PhoneBook from './components/Phonebook';

class App extends Component {
  state = {
    contacts: [],
  }
  formSubmitHandler = data => {
    console.log(data);
  }
  render (){
    return (
      <div>
        <PhoneBook onSubmit={this.formSubmitHandler}/>
      </div>
    )
  }
}

export default App;
