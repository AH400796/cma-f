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
  padding: 15px;

  text-align: left;
  text-decoration: none;
  color: #f85b12;
  font-weight: 600;

  &.active {
    color: #d8a331;
    text-decoration: underline;
  }

  &:hover,
  &:focus {
    color: #d8a331;
  }
`;
