import { useState } from 'react';
import {
  Wrapper,
  ExtraWrapper,
  Delete,
  Link,
  Type,
  Marketplace,
  Data,
  DataValue,
  MarketWrapper,
  DataWrapper,
  WithdrLink,
  DepCont,
} from './SellBlock.styled';

export default function SellBlock({
  url,
  marketplace,
  sellPrice,
  sellQuantity,
  exclusion,
  sellDep,
}) {
  const [exclused, setExclused] = useState(false);

  const handleClick = () => {
    setExclused(true);
    exclusion(marketplace);
  };

  return (
    <ExtraWrapper>
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
      <Wrapper>
        <WithdrLink href={sellDep} target="_blank" rel="noopener noreferrer">
          <DepCont>Deposit</DepCont>
        </WithdrLink>
      </Wrapper>
    </ExtraWrapper>
  );
}
