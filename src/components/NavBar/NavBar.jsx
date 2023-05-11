import { useContext } from 'react';
import { AuthContext } from '../App/App';
import {
  StyledLink,
  StyledLogoLink,
  NavWrapper,
  LogoIcon,
  LinkWrapper,
} from './NavBar.styled';

import Authentication from 'components/Authentication';
import UserMenu from 'components/UserMenu';
import Logo from '../../images/logo.png';

export default function NavBar({ screenWidth }) {
  const { isLoggedIn, userEmail } = useContext(AuthContext);

  return (
    <NavWrapper>
      <LinkWrapper>
        <StyledLogoLink to="/">
          <LogoIcon src={Logo} alt="logo" width={250} />
        </StyledLogoLink>
        <StyledLink to="/">About CMA</StyledLink>
        {isLoggedIn && <StyledLink to="/arbitrages">Arbitrage</StyledLink>}
      </LinkWrapper>
      {!isLoggedIn && <Authentication />}
      {isLoggedIn && <UserMenu userEmail={userEmail} />}
    </NavWrapper>
  );
}
