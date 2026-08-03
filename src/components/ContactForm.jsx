import { useEffect, useState } from "react";
import styles from "./ContactForm.module.css";
import closeIcon from "../assets/icons/close.svg";
import ConfirmModal from "./ConfirmModal";
import CategoryButtons from "./CategoryButtons";

function ContactForm({
  categories,
  addContact,
  selectedContact,
  updateContact,
  clearSelectedContact,
  setFilterCategory,
  deleteContactsSelected,
  selectedContacts,
}) {
  const [isClosing, setisClosing] = useState(false);
  const [showConfirm, setshowConfirm] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [contact, setContact] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    category: "",
  });
  const closeModal = () => setshowConfirm(false);

  useEffect(() => {
    if (selectedContact) {
      setContact({
        id: selectedContact.id,
        firstName: selectedContact.firstName,
        lastName: selectedContact.lastName,
        email: selectedContact.email,
        phone: selectedContact.phone,
        category: selectedContact.category,
      });
      setShowModal(true);
    }
  }, [selectedContact]);

  const saveDataHandler = () => {
    if (
      !contact.firstName.trim() ||
      !contact.lastName.trim() ||
      !contact.email.trim() ||
      !contact.phone.trim() ||
      !contact.category
    )
      alert("Please fill in all fields.");
    else if (contact.firstName.length < 4 || contact.lastName.length < 4)
      alert("firstName , lastName must be at least 4 characters long.");
    else if (!contact.email.includes("@") || contact.email.length <= 8)
      alert("Please enter a valid email address.");
    else {
      selectedContact ? updateContact(contact) : addContact(contact);
      setisClosing(true);
      clearSelectedContact();
      setContact({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        category: "",
      });
    }
  };

  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setContact({ ...contact, [name]: value });
  };
  return (
    <>
      <CategoryButtons
        categories={categories}
        setFilterCategory={setFilterCategory}
      />
      <div className={styles.buttons}>
        <button
          onClick={() => deleteContactsSelected(selectedContacts)}
          className={`${styles.button} ${styles.deleteUser} ${selectedContacts.length !== 0 && styles.showDeleteButton}`}
        >
          delete selected
        </button>
        <button
          onClick={() => setShowModal(true)}
          className={`${styles.button} ${styles.adduser}`}
        >
          Add +
        </button>
      </div>
      {showModal && (
        <div
          onAnimationEnd={() => {
            isClosing && setShowModal(false);
            setisClosing(false);
          }}
          className={`${styles.contactForm} ${isClosing && styles.hide}`}
        >
          <div className={styles.form}>
            <div className={styles.formHeader}>
              <h3>{selectedContact ? "Edit User" : "Add User"}</h3>
              <img
                onClick={() => setshowConfirm(true)}
                src={closeIcon}
                alt="closeIcon"
                className={styles.closeIcon}
              />
            </div>
            <div className={styles.formMain}>
              <div className={styles.inputGroup}>
                <label htmlFor="input-firstName">First Name</label>
                <input
                  id="input-firstName"
                  type="text"
                  placeholder="Abolfazl"
                  name="firstName"
                  value={contact.firstName}
                  onChange={changeHandler}
                />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="input-lastName">Last Name</label>
                <input
                  id="input-lastName"
                  type="text"
                  placeholder="Firoozi"
                  name="lastName"
                  value={contact.lastName}
                  onChange={changeHandler}
                />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="input-email">Email</label>
                <input
                  id="input-email"
                  type="email"
                  placeholder="example@gmail.com"
                  name="email"
                  value={contact.email}
                  onChange={changeHandler}
                />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="input-phoneNumber">phone</label>
                <input
                  id="input-phoneNumber"
                  type="number"
                  placeholder="09111111111"
                  name="phone"
                  value={contact.phone}
                  onChange={changeHandler}
                />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="input-category">Category</label>
                <select
                  id="input-category"
                  name="category"
                  value={contact.category}
                  onChange={changeHandler}
                >
                  <option value="">Select category</option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.name}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className={styles.formButtons}>
              <button
                onClick={() => setshowConfirm(true)}
                className={styles.cancelButton}
              >
                Cancel
              </button>
              <button
                onClick={() => saveDataHandler()}
                className={styles.saveButton}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
      {showConfirm && (
        <ConfirmModal
          closeModal={closeModal}
          message={"Do you want to cancel editing?"}
          confirmFunction={() => {
            setisClosing(true);
            clearSelectedContact();
            setContact({
              firstName: "",
              lastName: "",
              email: "",
              phone: "",
              category: "",
            });
          }}
        />
      )}
    </>
  );
}

export default ContactForm;
