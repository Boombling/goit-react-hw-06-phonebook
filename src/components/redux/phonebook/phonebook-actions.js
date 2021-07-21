import types from '../phonebook/phonebook-types';
import shortid from 'shortid';

const addContact = ({ name, number }) => ({
    type: types.ADD,
    payload: {
        id: shortid.generate(),
        name,
        number
    }
});

const deletedContact = contactId => ({
    type: types.DELETE,
    payload: contactId
});

const changeFilter = value => ({
    type: types.CHANGE_FILTER,
    payload: value
})

export default { addContact, deletedContact, changeFilter };