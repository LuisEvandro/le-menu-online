import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: {
        default: string;
        ligth: string;
        dark: string;
      };

      secondary: {
        default: string;
        ligth: string;
        dark: string;
      };

      white: {
        default: string;
        ligth: string;
        dark: string;
      };

      black: {
        default: string;
        ligth: string;
        dark: string;
      };

      gray: {
        gray5: string;
        gray10: string;
        gray20: string;
        gray30: string;
        gray40: string;
        gray50: string;
        gray100: string;
      };
    };
  }
}
