import { useState } from 'react';
import FeeBlock from 'components/FeeBlock';

import {
  Wrapper,
  FormWrapper,
  FeeFormWrapper,
  Input,
  InputLabel,
  SellWrapper,
  BuyWrapper,
  BlockWrapper,
  SellPriceInput,
  BuyPriceInput,
  CalcText,
  ResultText,
  PointerText,
  FeeWrapper,
  ArbLevel,
  Form,
} from './Calculator.styled';

export default function Calculator({ data, showCalc, showFee }) {
  const [sellPrice, setSellPrice] = useState(() => {
    return data[3].sellPrice;
  });
  const [buyPrice, setBuyPrice] = useState(() => {
    return data[2].buyPrice;
  });
  const [sellAmount, setSellAmount] = useState(() => {
    return data[3].sellQty - data[2].buyQty > 0
      ? data[2].buyQty
      : data[3].sellQty;
  });
  const [buyAmount, setBuyAmount] = useState(() => {
    return data[3].sellQty - data[2].buyQty > 0
      ? data[2].buyQty
      : data[3].sellQty;
  });
  const [feeAmount, setFeeAmount] = useState(() => {
    const arrFee = data[2].fee.map(el =>
      data[2].url.includes(el[1])
        ? Number((data[2].buyPrice * el[0]).toFixed(2))
        : ''
    );
    const minFee =
      arrFee.length === 0
        ? 0
        : arrFee.reduce((min, el) => {
            return min > el ? el : min;
          });
    return minFee;
  });

  const handleSellAmount = e => {
    setSellAmount(e.target.value);
  };
  const handleBuyAmount = e => {
    setBuyAmount(e.target.value);
  };
  const handleFeeAmount = e => {
    setFeeAmount(e.target.value);
  };
  const handleSellPrice = e => {
    setSellPrice(e.target.value);
  };
  const handleBuyPrice = e => {
    setBuyPrice(e.target.value);
  };

  const { market: buyMarket } = data[2];
  const { market: sellMarket } = data[3];
  const sellResult = Number((Number(sellAmount) * sellPrice).toFixed(2));
  const buyResult = Number((Number(buyAmount) * buyPrice).toFixed(2));
  const result = Number(
    (sellResult - buyResult - Number(feeAmount)).toFixed(2)
  );
  const arb = Number(
    (
      (((Number(buyAmount) - feeAmount / buyPrice) * sellPrice -
        Number(buyAmount) * buyPrice) *
        100) /
      (Number(buyAmount) * buyPrice)
    ).toFixed(2)
  );

  return (
    <Wrapper>
      <FormWrapper showCalc={showCalc} showFee={showFee}>
        {showCalc && (
          <Form autoComplete="off" showCalc={showCalc}>
            <SellWrapper>
              <BlockWrapper>
                <CalcText>SELL on {sellMarket}</CalcText>
                <InputLabel>
                  <SellPriceInput
                    type="number"
                    name="sellPrice"
                    value={sellPrice}
                    onChange={handleSellPrice}
                  />
                </InputLabel>
              </BlockWrapper>
              <BlockWrapper>
                <PointerText></PointerText>
                <PointerText>x</PointerText>
              </BlockWrapper>
              <BlockWrapper>
                <CalcText>Amount to SELL</CalcText>
                <InputLabel>
                  <Input
                    type="number"
                    name="sellAmount"
                    value={sellAmount}
                    onChange={handleSellAmount}
                  />
                </InputLabel>
              </BlockWrapper>
              <BlockWrapper>
                <PointerText></PointerText>
                <PointerText>=</PointerText>
              </BlockWrapper>
              <BlockWrapper>
                <CalcText>USDT</CalcText>
                <ResultText>{sellResult}</ResultText>
              </BlockWrapper>
            </SellWrapper>
            <BuyWrapper>
              <BlockWrapper>
                <CalcText>BUY on {buyMarket}</CalcText>
                <InputLabel>
                  <BuyPriceInput
                    type="number"
                    name="buyPrice"
                    value={buyPrice}
                    onChange={handleBuyPrice}
                  />
                </InputLabel>
              </BlockWrapper>
              <BlockWrapper>
                <PointerText></PointerText>
                <PointerText>x</PointerText>
              </BlockWrapper>
              <BlockWrapper>
                <CalcText>Amount to BUY</CalcText>
                <InputLabel>
                  <Input
                    type="number"
                    name="buyAmount"
                    value={buyAmount}
                    onChange={handleBuyAmount}
                  />
                </InputLabel>
              </BlockWrapper>
              <BlockWrapper>
                <PointerText></PointerText>
                <PointerText>=</PointerText>
              </BlockWrapper>
              <BlockWrapper>
                <CalcText>USDT</CalcText>
                <ResultText>{buyResult}</ResultText>
              </BlockWrapper>
            </BuyWrapper>
            <FeeWrapper>
              <BlockWrapper>
                <CalcText>Fee, USDT</CalcText>
                <InputLabel>
                  <Input
                    type="number"
                    name="feeAmount"
                    value={feeAmount}
                    onChange={handleFeeAmount}
                  />
                </InputLabel>
              </BlockWrapper>
              <BlockWrapper>
                <PointerText></PointerText>
                <PointerText></PointerText>
              </BlockWrapper>
              <BlockWrapper>
                <CalcText>Arb., %</CalcText>
                <ArbLevel>{arb}%</ArbLevel>
              </BlockWrapper>
              <BlockWrapper>
                <PointerText></PointerText>
                <PointerText></PointerText>
              </BlockWrapper>
              <BlockWrapper>
                <CalcText>Profit, USDT</CalcText>
                <ResultText>{result}</ResultText>
              </BlockWrapper>
            </FeeWrapper>
          </Form>
        )}
      </FormWrapper>
      <FeeFormWrapper showCalc={showCalc} showFee={showFee}>
        {(showFee || showCalc) && <FeeBlock data={data} showCalc={showCalc} />}
      </FeeFormWrapper>
    </Wrapper>
  );
}
