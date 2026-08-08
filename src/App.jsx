import { useState } from "react";

import Contacts from "./components/Contacts";
import Header from "./components/Header";
import ConfirmModal from "./components/ConfirmModal";
import categories from "./constants/categories.js";

function App() {
  const [showConfirm, setShowConfirm] = useState(false);
  const [selectedContacts, setSelectedContacts] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem("contacts")) || [];
  });
  const [selectedCategory, setSelectedCategory] = useState("All");

  const saveToLocalStorage = (contacts) => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  };

  const deleteContactsSelected = () => {
    if (showConfirm === false) setShowConfirm(true);
    else {
      const updatedContacts = contacts.filter(
        (contact) => !selectedContacts.includes(contact.id),
      );

      setContacts(updatedContacts);
      localStorage.setItem("contacts", JSON.stringify(updatedContacts));
      clearSearch();
    }
  };

  const addContactListForDelete = (checked, id) => {
    if (checked) setSelectedContacts((prev) => [...prev, id]);
    else
      setSelectedContacts(
        selectedContacts.filter((contactId) => contactId !== id),
      );
  };

  const setFilterCategory = (name) => {
    setSelectedCategory(name);
  };

  const filterByCategory = (name) => {
    return contacts.filter((contact) => {
      if (name === "All") return true;

      return contact.category === name;
    });
  };

  const deleteContact = (id) => {
    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(updatedContacts);
    saveToLocalStorage(updatedContacts);
    clearSearch();
  };
  const addContact = (contact) => {
    let contactId =
      contacts.length === 0 ? 1 : contacts[contacts.length - 1].id + 1;
    const newContact = { ...contact, id: contactId };
    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
    saveToLocalStorage(newContacts);
    clearSearch();
  };
  const updateContact = (updatedContact) => {
    const newContacts = contacts.map((contact) => {
      if (contact.id === updatedContact.id) {
        return updatedContact;
      }
      return contact;
    });

    setContacts(newContacts);
    saveToLocalStorage(newContacts);
    clearSearch();
  };

  const searchContact = (searchValue) => {
    setSearchValue(searchValue);
  };

  const filteredContacts = (searchValue) => {
    const value = searchValue.toLowerCase();

    return contacts.filter((contact) => {
      return (
        contact.firstName.toLowerCase().includes(value) ||
        contact.lastName.toLowerCase().includes(value) ||
        contact.email.toLowerCase().includes(value) ||
        contact.phone.includes(searchValue)
      );
    });
  };

  const clearSearch = () => {
    setSearchValue("");
    setFilterCategory("All");
    setSelectedContacts([]);
  };

  let displayedContacts;

  if (searchValue) {
    displayedContacts = filteredContacts(searchValue);
  } else {
    displayedContacts = filterByCategory(selectedCategory);
  }

  return (
    <>
      <Header
        searchContact={searchContact}
        searchValue={searchValue}
        clearSearch={clearSearch}
      />
      <Contacts
        contacts={displayedContacts}
        addContact={addContact}
        deleteContact={deleteContact}
        updateContact={updateContact}
        categories={categories}
        setFilterCategory={setFilterCategory}
        addContactListForDelete={addContactListForDelete}
        selectedContacts={selectedContacts}
        deleteContactsSelected={deleteContactsSelected}
        selectedCategory={selectedCategory}
      />
      {showConfirm && (
        <ConfirmModal
          confirmFunction={deleteContactsSelected}
          message={`do you want to delete ${selectedContacts.length} contact ?`}
          closeModal={() => {
            setShowConfirm(false);
          }}
        />
      )}
    </>
  );
}

export default App;
