import { Component } from 'react';
import PropTypes from "prop-types";
import { Form, Input, Label, SubmitButton } from './ContactForm.styled';

class ContactForm extends Component {
  state = {
    name: '',
    number: ''
  }

  onInputChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  onFormSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state);
    this.reset();
  }

  reset = () => {
    this.setState({ name: '', number: '' })
  }

  render() {
    const { name, number } = this.state;

    return (
        <Form onSubmit={this.onFormSubmit}>
            <Label>Name:<Input
                type="text"
                name="name"
                value={name}
                onChange={this.onInputChange}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
            /></Label>
            <Label>Number:<Input
                type="tel"
                name="number"
                value={number}
                onChange={this.onInputChange}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
            /></Label>
            <SubmitButton type='submit'>Add contact</SubmitButton>
        </Form>
    )
  }
};

export default ContactForm;

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};