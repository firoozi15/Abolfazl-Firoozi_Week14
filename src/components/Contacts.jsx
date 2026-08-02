import ContactForm from "./ContactForm";
import styles from "./Contacts.module.css";
import ContactList from "./ContactList";
import { useState } from "react";

function Contacts({
  contacts,
  categories,
  addContact,
  deleteContact,
  updateContact,
}) {
  const [selectedContact, setSelectedContact] = useState(null);
  const selectContactForEdit = (contact) => setSelectedContact(contact);
  const clearSelectedContact = () => setSelectedContact(null);
  return (
    <>
      <main className={styles.main}>
        <h1>Contacts</h1>
        <div className={styles.mainHeader}>
          <ContactForm categories={categories} addContact={addContact} selectedContact={selectedContact} updateContact={updateContact} clearSelectedContact={clearSelectedContact} />
        </div>
        <ContactList
          contacts={contacts}
          deleteContact={deleteContact}
          selectContactForEdit={selectContactForEdit}
        />
      </main>
    </>
  );
}

export default Contacts;
