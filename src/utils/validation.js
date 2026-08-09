export const validateContact = (contact) => {
  if (
    !contact.firstName.trim() ||
    !contact.lastName.trim() ||
    !contact.email.trim() ||
    !contact.phone.trim() ||
    !contact.category
  )
    return "Please fill in all fields.";
  else if (contact.firstName.length < 4 || contact.lastName.length < 4)
    return "Name must be longer than 4 characters.";
  else if (!contact.email.includes("@") || contact.email.length <= 8)
    return "Please enter a valid email address.";
  else {
    return null;
  }
};
