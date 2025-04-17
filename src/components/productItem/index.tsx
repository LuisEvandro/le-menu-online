import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { ProductItemStyle } from "./styles";
import { ProductItemProps } from "./types";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function ProductItem({
  title,
  description,
  image,
  price,
  oldPrice,
  handle
}: ProductItemProps) {

  const navigate = useNavigate();

  function handleClickAddCart() {
    toast.success(`${title} adicionado ao carrinho`);
  }

  function handleClickOpenProduct() {
    navigate(`/product/${handle}`);
  }

  return (
    <ProductItemStyle>
      <Card>
        <CardActionArea
          onClick={() => handleClickOpenProduct()}
        >
          <CardMedia
            component="img"
            height="200"
            image={image || "/imagemNaoDisponivel.jpg"}
            alt="imagem do produto"
          />
          
          <CardContent
            className="product-content-description"
          >
            <Typography className="product-title">
              {title}
            </Typography>
            <Typography className="product-description">
              {description}
            </Typography>

            <Box className="product-price">
              <Typography className="price current-price">
                R$ {price.toFixed(2)}
              </Typography>

              {oldPrice && (
                <Typography className="price old-price">
                  R$ {oldPrice?.toFixed(2)}
                </Typography>
              )}
            </Box>
          </CardContent>
        </CardActionArea>

        <CardActions
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Button 
            className="product-add-cart"
            size="medium"
            variant="contained"
            fullWidth
            onClick={() => handleClickAddCart()}
          >
            Adicionar ao carrinho
          </Button>
        </CardActions>
      </Card>
    </ProductItemStyle>
  );
}
