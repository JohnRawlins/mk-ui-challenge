import { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Grid,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import {
  validateNameField,
  validateEmailField,
  validatePhoneNumberField,
  validateContactMessageField,
} from "../../helpers/validate";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import logo from "../../logo.svg";
import ContactImage from "../ContactForm/img/messaging.svg";
import { useStyles } from "./styles";

const ContactForm = () => {
  const classes = useStyles();
  const [submissionStatus, setSubmissionStatus] = useState({
    response: "",
    isModalOpen: false,
  });
  const [formData, setFormData] = useState({
    firstName: {
      value: "",
      errorStatus: { errorFound: false, errorMessage: "" },
    },
    lastName: {
      value: "",
      errorStatus: { errorFound: false, errorMessage: "" },
    },
    emailAddress: {
      value: "",
      errorStatus: { errorFound: false, errorMessage: "" },
    },
    phoneNumber: {
      value: "",
      errorStatus: { errorFound: false, errorMessage: "" },
    },
    contactMessage: {
      value: "",
      errorStatus: { errorFound: false, errorMessage: "" },
    },
  });

  const handleFirstNameChange = ({ target }) => {
    const firstName = target.value;
    const errorStatus = validateNameField(firstName);
    const firstNameFieldData = { value: firstName, errorStatus };
    setFormData({ ...formData, firstName: firstNameFieldData });
  };

  const handleLastNameChange = ({ target }) => {
    const lastName = target.value;
    const errorStatus = validateNameField(lastName);
    const lastNameFieldData = { value: lastName, errorStatus };
    setFormData({ ...formData, lastName: lastNameFieldData });
  };

  const handleEmailChange = ({ target }) => {
    const emailAddress = target.value;
    const errorStatus = validateEmailField(emailAddress);
    const emailAddressFieldData = { value: emailAddress, errorStatus };
    setFormData({ ...formData, emailAddress: emailAddressFieldData });
  };

  const handlePhoneNumberChange = ({ target }) => {
    const phoneNumber = target.value;
    const errorStatus = validatePhoneNumberField(phoneNumber);
    const phoneNumberFieldData = { value: phoneNumber, errorStatus };
    setFormData({ ...formData, phoneNumber: phoneNumberFieldData });
  };

  const handleContactMessageChange = ({ target }) => {
    const contactMessage = target.value;
    const errorStatus = validateContactMessageField(contactMessage);
    const contactMessageFieldData = { value: contactMessage, errorStatus };
    setFormData({ ...formData, contactMessage: contactMessageFieldData });
  };

  const isSubmitButtonDisabled = () => {
    for (const field in formData) {
      const { value } = formData[field];
      const { errorFound } = formData[field].errorStatus;

      if (value === "" || errorFound === true) {
        return true;
      }
    }
    return false;
  };

  const handleSubmissionModal = () => {
    setSubmissionStatus({
      ...submissionStatus,
      response: "",
      isModalOpen: false,
    });
  };

  const handleFormSubmission = async (event) => {
    const { emailAddress, firstName, lastName, contactMessage } = formData;
    event.preventDefault();
    const requestBody = {
      to: emailAddress.value,
      subject: `${firstName.value} ${lastName.value}`,
      bodyText: contactMessage.value,
    };
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    };
    let response = await fetch(
      "https://e8l6trk52a.execute-api.us-east-1.amazonaws.com/prod/submit",
      requestOptions
    );

    const { statusMessage } = await response.json();

    setSubmissionStatus({
      ...submissionStatus,
      response: statusMessage,
      isModalOpen: true,
    });
  };

  return (
    <Container className={classes.contactForm}>
      <Grid className={classes.contactImageContainer} container>
        <Grid item className={classes.contactImageWrapper}>
          <img
            className={classes.contactImage}
            src={ContactImage}
            alt="Messaging on laptop"
          />
        </Grid>
      </Grid>
      <form className={classes.form} autoComplete="off">
        <Grid container>
          <Grid className={classes.logo} item xs={12}>
            <img src={logo} alt="logo" />
          </Grid>
          <Grid item xs={12}>
            <Typography
              className={classes.formHeading}
              variant="h5"
              component="h1"
              align="center"
            >
              Contact Us
            </Typography>
          </Grid>
          <Grid className={classes.nameFieldsContainer} container>
            <Grid
              className={`${classes.nameFieldWrapper} ${classes.firstNameFieldWrapper}`}
              item
            >
              <TextField
                className={classes.textField}
                label="First Name"
                variant="outlined"
                required
                fullWidth
                type="text"
                name="firstName"
                value={formData.firstName.value}
                onChange={handleFirstNameChange}
                error={formData.firstName.errorStatus.errorFound}
                helperText={formData.firstName.errorStatus.errorMessage}
              />
            </Grid>
            <Grid className={classes.nameFieldWrapper} item>
              <TextField
                className={classes.textField}
                label="Last Name"
                variant="outlined"
                required
                fullWidth
                type="text"
                name="lastName"
                value={formData.lastName.value}
                onChange={handleLastNameChange}
                error={formData.lastName.errorStatus.errorFound}
                helperText={formData.lastName.errorStatus.errorMessage}
              />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <TextField
              className={classes.textField}
              label="Email"
              variant="outlined"
              required
              fullWidth
              name="emailAddress"
              value={formData.emailAddress.value}
              onChange={handleEmailChange}
              error={formData.emailAddress.errorStatus.errorFound}
              helperText={formData.emailAddress.errorStatus.errorMessage}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              className={classes.textField}
              label="Phone Number"
              variant="outlined"
              required
              fullWidth
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber.value}
              onChange={handlePhoneNumberChange}
              error={formData.phoneNumber.errorStatus.errorFound}
              helperText={formData.phoneNumber.errorStatus.errorMessage}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              className={classes.textField}
              label="How can we help?"
              variant="outlined"
              multiline
              rows={3}
              required
              fullWidth
              name="contactMessage"
              value={formData.contactMessage.value}
              onChange={handleContactMessageChange}
              error={formData.contactMessage.errorStatus.errorFound}
              helperText={formData.contactMessage.errorStatus.errorMessage}
            />
          </Grid>
          <Grid className={classes.submitButtonContainer} item xs={12}>
            <Button
              className={classes.submitButton}
              type="submit"
              variant="contained"
              endIcon={<ChevronRightIcon />}
              color="primary"
              size="medium"
              disabled={isSubmitButtonDisabled()}
              onClick={handleFormSubmission}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
      <Dialog
        className={classes.submissionModal}
        open={submissionStatus.isModalOpen}
        onClose={handleSubmissionModal}
      >
        <DialogTitle>{"Submission Status"}</DialogTitle>
        <DialogContent>
          <DialogContentText>{submissionStatus.response}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmissionModal} color="primary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default ContactForm;
