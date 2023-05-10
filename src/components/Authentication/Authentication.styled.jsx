import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const AuthWrapper = styled.div`
  display: flex;
  gap: 20px;

  justify-content: space-between;
  align-items: center;
`;

export const StyledLink = styled(NavLink)`
  font-size: 16px;
  padding: 20px;

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
