import { useState } from "react";
import Contacts from "./components/Contacts";
import Header from "./components/Header";
import ConfirmModal from "./components/ConfirmModal";

function App() {
  const [showConfirm, setShowConfirm] = useState(false);
  const [selectedContacts, setSelectedContacts] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [searchContacts, setSearchContacts] = useState([]);
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem("contacts")) || [];
  });
  const [filteredCategoryContacts, setFilteredCategoryContacts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
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

  const deleteContactsSelected = () => {
    if (showConfirm === false) setShowConfirm(true);
    else {
      const updatedContacts = contacts.filter((contact) => {
        if (!selectedContacts.includes(contact.id)) return contact;
      });

      setContacts(updatedContacts);
      localStorage.setItem("contacts", JSON.stringify(updatedContacts));
      clearSearch();
    }
  };

  const addContactListForDelete = (checked, id) => {
    if (checked) setSelectedContacts([...selectedContacts, id]);
    else
      setSelectedContacts(
        selectedContacts.filter((contactId) => contactId !== id),
      );
  };

  const setFilterCategory = (name) => {
    setSelectedCategory(name);
    setFilteredCategoryContacts(filterByCategory(name));
  };

  const filterByCategory = (name) => {
    return contacts.filter((contact) => {
      if (contact.category === name) {
        console.log(contact);
        return true;
      }
      if (name === "All") {
        console.log(contact);
        return true;
      }
    });
  };

  const deleteContact = (id) => {
    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(updatedContacts);
    localStorage.setItem("contacts", JSON.stringify(updatedContacts));
    clearSearch();
  };
  const addContact = (contact) => {
    let contactId =
      contacts.length === 0 ? 1 : contacts[contacts.length - 1].id + 1;
    const newContact = { ...contact, id: contactId };
    setContacts([...contacts, newContact]);
    localStorage.setItem("contacts", JSON.stringify([...contacts, newContact]));
    clearSearch();
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
    clearSearch();
  };

  const searchContact = (searchValue) => {
    console.log("search:", searchValue);
    setSearchValue(searchValue);
    setSearchContacts(filteredContacts(searchValue));
  };

  const filteredContacts = (searchValue) => {
    return contacts.filter((contact) => {
      console.log("contact:", contact.firstName);
      console.log("search:", searchValue);
      console.log(contact.firstName === searchValue);
      if (contact.firstName.toLowerCase().includes(searchValue.toLowerCase()))
        return contact;
      if (contact.lastName.toLowerCase().includes(searchValue.toLowerCase()))
        return contact;
      if (contact.email.toLowerCase().includes(searchValue.toLowerCase()))
        return contact;
      if (contact.phone.includes(searchValue)) return contact;
    });
  };

  const clearSearch = () => {
    setSearchContacts([]);
    setSearchValue("");
    setFilterCategory("All");
    setSelectedContacts([]);
  };

  return (
    <>
      <Header
        searchContact={searchContact}
        searchValue={searchValue}
        clearSearch={clearSearch}
      />
      <Contacts
        contacts={
          searchValue
            ? searchContacts
            : selectedCategory === "All"
              ? contacts
              : filteredCategoryContacts
        }
        addContact={addContact}
        deleteContact={deleteContact}
        updateContact={updateContact}
        categories={categories}
        setFilterCategory={setFilterCategory}
        addContactListForDelete={addContactListForDelete}
        selectedContacts={selectedContacts}
        deleteContactsSelected={deleteContactsSelected}
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
