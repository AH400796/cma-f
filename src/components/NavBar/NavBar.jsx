import {
  StyledLink,
  NavWrapper,
  Title,
  Crypto,
  Markets,
  Arbitrage,
} from './NavBar.styled';

import Navigation from 'components/Navigation';

export default function NavBar({ screenWidth }) {
  return (
    <NavWrapper>
      <StyledLink to="/">
        <Title>
          <Crypto>Crypto</Crypto>
          <Markets>Markets</Markets>
          <Arbitrage>Arbitrage</Arbitrage>
        </Title>
      </StyledLink>
      <Navigation />
    </NavWrapper>
  );
}
