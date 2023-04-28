import { useState } from 'react';
import {
  Wrapper,
  Link,
  Type,
  Marketplace,
  Delete,
  Data,
  DataValue,
  MarketWrapper,
  DataWrapper,
} from './BuyBlock.styled';

export default function BuyBlock({
  url,
  marketplace,
  buyPrice,
  buyQuantity,
  exclusion,
}) {
  const [exclused, setExclused] = useState(false);

  const handleClick = () => {
    setExclused(true);
    exclusion(marketplace);
  };

  return (
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
  );
}
