import { useState, useEffect } from 'react';
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
import { excludePair } from 'services/API';

export default function TraidingPairsItem({ data, showFixedArb }) {
  const [fixedArb, setFixedArb] = useState(false);
  const [addExclusion, setAddExclusion] = useState([]);

  useEffect(() => {
    if (addExclusion.length === 0) {
      return;
    }
    const [market, symbol] = addExclusion;
    const exlude = async () => {
      try {
        await excludePair(market, symbol);
      } catch (error) {
        console.log(error);
      }
    };
    exlude();
  }, [addExclusion]);

  const handleClick = () => {
    setFixedArb(prevState => !prevState);
    // showFixedArb();
  };
  const handleAddExclusion = market => {
    const name = data[0];
    const symbol = name.replace(/\/USDT/g, '');
    setAddExclusion([market, symbol]);
  };

  const name = data[0];
  const arbitrageValue = data[1];

  const { market: buyMarket, url: buyUrl, buyPrice, buyQty, fee } = data[2];
  const { market: sellMarket, url: sellUrl, sellPrice, sellQty } = data[3];
  return (
    <Wrapper>
      <StarButton title="Fixed arb" onClick={handleClick}>
        {fixedArb ? (
          <Star src={star} alt="star" />
        ) : (
          <Star src={starWhite} alt="star" />
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
            exclusion={handleAddExclusion}
          />
          <SellBlock
            url={sellUrl}
            marketplace={sellMarket}
            sellPrice={sellPrice}
            sellQuantity={sellQty}
            exclusion={handleAddExclusion}
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
