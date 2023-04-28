import { useState } from 'react';
import {
  Wrapper,
  Delete,
  Link,
  Type,
  Marketplace,
  Data,
  DataValue,
  MarketWrapper,
  DataWrapper,
} from './SellBlock.styled';

export default function SellBlock({
  url,
  marketplace,
  sellPrice,
  sellQuantity,
  exclusion,
}) {
  const [exclused, setExclused] = useState(false);

  const handleClick = () => {
    setExclused(true);
    exclusion(marketplace);
  };

  return (
    <Wrapper exclused={exclused}>
      <Delete
        onClick={handleClick}
        title="Remove markets pair from the scaning"
      >
        {`\u2716`}
      </Delete>
      <Link href={url} target="_blank" rel="noopener noreferrer">
        <MarketWrapper>
          <Type> SELL</Type>
          <Marketplace> {marketplace}</Marketplace>
        </MarketWrapper>
        <DataWrapper>
          <Data>price, (USDT):</Data>
          <DataValue>{sellPrice}</DataValue>
        </DataWrapper>
        <DataWrapper>
          <Data>quantity:</Data>
          <DataValue>{sellQuantity}</DataValue>
        </DataWrapper>
      </Link>
    </Wrapper>
  );
}
