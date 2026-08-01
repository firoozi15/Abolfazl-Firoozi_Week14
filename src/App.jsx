import { useState } from "react";
import Contacts from "./components/Contacts";
import Header from "./components/Header";

function App() {
  const deleteContact = (id) => {
    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(updatedContacts);
    localStorage.setItem("contacts", JSON.stringify(updatedContacts));
  };
  const addContact = (contact) => {
    let contactId =
      contacts.length === 0 ? 1 : contacts[contacts.length - 1].id + 1;
    const newContact = { ...contact, id: contactId };
    setContacts([...contacts, newContact]);
    localStorage.setItem("contacts", JSON.stringify([...contacts, newContact]));
  };
  const updateContact = (updatedContact) => {
    const newContacts = contacts.map((contact) => {
      if (contact.id === updatedContact.id) {
        const newContact = {
          ...contact,
          firstName: updatedContact.firstName,
          lastName: updatedContact.lastName,
          email: updatedContact.email,
          phone: updatedContact.phone,
          category: updatedContact.category,
        };
        return newContact;
      }
      return contact;
    });

    setContacts(newContacts);
    localStorage.setItem("contacts", JSON.stringify(newContacts));
  };
  const [categories, setCategories] = useState([
    {
      id: 1,
      name: "Family",
    },
    {
      id: 2,
      name: "Friend",
    },
    {
      id: 3,
      name: "Colleague",
    },
  ]);
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem("contacts")) || [];
  });

  return (
    <>
      <Header />
      <Contacts
        contacts={contacts}
        categories={categories}
        addContact={addContact}
        deleteContact={deleteContact}
        updateContact={updateContact}
      />
    </>
  );
}

export default App;
