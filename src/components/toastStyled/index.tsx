import { ToastContainer, ToastContainerProps } from "react-toastify";
import styled from "styled-components";

const ToastReactStyled = styled(ToastContainer)<ToastContainerProps>`
  &&&.Toastify__toast-container {
  }
  .Toastify__toast {
    background-color: ${(props) => props.theme.colors.black.dark};
    color: ${(props) => props.theme.colors.white.ligth};
  }
  .Toastify__close-button {
    color: ${(props) => props.theme.colors.white.ligth};
  }
  .Toastify__toast-icon {
  }
  .Toastify__toast-body {
  }
  .Toastify__progress-bar {
  }
`;

export default ToastReactStyled;
