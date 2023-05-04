import { useContext } from 'react';
import { AuthContext } from '../App/App';
import {
  StyledLink,
  NavWrapper,
  Title,
  Crypto,
  Markets,
  Arbitrage,
} from './NavBar.styled';

import Authentication from 'components/Authentication';
import UserMenu from 'components/UserMenu';

export default function NavBar({ screenWidth }) {
  const { isLoggedIn, userEmail } = useContext(AuthContext);

  return (
    <NavWrapper>
      <StyledLink to="/">
        <Title>
          <Crypto>Crypto</Crypto>
          <Markets>Markets</Markets>
          <Arbitrage>Arbitrage</Arbitrage>
        </Title>
      </StyledLink>
      {!isLoggedIn && <Authentication />}
      {isLoggedIn && <UserMenu userEmail={userEmail} />}
    </NavWrapper>
  );
}
