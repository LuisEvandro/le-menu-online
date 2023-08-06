import { TextField, TextFieldProps } from "@mui/material";
import { styled } from "styled-components";

export const TextFieldStyled = styled(TextField)<TextFieldProps>`
  .MuiInputBase-root {
    color: ${(props) => props.theme.colors.gray.gray100};
    background-color: ${(props) => props.theme.colors.white.default};

    font-size: 1.1rem;
    font-weight: normal;
    font-family: "Roboto";
  }
  .MuiInputLabel-root {
    color: ${(props) => props.theme.colors.gray.gray50};

    &.Mui-focused {
      color: ${(props) => props.theme.colors.gray.gray50};
    }
  }

  .MuiOutlinedInput-root {
    border-radius: 5px;

    & fieldset {
      border-color: ${(props) => props.theme.colors.gray.gray50};
      border: none;
    }

    &:hover fieldset {
      border-color: ${(props) => props.theme.colors.gray.gray50};
    }

    &.Mui-focused fieldset {
      border-color: ${(props) => props.theme.colors.gray.gray50};
    }
  }

  .material-icons {
    color: ${(props) => props.theme.colors.gray.gray50};
  }
`;
