import { useState } from "react";
import userIcon from "../assets/icons/user.svg";
import ConfirmModal from "./ConfirmModal";
import styles from "./ContactList.module.css";

function ContactList({ contacts, deleteContact }) {
  const [showConfirm, setShowConfirm] = useState(false);
  const [selectedContactId, setSelectedContactId] = useState(0);
  const closeModal = () => setShowConfirm(false);
  if (contacts.length < 1) {
    return (
      <div className={styles.contactsList}>
        <p className={styles.noMember}>No contacts found</p>
      </div>
    );
  }
  return (
    <div className={styles.contactsList}>
      {contacts.map((contact) => {
        return (
          <div key={contact.id} className={styles.contact}>
            <input type="checkbox" />
            <img src={userIcon} alt="userIcon" />
            <p className={styles.fullName}>
              {contact.firstName} {contact.lastName}
            </p>
            <p className={styles.category}>{contact.category}</p>
            <p className={styles.phone}>{contact.phone}</p>
            <p className={styles.email}>{contact.email}</p>
            <div className={styles.buttons}>
              <button className={styles.edit}>Edit</button>
              <button
                onClick={() => {
                  setSelectedContactId(contact.id);
                  setShowConfirm(true);
                }}
                className={styles.delete}
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
      {showConfirm && (
        <ConfirmModal
          closeModal={closeModal}
          message={"do you want to delete ?"}
          confirmFunction={() => {
            deleteContact(selectedContactId);
          }}
        />
      )}
    </div>
  );
}

export default ContactList;
