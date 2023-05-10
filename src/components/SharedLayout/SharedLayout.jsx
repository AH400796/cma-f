import {
  LoaderWrapper,
  Wrapper,
  ContentWrapper,
  MainSection,
} from './SharedLayout.styled';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import HeaderSection from 'components/HeaderSection';
import Container from 'components/Container';

import Loader from 'components/Loader';

import Footer from 'components/Footer';

export default function SharedLayout() {
  return (
    <Wrapper>
      <ContentWrapper>
        <HeaderSection />
        <MainSection>
          <Container>
            <Suspense
              fallback={
                <LoaderWrapper>
                  <Loader
                    type={'spinningBubbles'}
                    color={'#ff7b3eb2'}
                    height={100}
                    width={100}
                  />
                </LoaderWrapper>
              }
            >
              <Outlet />
            </Suspense>
          </Container>
        </MainSection>
      </ContentWrapper>
      <Footer />
    </Wrapper>
  );
}
