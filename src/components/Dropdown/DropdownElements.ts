import { FaTimes } from "react-icons/fa";
import { Link as ScrollLink } from 'react-scroll';
import styled from "styled-components";
import { theme } from "theme/theme";

export const CloseIcon = styled(FaTimes)`
  font-size: 2rem;
  color: ${theme.white};
  position: absolute;
  right: 2rem;
  top: 2rem;
  cursor: pointer;
`;
export const NavMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .menu-item + .menu-item {
    margin-top: 2rem;
  }
`;

export const NavLink = styled(ScrollLink)`
  color: ${theme.white};
  cursor: pointer;
  font-size: 1.7rem;

  &:hover {
    transition: 0.4s;
    color: ${theme.surface};
  }
`;

export const NavBtn = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5rem;
  font-size: 1.7rem;
`;