import {
  Fee,
  Wrapper,
  FeeValue,
  DataWrapper,
  EqFeeWrapper,
  FeeTitle,
  FeeList,
  FeeListItem,
  FeeValueWrap,
  FeeBuyContainer,
  FeeSellContainer,
  FeeEquiv,
  SellFeeList,
} from './FeeBlock.styled';

export default function FeeBlock({ data, showCalc, showFee }) {
  const pairName = data[0];
  const { market: buyMarket, fee: buyFee, buyPrice } = data[2];
  const { market: sellMarket, fee: sellFee } = data[3];

  return (
    <Wrapper>
      <FeeTitle>
        <DataWrapper>Fee & networks:</DataWrapper>
      </FeeTitle>
      <Fee>
        <FeeBuyContainer>
          <DataWrapper>on {buyMarket}:</DataWrapper>
          <FeeList>
            {buyFee?.map(el => {
              const [amount, coin, , network] = el;
              const equiv = pairName.includes(coin)
                ? Number((buyPrice * amount).toFixed(2))
                : '???';
              return (
                <FeeListItem key={network}>
                  <FeeValueWrap>
                    <FeeValue>{amount}</FeeValue>
                    <FeeValue>{coin} </FeeValue>
                    <FeeValue> [{network}]</FeeValue>
                  </FeeValueWrap>
                  <EqFeeWrapper>
                    <FeeEquiv title="USDT">{equiv} USDT</FeeEquiv>
                  </EqFeeWrapper>
                </FeeListItem>
              );
            })}
          </FeeList>
        </FeeBuyContainer>
        <FeeSellContainer>
          <DataWrapper>on {sellMarket}:</DataWrapper>
          <SellFeeList>
            {sellFee?.map(el => {
              const [, , , network] = el;
              return (
                <FeeListItem key={network}>
                  <FeeValueWrap>
                    <FeeValue> [{network}]</FeeValue>
                  </FeeValueWrap>
                </FeeListItem>
              );
            })}
          </SellFeeList>
        </FeeSellContainer>
      </Fee>
    </Wrapper>
  );
}
