import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DefaultTheme, ThemeProvider } from "styled-components";
import Home from "./pages/home";
import GlobalStyle from "./styles/global";
import themeDefault from "./styles/theme/default";
import usePersistedState from "./utils/usePersistedState";

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>(
    "theme",
    themeDefault
  );

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
