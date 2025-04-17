import { NavLink } from "react-router-dom";
import { MenuStyle, StyledBadge } from "./styles";
import { IconButton } from "@mui/material";
import { useState } from "react";

export default function MenuDefault() {
  const [cartItemCount, setCartItemCount] = useState(0);
  return (
    <MenuStyle>
      <section className="menu-top">
        <NavLink 
          className="option" 
          to={"/"} 
          title="Cardápio"
        >
          <span className="material-icons icon-link">restaurant_menu</span>
          Cardápio
        </NavLink>
        <NavLink
          className="option"
          to={"/cart"}
          title="Carrinho"
        >
          <IconButton aria-label="cart">
            <StyledBadge 
              badgeContent={cartItemCount} 
              color="secondary"
            >
              <span className="material-icons cart-icon">shopping_cart</span>
            </StyledBadge>
          </IconButton>
        </NavLink>
      </section>
    </MenuStyle>
  );
}
