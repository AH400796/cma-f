import { Header } from './HeaderSection.styled';
import NavBar from 'components/NavBar';
import Container from 'components/Container';

export default function HeaderSection({ screenWidth }) {
  return (
    <Header>
      <Container>
        <NavBar screenWidth={screenWidth} />
      </Container>
    </Header>
  );
}
