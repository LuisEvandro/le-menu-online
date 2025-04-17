import { styled } from "styled-components";

export const ProductItemStyle = styled("div")`
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .product-title {
    font-size: 20px;
    line-height: 24px;
    font-weight: 500;
    color: ${(props) => props.theme.colors.black.default};


    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  .product-description {
    font-size: 16px;
    line-height: 20px;
    font-weight: 400;
    color: ${(props) => props.theme.colors.gray.gray100};
    
    margin-top: 8px;

    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  .product-price {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 8px;

    .price {
      font-size: 18px;
      line-height: 20px;
    }
    
    .current-price{
      font-weight: 700;
      color: ${(props) => props.theme.colors.secondary.default};
    }

    .old-price {
      font-size: 16px;
      font-weight: 400;
      color: ${(props) => props.theme.colors.gray.gray100};
      text-decoration: line-through;
    }
  }

  .product-content-description {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 8px;
    height: 215px;
  }

  .product-add-cart {
    background-color: ${(props) => props.theme.colors.primary.default};
    height: 50px;
  }

  .product-add-cart:hover {
    background-color: ${(props) => props.theme.colors.primary.ligth};
  }
`;
