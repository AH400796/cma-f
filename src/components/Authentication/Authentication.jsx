import { StyledLink, AuthWrapper } from './Authentication.styled';

export default function Authenticate() {
  return (
    <AuthWrapper>
      <StyledLink to="/register">Sign up</StyledLink>
      <StyledLink to="/login">Log in</StyledLink>
     
    </AuthWrapper>
  );
}
