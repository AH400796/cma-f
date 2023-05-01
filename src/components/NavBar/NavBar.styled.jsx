import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #f85b12;
`;

export const Title = styled.span`
  display: flex;
  gap: 0;
  height: 45px;
  font-size: 24px;
  line-height: 0.9;
`;
export const Crypto = styled.span`
  align-self: flex-start;
  border-bottom: 2px solid #f85b12;
`;
export const Markets = styled.span`
  align-self: center;
  border-bottom: 2px solid #f85b12;
`;

export const Arbitrage = styled.span`
  align-self: flex-end;
  border-bottom: 2px solid #f85b12;
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
