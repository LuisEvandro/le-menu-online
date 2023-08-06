import { Container } from "@mui/material";
import MenuDefault from "../../components/header/menu";
import ScrollToTop from "../../components/scrollToTop";
import SearchBar from "../../components/searchBar";
import { HomeStyle } from "./styles";

export default function Home() {
  return (
    <HomeStyle>
      <Container>
        <MenuDefault />
        <div className="welcome-to-home">
          <h3 className="font-title">Olá</h3>
          <h1 className="font-title">Seja Bem-vindo(a)</h1>

          <SearchBar />
        </div>
        <ScrollToTop />
      </Container>
    </HomeStyle>
  );
}
