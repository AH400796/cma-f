import { useState, useEffect } from 'react';
import SellBlock from 'components/SellBlock';
import BuyBlock from 'components/BuyBlock';
import InfoBlock from 'components/InfoBlock';
import Calculator from 'components/Calculator';

import {
  Wrapper,
  ExtraWrapper,
  PairName,
  BlockWrapper,
  ValueWrapper,
  Arbitrage,
  ArbWrapper,
  StarIcon,
  StarButton,
  CalcButton,
  InfoButton,
  Calc,
  Info,
} from './TraidingPairItem.styled';
import { excludePair } from 'services/API';

export default function TraidingPairsItem({ data, showFixedArb }) {
  const [addExclusion, setAddExclusion] = useState([]);
  const [fixedArb, setFixedArb] = useState(false);
  const [showCalc, setShowCalc] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

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

  const handleClickCalc = () => {
    setShowCalc(prevState => !prevState);
  };

  const handleClickInfo = () => {
    setShowInfo(prevState => !prevState);
  };

  const name = data[0];
  const arbitrageValue = data[1];

  const { market: buyMarket, url: buyUrl, buyPrice, buyQty, fee } = data[2];
  const { market: sellMarket, url: sellUrl, sellPrice, sellQty } = data[3];
  return (
    <ExtraWrapper>
      <Wrapper>
        <InfoButton title="Info" onClick={handleClickInfo}>
          <Info showInfo={showInfo} />
        </InfoButton>
        <CalcButton title="Caclulator" onClick={handleClickCalc}>
          <Calc showCalc={showCalc} />
        </CalcButton>
        <StarButton title="Fixed arb" onClick={handleClick}>
          <StarIcon fixedArb={fixedArb} />
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
            showInfo={showInfo}
          />
        </ValueWrapper>
      </Wrapper>
      <Calculator data={data} showCalc={showCalc} />
    </ExtraWrapper>
  );
}
