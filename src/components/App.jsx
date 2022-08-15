import { Component } from 'react';
import { nanoid } from "nanoid";
import styles from "./App.module.css";
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  }

  onHandleSubmit = ({name, number}) => {
    const isInContacts = this.state.contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase());

    if (isInContacts) {
      alert(`${name} is already in contacts`);
    } else {
      const contact = {
        name: name,
        number: number,
        id: nanoid(),
      };

      this.setState(prevState => ({
        contacts: [contact, ...prevState.contacts]
      }));
    };
  }

  onFilterChange = (newValue) => {
    this.setState({ filter: newValue });
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { filter } = this.state;
    const contacts = this.filterContacts();

    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Phonebook</h1>
        <ContactForm onSubmit={ this.onHandleSubmit } />
        <h2 className={styles.title}>Contacts</h2>
        <Filter currentValue={filter} onChange={ this.onFilterChange } />
        <ContactList contacts={contacts} deleteContact={ this.deleteContact }/>
      </div>
    )
  }
};

export default App;

