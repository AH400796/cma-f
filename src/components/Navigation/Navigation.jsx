import { StyledLink, NavLinks } from './Navigation.styled';

export default function Navigation() {
  return (
    <NavLinks>
      <StyledLink to="/register">Sign up</StyledLink>
      <StyledLink to="/login">Log in</StyledLink>
      {/* <StyledLink to="/products">Наша продукція</StyledLink>
      <StyledLink to="/contacts">Як нас знайти</StyledLink> */}
    </NavLinks>
  );
}
