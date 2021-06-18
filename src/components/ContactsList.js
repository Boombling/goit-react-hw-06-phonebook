import React from 'react';
import PropTypes from 'prop-types';



const ContactList = ({ contactList, onDeleteContact }) => (
    <>
        <ul>
            {contactList.map(({ name, number, id }) => (
                <li key={id}>                   
                    {name}: {number}{' '}
                    <button onClick={() => onDeleteContact(id)}>Delete</button>
                </li>
            ))}
        </ul>
    </>
)
ContactList.propTypes = {
    contactList: PropTypes.array.isRequired
}

export default ContactList;