import { useState } from "react";
import styles from "./ContactForm.module.css";
import closeIcon from "../assets/icons/close.svg";

function ContactForm({ categories }) {
  const [showModal, setShowModal] = useState(false);
  const [contact, setContact] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    category: "",
  });

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
      console.log(contact);
      // add contact to cantacts list
    }
  };

  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setContact({ ...contact, [name]: value });
  };
  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className={`${styles.button} ${styles.adduser}`}
      >
        Add +
      </button>
      {showModal && (
        <div className={styles.contactForm}>
          <div className={styles.form}>
            <div className={styles.formHeader}>
              <h3>Add User</h3>
              <img
                onClick={() => setShowModal(false)}
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
                  onChange={changeHandler}
                />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="input-category">Category</label>
                <select
                  id="input-category"
                  name="category"
                  onChange={changeHandler}
                >
                  <option value="">Select category</option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.name}>{category.name}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className={styles.formButtons}>
              <button
                onClick={() => setShowModal(false)}
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
    </>
  );
}

export default ContactForm;
