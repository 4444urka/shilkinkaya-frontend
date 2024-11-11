import { grey } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    h1: {
      color: "#000",
      fontWeight: "bold",
      fontSize: "32px",
    },

    h2: {
      color: "#fff",
      fontWeight: "bold",
      fontSize: "30px",
      fontStyle: "italic",
    },

    h3: {
      color: "#000",
      fontSize: "30px",
      // fontStyle: "italic",
    },

    h6: {
      fontSize: "16px",
    },

    body1: {
      fontSize: "16px",
    },

    body2: {
      fontSize: "14px",
    },
  },

  palette: {
    background: {
      default: grey[100],
    },

    secondary: {
      main: "#fff",
    },

    primary: {
      main: "#000",
      dark: "#000",
    },
  },
});
