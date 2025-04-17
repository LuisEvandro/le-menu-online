import { Badge, BadgeProps } from "@mui/material";
import styled from "styled-components";

export const MenuStyle = styled("div")`
  .menu-top {
    display: flex;
    justify-content: right;
    gap: 16px;

    .option {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 20px;

      .icon-link {
        margin-right: 5px;
      }
    }

    .cart-icon {
      color: ${(props) => props.theme.colors.white.default};
    }
  }
`;

export const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: 1,
    top: 13,
    fontWeight: 500,
    border: `2px solid ${theme.colors.primary.default}`,
    backgroundColor: theme.colors.white.default,
    color: theme.colors.black.default,
    padding: '0 4px',
  },
}));
