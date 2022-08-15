import PropTypes from "prop-types";

import { ContactListItem, DeleteButton } from "./ContactItems.styled";

const ContactItems = ({ contacts, deleteContact }) => {
    return (
        <>
            {contacts.map(({ id, name, number }) => 
                <ContactListItem key={id}>
                    {name}: {number}
                    <DeleteButton onClick={() => deleteContact(id)}>Delete</DeleteButton>
                </ContactListItem>
            )}
        </>
    );
};

export default ContactItems;

ContactItems.propTypes = {
    contacts: PropTypes.array.isRequired,
    deleteContact: PropTypes.func.isRequired
};