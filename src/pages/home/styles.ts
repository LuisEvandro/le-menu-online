import styled from "styled-components";

export const HomeStyle = styled("div")`
  background-color: ${(props) => props.theme.colors.primary.default};
  padding-top: 15px;
  padding-bottom: 15px;

  .welcome-to-home {
    margin-top: 55px;
    margin-bottom: 20px;

    h3 {
      font-size: 48px;
      font-weight: bold;
    }

    h1 {
      font-size: 72px;
      font-weight: bold;
    }
  }
`;
