import PropTypes from "prop-types";
import { ContactListContainer, ContactListItem, DeleteButton } from "./ContactList.styled";

const ContactList = ({ contacts, deleteContact }) => (
    <ContactListContainer>
        {contacts.map(({ id, name, number }) => {
            return <ContactListItem key={id}>
                {name}: {number}
                <DeleteButton onClick={() => deleteContact(id)}>Delete</DeleteButton>
            </ContactListItem>
        })}
    </ContactListContainer>
);

export default ContactList;

ContactList.propTypes = {
    contacts: PropTypes.array.isRequired,
    deleteContact: PropTypes.func.isRequired
};