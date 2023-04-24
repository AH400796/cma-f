import { useState } from 'react';
import {
  Wrapper,
  Link,
  Type,
  Marketplace,
  Arrow,
  Delete,
  Data,
  DataValue,
  MarketWrapper,
  DataWrapper,
} from './BuyBlock.styled';
import greenArrow from '../../images/green_arrow.svg';

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
          <Arrow src={greenArrow} alt="sell arrow" />
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
