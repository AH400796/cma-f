import { Wrapper, ContentWrapper, MainSection } from './SharedLayout.styled';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import HeaderSection from 'components/HeaderSection';
import Container from 'components/Container';
import Skeleton from 'components/Skeleton';

import Footer from 'components/Footer';

export default function SharedLayout() {
  return (
    <Wrapper>
      <ContentWrapper>
        <HeaderSection />
        <MainSection>
          <Container>
            <Suspense fallback={<Skeleton width={'100%'} height={'100%'} />}>
              <Outlet />
            </Suspense>
          </Container>
        </MainSection>
      </ContentWrapper>
      <Footer />
    </Wrapper>
  );
}
