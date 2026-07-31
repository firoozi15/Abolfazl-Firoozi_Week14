import ContactForm from "./ContactForm";
import styles from "./Contacts.module.css";
import ContactList from "./ContactList";

function Contacts({ contacts, categories, addContact }) {
  return (
    <>
      <main className={styles.main}>
        <h1>Contacts</h1>
        <div className={styles.mainHeader}>
          <ContactForm categories={categories} addContact={addContact} />
        </div>
        <ContactList contacts={contacts} />
      </main>
    </>
  );
}

export default Contacts;
