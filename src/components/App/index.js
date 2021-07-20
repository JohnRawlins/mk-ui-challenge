import ContactForm from "../ContactForm";
import { createTheme, ThemeProvider } from "@material-ui/core";

const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(0, 148, 202)",
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <ContactForm />
      </div>
    </ThemeProvider>
  );
};

export default App;
