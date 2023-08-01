import { NavLink } from "react-router-dom";
import { MenuStyle } from "./styles";

export default function MenuDefault() {
  return (
    <MenuStyle>
      <section className="menu_top">
        <NavLink className="option option_menu" to={"/"} title="Cardápio">
          <span className="material-icons">restaurant_menu</span>
          Cardápio
        </NavLink>
        <NavLink
          className="option option_purchase"
          to={"/purchase"}
          title="Pedidos"
        >
          <span className="material-icons">shopping_bag</span>
          Pedidos
        </NavLink>
      </section>
    </MenuStyle>
  );
}
