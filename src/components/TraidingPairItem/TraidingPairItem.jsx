import SellBlock from 'components/SellBlock';
import BuyBlock from 'components/BuyBlock';
import InfoBlock from 'components/InfoBlock';
import {
  Wrapper,
  PairName,
  BlockWrapper,
  ValueWrapper,
  Arbitrage,
  ArbWrapper,
} from './TraidingPairItem.styled';

export default function TraidingPairsItem({ data }) {
  const name = data[0];
  const arbitrageValue = data[1];

  const { market: buyMarket, url: buyUrl, buyPrice, buyQty, fee } = data[2];
  const { market: sellMarket, url: sellUrl, sellPrice, sellQty } = data[3];
  return (
    <Wrapper>
      <ArbWrapper>
        <PairName>{name}</PairName>
        <Arbitrage>{arbitrageValue}%</Arbitrage>
      </ArbWrapper>
      <ValueWrapper>
        <BlockWrapper>
          <BuyBlock
            url={buyUrl}
            marketplace={buyMarket}
            buyPrice={buyPrice}
            buyQuantity={buyQty}
          />
          <SellBlock
            url={sellUrl}
            marketplace={sellMarket}
            sellPrice={sellPrice}
            sellQuantity={sellQty}
          />
        </BlockWrapper>
        <InfoBlock fee={fee} />
      </ValueWrapper>
    </Wrapper>
  );
}
