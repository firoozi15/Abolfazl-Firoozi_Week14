import { useState } from "react";
import Contacts from "./components/Contacts";
import Header from "./components/Header";

function App() {
  const addContact = (contact) => {
    let contactId =
      contacts.length === 0 ? 1 : contacts[contacts.length - 1].id + 1;
    const newContact = { ...contact, id: contactId };
    setContacts([...contacts, newContact]);
    localStorage.setItem("contacts", JSON.stringify([...contacts, newContact]));
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
      />
    </>
  );
}

export default App;
