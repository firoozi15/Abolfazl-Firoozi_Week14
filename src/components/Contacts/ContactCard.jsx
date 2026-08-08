import { useState } from "react";

import userIcon from "../../assets/icons/user.svg";
import styles from "./ContactCard.module.css";
import ConfirmModal from "../ConfirmModal";

function ContactCard({
  contact,
  deleteContact,
  selectContactForEdit,
  addContactListForDelete,
  selectedContacts,
}) {
  const [showConfirm, setShowConfirm] = useState(false);
  const closeModal = () => setShowConfirm(false);
  return (
    <>
      <div key={contact.id} className={styles.contact}>
        <input
          type="checkbox"
          checked={selectedContacts.includes(contact.id)}
          onChange={(event) =>
            addContactListForDelete(event.target.checked, contact.id)
          }
        />
        <img src={userIcon} alt="userIcon" />
        <p className={styles.fullName}>
          {contact.firstName} {contact.lastName}
        </p>
        <p className={styles.category}>{contact.category}</p>
        <p className={styles.phone}>{contact.phone}</p>
        <p className={styles.email}>{contact.email}</p>
        <div className={styles.buttons}>
          <button
            onClick={() => selectContactForEdit(contact)}
            className={styles.edit}
          >
            Edit
          </button>
          <button
            onClick={() => {
              setShowConfirm(true);
            }}
            className={styles.delete}
          >
            Delete
          </button>
        </div>
      </div>
      {showConfirm && (
        <ConfirmModal
          closeModal={closeModal}
          message={"do you want to delete ?"}
          confirmFunction={() => {
            deleteContact(contact.id);
          }}
        />
      )}
    </>
  );
}

export default ContactCard;
