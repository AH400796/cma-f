import { useState } from 'react';
import {
  Wrapper,
  ExtraWrapper,
  Link,
  Type,
  Marketplace,
  Delete,
  Data,
  DataValue,
  MarketWrapper,
  DataWrapper,
  WithdrLink,
  WithdrCont,
} from './BuyBlock.styled';

export default function BuyBlock({
  url,
  marketplace,
  buyPrice,
  buyQuantity,
  exclusion,
  buyWithdr,
}) {
  const [exclused, setExclused] = useState(false);

  const handleClick = () => {
    setExclused(true);
    exclusion(marketplace);
  };

  return (
    <ExtraWrapper>
      <Wrapper exclused={exclused}>
        <Delete onClick={handleClick}>{`\u2716`}</Delete>
        <Link href={url} target="_blank" rel="noopener noreferrer">
          <MarketWrapper>
            <Type>BUY</Type>
            <Marketplace>{marketplace}</Marketplace>
          </MarketWrapper>
          <DataWrapper>
            <Data>price, (USDT):</Data>
            <DataValue>{buyPrice}</DataValue>
          </DataWrapper>
          <DataWrapper>
            <Data>quantity:</Data>
            <DataValue>{buyQuantity}</DataValue>
          </DataWrapper>
        </Link>
      </Wrapper>
      <Wrapper>
        <WithdrLink href={buyWithdr} target="_blank" rel="noopener noreferrer">
          <WithdrCont>Withdraw</WithdrCont>
        </WithdrLink>
      </Wrapper>
    </ExtraWrapper>
  );
}
