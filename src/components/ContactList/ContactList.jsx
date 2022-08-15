import ContactItems from "components/ContactListItem/ContactItems";
import { ContactListContainer } from "./ContactList.styled";

const ContactList = ({ contacts, deleteContact }) => (
    <ContactListContainer>
        <ContactItems
            contacts={contacts}
            deleteContact={deleteContact}
        ></ContactItems>
    </ContactListContainer>
);

export default ContactList;