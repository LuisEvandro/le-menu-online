import styled from "styled-components";

export const MenuStyle = styled("div")`
  .menu_top {
    display: flex;
    justify-content: right;

    .option {
      display: flex;
      justify-content: center;
      align-items: center;

      span {
        margin-right: 5px;
      }
    }

    .option_menu {
      margin-right: 25px;
    }
  }
`;
