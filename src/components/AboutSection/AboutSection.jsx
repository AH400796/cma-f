import { Wrapper, AboutText, AboutTitle } from './AboutSection.styled';

export default function AboutSection() {
  return (
    <Wrapper>
      <AboutTitle>Welcome to our service!</AboutTitle>
      <AboutText>
        The CMA application (Crypto Markets Arbitrage) was created to find
        arbitrage cases on spot trading of well-known (and not so)
        cryptocurrency exchanges. Our service is a very powerful tool that can
        simultaneously monitor more than 5 cryptocurrency exchanges, analyzing
        available order books for a huge number of spot trading pairs. All
        positions are coin/USDT pairs only.
      </AboutText>
      <AboutText>
        The CMA application (Crypto Markets Arbitrage) was created to find
        arbitrage cases on spot trading of well-known (and not so)
        cryptocurrency exchanges. Our service is a very powerful tool that can
        simultaneously monitor more than ??? cryptocurrency exchanges, analyzing
        available order books for a huge number of spot trading pairs. All
        positions are coin/USDT pairs only
      </AboutText>
    </Wrapper>
  );
}
