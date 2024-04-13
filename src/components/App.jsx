import { useEffect, useState } from "react";
import ContactList from "./ContactList/ContactList";
import ContactForm from "./ContactForm/ContactForm";
import SearchBox from "./SearchBox/SearchBox";
import { nanoid } from "nanoid";

import contactsArray from "../contacts.json";
import style from "./App.module.css";

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const contactsValue = localStorage.getItem("contacts");
    if (contactsValue !== null) {
      return JSON.parse(contactsValue);
    }
    return contactsArray;
  });

  const [filter, setFilter] = useState("");

  // Function, to create new contact
  const handleAddContact = (values, action) => {
    values = { ...values, id: nanoid(1) };
    setContacts((contacts) => {
      return [...contacts, values];
    });
    action.resetForm();
  };

  const currentContactItem = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  // Function to delete contact
  const deleteContact = (currentId) => {
    setContacts((contacts) => {
      return contacts.filter(({ id }) => id !== currentId);
    });
  };

  // Use hook to set data in locale storage
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className={style.app}>
      <h1 className={style.title}>Phonebook</h1>
      <ContactForm onFunc={handleAddContact} />
      <SearchBox value={filter} valueFunc={setFilter} />
      <ContactList contacts={currentContactItem} onDelete={deleteContact} />
    </div>
  );
};

export default App;
