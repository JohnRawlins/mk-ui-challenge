import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => {
  return {
    contactForm: {
      display: "flex",
      flexGrow: 1,
      paddingTop: 40,
      paddingBottom: 30,
      [theme.breakpoints.up("sm")]: {
        paddingLeft: 50,
        paddingRight: 50,
      },
      [theme.breakpoints.up("md")]: {
        paddingLeft: 40,
        paddingRight: 40,
      },
    },
    form: {
      display: "flex",
      flexDirection: "column",
      [theme.breakpoints.up("md")]: {
        justifyContent: "center",
      },
    },
    contactImageContainer: {
      [theme.breakpoints.up("xs")]: {
        display: "none",
      },
      [theme.breakpoints.up("md")]: {
        display: "flex",
      },
    },
    contactImageWrapper: {
      display: "flex",
      flexGrow: 1,
      alignItems: "center",
      padding: "0px 10px",
    },
    contactImage: {
      flexGrow: 1,
    },
    textField: {
      marginBottom: 20,
      [`& fieldset`]: {
        borderRadius: 30,
      },
    },
    nameFieldsContainer: {
      flexDirection: "column",
      [theme.breakpoints.up("sm")]: {
        flexDirection: "row",
      },
    },
    nameFieldWrapper: {
      flexBasis: 0,
      flexGrow: 1,
    },
    firstNameFieldWrapper: {
      [theme.breakpoints.up("sm")]: {
        marginRight: 25,
      },
    },
    logo: { textAlign: "center", marginBottom: 30 },
    formHeading: {
      marginBottom: 30,
    },
    submitButton: {
      boxShadow: "none",
      borderRadius: 0,
      border: "1px solid white",
      justifyContent: "center",
      padding: "15px 10px",
      textTransform: "Capitalize",
      fontWeight: "700",
      width: "100%",
      fontSize: 16,
      [theme.breakpoints.up("sm")]: {
        maxWidth: 150,
        justifyContent: "space-between",
        padding: "8px 10px",
      },
    },
    submissionModal: {
      "& .MuiDialog-paper": {
        width: "100%",
      },
    },
    submitButtonContainer: {
      display: "flex;",
      justifyContent: "flex-end",
    },
  };
});
