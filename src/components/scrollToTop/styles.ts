import { styled } from "styled-components";

export const ScrollToTopStyle = styled("div")`
  position: relative;

  .icon-position {
    display: flex;
    align-items: center;
    justify-content: center;

    position: fixed;
    bottom: 40px;
    right: 25px;
    z-index: 25;
  }
  .icon-style {
    background-color: ${(props) => props.theme.colors.primary.default};
    border: 2px solid ${(props) => props.theme.colors.white.default};
    border-radius: 50%;
    height: 50px;
    width: 50px;
    color: ${(props) => props.theme.colors.white.default};
    cursor: pointer;
    animation: movebtn 3s ease-in-out infinite;
    transition: all 0.5s ease-in-out;
  }
  .icon-style:hover {
    animation: none;
    background: ${(props) => props.theme.colors.primary.ligth};
    color: ${(props) => props.theme.colors.white.ligth};
    border: 2px solid ${(props) => props.theme.colors.primary.ligth};
  }
  @keyframes movebtn {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(10px);
    }
  }
`;
