import { useState } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";

import "./style.css";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }
`;

const theme = {
  colors: {
    primary: "#E5E5E5",
  },
  body: "#FFF",
  text: "#333",
};

const darkTheme = {
  colors: {
    primary: "red",
  },
  body: "#363537",
  text: "#fff",
  
};

function App({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <ThemeProvider theme={darkMode ? darkTheme : theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>

      <div className="sec_btn">
        <input
          type="checkbox"
          id="checkbox1"
          onChange={() => setDarkMode(!darkMode)}
        />
        <label htmlFor="checkbox1"></label>
      </div>
    </>
  );
}

export default App;
