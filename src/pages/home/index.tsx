import { Container } from "@mui/material";
import MenuDefault from "../../components/header/menu";
import ScrollToTop from "../../components/scrollToTop";
import { HomeStyle } from "./styles";

export default function Home() {
  return (
    <HomeStyle>
      <Container>
        <MenuDefault />
        <ScrollToTop />
      </Container>
    </HomeStyle>
  );
}
