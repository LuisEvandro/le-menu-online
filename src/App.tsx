import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DefaultTheme, ThemeProvider } from "styled-components";
import ToastReactStyled from "./components/toastStyled";
import Home from "./pages/home";
import GlobalStyle from "./styles/global";
import themeDefault from "./styles/theme/default";
import usePersistedState from "./utils/usePersistedState";
import Product from "./pages/product";
import Cart from "./pages/cart";

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>(
    "theme",
    themeDefault
  );

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ToastReactStyled />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:handle" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
