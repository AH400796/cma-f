import { useState, useEffect } from 'react';
import SellBlock from 'components/SellBlock';
import BuyBlock from 'components/BuyBlock';
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
  FeeButton,
  Calc,
  Fee,
  ArbArrow,
  ArrowWraper,
} from './TraidingPairItem.styled';
import { excludePair } from 'services/API';

export default function TraidingPairsItem({
  data,
  showfixedArb,
  arbitrageValue,
  arbPercentage,
}) {
  const [addExclusion, setAddExclusion] = useState([]);
  const [fixedArb, setFixedArb] = useState(false);
  const [showCalc, setShowCalc] = useState(false);
  const [showFee, setShowFee] = useState(false);
  const [arbValue, setArbValue] = useState(0);
  const [prevArbValue, setPrevArbValue] = useState(0);

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

  useEffect(() => {
    if (arbValue !== data[1]) {
      setPrevArbValue(arbValue);
      setArbValue(data[1]);
    }
  }, [arbValue, data]);

  const handleClick = () => {
    setFixedArb(prevState => !prevState);
  };

  const handleAddExclusion = market => {
    const name = data[0];
    const symbol = name.replace(/\/USDT/g, '');
    setAddExclusion([market, symbol]);
  };

  const handleClickCalc = () => {
    setShowCalc(prevState => !prevState);
  };

  const handleClickFee = () => {
    setShowFee(prevState => !prevState);
  };

  const name = data[0];
  const isExclused = addExclusion.length !== 0;

  const {
    market: buyMarket,
    url: buyUrl,
    withdrlUrl: buyWithdr,
    buyPrice,
    buyQty,
  } = data[2];
  const {
    market: sellMarket,
    url: sellUrl,
    depUrl: sellDep,
    sellPrice,
    sellQty,
  } = data[3];
  return (
    <>
      {!isExclused && (arbitrageValue > arbPercentage || fixedArb) && (
        <ExtraWrapper>
          <Wrapper>
            <FeeButton title="Fee" onClick={handleClickFee} showFee={showFee}>
              <Fee />
            </FeeButton>
            <CalcButton
              title="Caclulator"
              onClick={handleClickCalc}
              showCalc={showCalc}
            >
              <Calc />
            </CalcButton>
            <StarButton
              title="Fixed arb"
              onClick={handleClick}
              fixedArb={fixedArb}
            >
              <StarIcon />
            </StarButton>
            <ArbWrapper>
              <PairName>{name}</PairName>
              <Arbitrage>
                {arbValue}%
                <ArrowWraper arbValue={arbValue} prevArbValue={prevArbValue}>
                  <ArbArrow />
                </ArrowWraper>
              </Arbitrage>
            </ArbWrapper>
            <ValueWrapper>
              <BlockWrapper>
                <BuyBlock
                  url={buyUrl}
                  marketplace={buyMarket}
                  buyPrice={buyPrice}
                  buyQuantity={buyQty}
                  exclusion={handleAddExclusion}
                  buyWithdr={buyWithdr}
                />
                <SellBlock
                  url={sellUrl}
                  marketplace={sellMarket}
                  sellPrice={sellPrice}
                  sellQuantity={sellQty}
                  exclusion={handleAddExclusion}
                  sellDep={sellDep}
                />
              </BlockWrapper>
            </ValueWrapper>
          </Wrapper>
          <Calculator data={data} showCalc={showCalc} showFee={showFee} />
        </ExtraWrapper>
      )}
    </>
  );
}
