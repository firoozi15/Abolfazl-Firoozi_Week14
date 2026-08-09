import ContactForm from "./Contacts/ContactForm";
import styles from "./Contacts.module.css";
import ContactList from "./Contacts/ContactList";
import { useState } from "react";

function Contacts({
  contacts,
  categories,
  selectedCategory,
  addContact,
  deleteContact,
  updateContact,
  setFilterCategory,
  addContactListForDelete,
  selectedContacts,
  deleteContactsSelected,
  showToastNotification,
}) {
  const [selectedContact, setSelectedContact] = useState(null);
  const selectContactForEdit = (contact) => setSelectedContact(contact);
  const clearSelectedContact = () => setSelectedContact(null);
  return (
    <main className={styles.main}>
      <h1>Contacts</h1>
      <div className={styles.mainHeader}>
        <ContactForm
          categories={categories}
          selectedCategory={selectedCategory}
          setFilterCategory={setFilterCategory}
          addContact={addContact}
          selectedContact={selectedContact}
          updateContact={updateContact}
          clearSelectedContact={clearSelectedContact}
          deleteContactsSelected={deleteContactsSelected}
          selectedContacts={selectedContacts}
          showToastNotification={showToastNotification}
        />
      </div>
      <ContactList
        contacts={contacts}
        deleteContact={deleteContact}
        selectContactForEdit={selectContactForEdit}
        addContactListForDelete={addContactListForDelete}
        selectedContacts={selectedContacts}
      />
    </main>
  );
}

export default Contacts;
