export const validateNameField = (name) => {
  const regex = /^[a-zA-Z]+(([',.\- ][a-zA-Z ])?[a-zA-Z]*)*$/gi;
  const matchesFound = name.match(regex);
  let fieldError = { errorFound: false, errorMessage: "" };
  if (!name) {
    fieldError = {
      errorFound: true,
      errorMessage: "Please enter a name",
    };
  } else if (!matchesFound) {
    fieldError = {
      errorFound: true,
      errorMessage: "Please enter a valid name or use a nickname",
    };
  }
  return fieldError;
};

export const validateEmailField = (email) => {
  const regex =
    /^([a-zA-Z0-9]+(?:[.-]?[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:[.-]?[a-zA-Z0-9]+)*\.[a-zA-Z]{2,7})$/gi;
  const matchesFound = email.match(regex);
  let fieldError = { errorFound: false, errorMessage: "" };
  if (!email) {
    fieldError = {
      errorFound: true,
      errorMessage: "Please enter an email address",
    };
  } else if (!matchesFound) {
    fieldError = {
      errorFound: true,
      errorMessage: "Please enter a valid email address",
    };
  }
  return fieldError;
};

export const validatePhoneNumberField = (phoneNumber) => {
  const regex = /^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/g;
  const matchesFound = phoneNumber.match(regex);
  let fieldError = { errorFound: false, errorMessage: "" };
  if (!phoneNumber) {
    fieldError = {
      errorFound: true,
      errorMessage: "Please enter a phone number",
    };
  } else if (!matchesFound) {
    fieldError = {
      errorFound: true,
      errorMessage: "Please enter a valid phone number",
    };
  }
  return fieldError;
};

export const validateContactMessageField = (contactMessage) => {
  let fieldError = { errorFound: false, errorMessage: "" };
  if (!contactMessage) {
    fieldError = { errorFound: true, errorMessage: "A message is required" };
  }
  return fieldError;
};
