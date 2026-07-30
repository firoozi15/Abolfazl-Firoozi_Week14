import styles from "./Contacts.module.css";
import ContactList from "./ContactList";

function Contacts({ contacts }) {
  return (
    <>
      <main className={styles.main}>
        <h1>Contacts</h1>

        <ContactList contacts={contacts} />
      </main>
    </>
  );
}

export default Contacts;
