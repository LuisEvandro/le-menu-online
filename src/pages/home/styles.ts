import styled from "styled-components";

export const HomeStyle = styled("div")`
  .home-header {
    width: 100%;
    padding-top: 15px;
    padding-bottom: 15px;
    background-color: ${(props) => props.theme.colors.primary.default};
  }

  .welcome-to-home {
    margin-top: 20px;
    margin-bottom: 20px;
    text-align: center;

    .search-bar {
      margin-top: 20px;
    }

    .image-logo {
      margin-bottom: 20px;
      width: 100%;
      height: 100%;
      max-width: 130px;
      max-height: 130px;
      border-radius: 50%;
    }
  }

  .products-list {
    margin-top: 20px;
    margin-bottom: 20px;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 10px;
  }
`;
