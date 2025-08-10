// theme.js
import { createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark", // Switches all components to dark mode
    primary: {
      main: "#ffffffff", // Your tomato color
    },
    background: {
      default: "#121212", // Page background
      paper: "#1e1e1e",   // Card background
    },
    text: {
      primary: "#ffffff",
      secondary: "#aaaaaa",
    },
  },
});

export default darkTheme;
