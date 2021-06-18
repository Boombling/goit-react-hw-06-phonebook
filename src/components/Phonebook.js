import React, { Component } from 'react';
import shortid from 'shortid';

class PhoneBook extends Component {
    state = {
        contacts: [],
        name: '',
        number: ''
    }
    nameInputId = shortid.generate();
    numberInputId = shortid.generate();

    handleChange = evt => {
        const { name, value } = evt.currentTarget;
        this.setState({
            id: shortid.generate(),
            [name]: value,
        })
    };

    handleSubmit = evt => {
        evt.preventDefault();
        // console.log(`${this.state}`);
        this.props.onSubmit(this.state);

        this.reset();
    };

    reset = () => {
        this.setState({ name: '', number: '' })
    }

    addContact = ( name, number ) => {
        const contact = {
            id: shortid.generate(),
            name,
            number
        };

        this.setState(prevState => ({
            contacts: [contact, ...prevState.contacts]
        }))
    }

    render() {
        const { name, number } = this.state;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor={this.nameInputId}>
                        Name
                        <input
                            type="text"
                            name="name"
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                            required
                            value={name}
                            onChange={this.handleChange}
                            id={this.nameInputId}
                        />
                    </label>
                    <label htmlFor={this.numberInputId}>
                        Number
                        <input
                            type="tel"
                            name="number"
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                            required
                            value={number}
                            onChange={this.handleChange}
                            id={this.numberInputId}
                        />
                    </label>
                    <button type="submit">Add contact</button>
                </form>
            </div>
        )
    }
}

export default PhoneBook