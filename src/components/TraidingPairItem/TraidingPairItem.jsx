import { useState } from 'react';
import SellBlock from 'components/SellBlock';
import BuyBlock from 'components/BuyBlock';
import InfoBlock from 'components/InfoBlock';
import star from '../../images/star.svg';
import starWhite from '../../images/starWhite.svg';
import {
  Wrapper,
  PairName,
  BlockWrapper,
  ValueWrapper,
  Arbitrage,
  ArbWrapper,
  Star,
  StarButton,
} from './TraidingPairItem.styled';

export default function TraidingPairsItem({ data, showFixedArb }) {
  const [fixedArb, setFixedArb] = useState(false);

  const handleClick = () => {
    setFixedArb(prevState => !prevState);
    // showFixedArb();
  };

  const name = data[0];
  const arbitrageValue = data[1];

  const { market: buyMarket, url: buyUrl, buyPrice, buyQty, fee } = data[2];
  const { market: sellMarket, url: sellUrl, sellPrice, sellQty } = data[3];
  return (
    <Wrapper>
      <StarButton title="Fixed arb" onClick={handleClick}>
        {fixedArb ? (
          <Star src={starWhite} alt="star" />
        ) : (
          <Star src={star} alt="star" />
        )}
      </StarButton>
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
        <InfoBlock
          fee={fee}
          marketplace={buyMarket}
          buyPrice={buyPrice}
          name={name}
          buyQty={buyQty}
          sellQty={sellQty}
          sellPrice={sellPrice}
        />
      </ValueWrapper>
    </Wrapper>
  );
}
