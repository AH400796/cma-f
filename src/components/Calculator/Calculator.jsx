import { useState } from 'react';

import {
  Wrapper,
  FormWrapper,
  Input,
  InputLabel,
  SellWrapper,
  BuyWrapper,
  BlockWrapper,
  SellPrice,
  BuyPrice,
  CalcText,
  Container,
  ResultText,
  PointerText,
  FeeWrapper,
  ArbLevel,
  Form,
} from './Calculator.styled';

export default function Calculator({ data, showCalc }) {
  const [sellAmount, setSellAmount] = useState('');
  const [buyAmount, setBuyAmount] = useState('');
  const [feeAmount, setFeeAmount] = useState('');

  const handleSellAmount = e => {
    setSellAmount(e.target.value);
  };
  const handleBuyAmount = e => {
    setBuyAmount(e.target.value);
  };
  const handleFeeAmount = e => {
    setFeeAmount(e.target.value);
  };

  const { market: buyMarket, buyPrice } = data[2];
  const { market: sellMarket, sellPrice } = data[3];
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
  const arbLevel =
    Number.isNaN(arb) || arb === Infinity || arb === -Infinity ? data[1] : arb;
  return (
    <Wrapper>
      <FormWrapper showCalc={showCalc}>
        <Form autoComplete="off">
          <Container>
            <SellWrapper>
              <BlockWrapper>
                <CalcText>SELL on {sellMarket}</CalcText>
                <SellPrice>{sellPrice}</SellPrice>
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
                <BuyPrice>{buyPrice}</BuyPrice>
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
                <CalcText>Relevant level</CalcText>
                <ArbLevel>{arbLevel}%</ArbLevel>
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
          </Container>
        </Form>
      </FormWrapper>
    </Wrapper>
  );
}
