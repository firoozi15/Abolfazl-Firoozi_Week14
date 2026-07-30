import { useState } from "react";
import Contacts from "./components/Contacts";
import Header from "./components/Header";

function App() {
  const [categories, setCategories] = useState(["Family", "Friend", "Colleague"]);
  const [contacts, setContacts] = useState([
    {
      id: 1,
      firstName: "Ali",
      lastName: "Rezaei",
      email: "ali.rezaei@example.com",
      phone: "09121234567",
      category: "Family",
    },
    {
      id: 2,
      firstName: "Sara",
      lastName: "Mohammadi",
      email: "sara.mohammadi@example.com",
      phone: "09351234567",
      category: "Friend",
    },
    {
      id: 3,
      firstName: "Amir",
      lastName: "Karimi",
      email: "amir.karimi@example.com",
      phone: "09194567890",
      category: "Colleague",
    },
    {
      id: 4,
      firstName: "Negar",
      lastName: "Ahmadi",
      email: "negar.ahmadi@example.com",
      phone: "09901234567",
      category: "Family",
    },
  ]);

  return (
    <> 
      <Header />
      <Contacts contacts={contacts} />
    </>
  );
}

export default App;
