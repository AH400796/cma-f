import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #ff7b3e;
`;

export const LinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
`;

export const StyledLogoLink = styled(NavLink)``;

export const LogoIcon = styled.img`
  width: 250px;
`;

export const StyledLink = styled(NavLink)`
  font-size: 16px;
  padding: 30px 0;

  text-align: left;
  text-decoration: none;
  color: #ff7b3e;
  font-weight: 600;

  &.active {
    color: #f1e892;
    text-decoration: underline;
  }

  &:hover,
  &:focus {
    color: #f1e892;
  }
`;
