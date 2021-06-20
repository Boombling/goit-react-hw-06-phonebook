import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactsList.module.css'

const ContactList = ({ contactList, onDeleteContact }) => (
    <>
        <ul className={styles.list}>
            {contactList.map(({ name, number, id }) => (
                <li key={id} className={styles.item}>                   
                    {name}: {number}{' '}
                    <button onClick={() => onDeleteContact(id)} className={styles.btn}>Delete</button>
                </li>
            ))}
        </ul>
    </>
)
ContactList.propTypes = {
    contactList: PropTypes.array.isRequired
}

export default ContactList;