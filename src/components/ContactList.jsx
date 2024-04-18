import React from "react";
import ContactItem from "./ContactItem";

function ContactList({ contacts, onDelete }) {
    return (
        <div className="contact-list">
            {contacts.map((contact) => (
                <ContactItem key={contact.id} id={contact.id} onDelete={onDelete} {...contact} /> ///... --> spread syntax, all elements of contact array is included
            ))}
        </div>
    );
}

export default ContactList;
