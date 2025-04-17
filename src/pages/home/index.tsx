import { Box, Container } from "@mui/material";
import MenuDefault from "../../components/header/menu";
import ScrollToTop from "../../components/scrollToTop";
import SearchBar from "../../components/searchBar";
import { HomeStyle } from "./styles";
import ProductItem from "../../components/productItem";

export default function Home() {
  const companyName = "Vixe Bar Marilia";
  const companyLogo = "/vixeLogo.png";

  return (
    <HomeStyle>
      <Box className="home-header">
        <Container>
          <MenuDefault />
          <Box className="welcome-to-home">
            <img
              className="image-logo"
              src={companyLogo}
              alt={companyName + " logo"}
            />
            
            <h1 className="font-title">{companyName}</h1>
            
            <Box className="search-bar">
              <SearchBar iconPosition="start" />
            </Box>
          </Box>
          <ScrollToTop />
        </Container>
      </Box>

      <Container>
        <Box className="products-list">
          <ProductItem
            title="Pão de Alho com Queijo Coalho e Goiabada Pão de Alho com Queijo Coalho e Goiabada Pão de Alho com Queijo Coalho e Goiabada"
            description="Pão de alho acompanhado de queijo coalho e goiabada Pão de alho acompanhado de queijo coalho e goiabada Pão de alho acompanhado de queijo coalho e goiabada Pão de alho acompanhado de queijo coalho e goiabada Pão de alho acompanhado de queijo coalho e goiabada"
            image="https://dg-media.com.br/cardapio/produto_150428.webp?v=1817"
            price={49.90}
            oldPrice={59.90}
            handle="pao-de-alho-com-queijo-coalho-e-goiabada"
            categories={[
              {
                id: 1,
                name: "Porções"
              },
              {
                id: 2,
                name: "Entradas"
              }
            ]}
          />
          <ProductItem
            title="Torresmo de Boteco"
            description="140g de Torresmo crocante. Acompanha limão."
            image="https://dg-media.com.br/cardapio/produto_150393.webp?v=8544"
            price={19.90}
            handle="torresmo-de-boteco"
            categories={[
              {
                id: 1,
                name: "Porções"
              },
              {
                id: 2,
                name: "Entradas"
              }
            ]}
          />
          <ProductItem
            title="Stick de Mussarela"
            description="Stick de mussarela empanada na farinha panko. Acompanha geleia de pimenta."
            image="https://dg-media.com.br/cardapio/produto_150431.webp?v=1626"
            price={49.90}
            oldPrice={59.90}
            handle="stick-de-mussarela"
            categories={[
              {
                id: 1,
                name: "Porções"
              },
              {
                id: 2,
                name: "Entradas"
              }
            ]}
          />
        </Box>
      </Container>
    </HomeStyle>
  );
}
