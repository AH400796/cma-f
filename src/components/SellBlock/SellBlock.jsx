import {
  Wrapper,
  Link,
  Type,
  Marketplace,
  Arrow,
  Data,
  DataValue,
  MarketWrapper,
  DataWrapper,
} from './SellBlock.styled';
import redArrow from '../../images/red_arrow.svg';

export default function SellBlock({
  url,
  marketplace,
  sellPrice,
  sellQuantity,
}) {
  return (
    <Wrapper>
      <Link href={url} target="_blank" rel="noopener noreferrer">
        <MarketWrapper>
          <Type>SELL</Type>
          <Marketplace>{marketplace}</Marketplace>
          <Arrow src={redArrow} alt="sell arrow" width={30} />
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
