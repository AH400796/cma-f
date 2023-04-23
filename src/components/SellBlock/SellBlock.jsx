import {
  Wrapper,
  Delete,
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
  const handleClick = () => {};
  return (
    <Wrapper>
      <Delete onClick={handleClick}>X</Delete>
      <Link href={url} target="_blank" rel="noopener noreferrer">
        <MarketWrapper>
          <Type>SELL</Type>
          <Arrow src={redArrow} alt="sell arrow" width={30} />
          <Marketplace>{marketplace}</Marketplace>
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
