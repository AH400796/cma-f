import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #f85b12;
`;

export const Title = styled.span`
  display: block;
  text-align: center;
  font-size: 24px;
  line-height: 0.9;
`;

export const StyledLink = styled(NavLink)`
  padding: 8px;
  text-align: left;
  font-weight: 600;
  font-style: italic;
  text-decoration: none;
  color: #f85b12;
  border-radius: 4px;
`;
