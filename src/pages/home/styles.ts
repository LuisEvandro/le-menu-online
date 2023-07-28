import styled from "styled-components";

export const HomeContainer = styled("div")`
  text-align: center;
  margin: 0 auto;
  background-color: ${(props) => props.theme.colors.primary.default};
  padding: 50px;

  p {
    padding: 35px 0 50px 50px;
  }
`;
