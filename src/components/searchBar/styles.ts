import { styled } from "styled-components";

export const SearchBarStyle = styled("div")`
  .container {
    display: flex;
    align-items: center;
    justify-content: center;

    .form-control {
      width: 100%;
      max-width: 750px;

      .search_food {
        font-size: 1.5rem;
      }
    }
  }
`;
