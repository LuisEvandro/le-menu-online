import { useParams } from "react-router-dom";
import { ProductStyle } from "./styles";
import { Box, Container } from "@mui/material";

export default function Product() {
  const { handle } = useParams();

  console.log("handle => ", handle);
  
  return (
    <ProductStyle>
      <Container>
        <Box>
          <h1>{handle}</h1>
        </Box>
      </Container>
    </ProductStyle>
  );
}
