import { StyledLink, NavWrapper, Title } from './NavBar.styled';

import Navigation from 'components/Navigation';

export default function NavBar({ screenWidth }) {
  return (
    <NavWrapper>
      <StyledLink to="/">
        <Title>Crypto Markets Arbitrage</Title>
      </StyledLink>
      <Navigation />
    </NavWrapper>
  );
}
