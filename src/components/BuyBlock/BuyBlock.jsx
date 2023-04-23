import {
  Wrapper,
  Link,
  Type,
  Marketplace,
  Arrow,
  Delete,
  Data,
  DataFee,
  DataValue,
  DataFeeValue,
  MarketWrapper,
  DataWrapper,
  DataFeeList,
  DataFeeListItem,
} from './BuyBlock.styled';
import greenArrow from '../../images/green_arrow.svg';
import { excludePair } from 'services/API';

export default function BuyBlock({
  url,
  marketplace,
  buyPrice,
  buyQuantity,
  fee,
}) {
  const handleClick = () => {};
  return (
    <Wrapper>
      <Delete onClick={handleClick}>X</Delete>
      <Link href={url} target="_blank" rel="noopener noreferrer">
        <MarketWrapper>
          <Type>BUY</Type>
          <Arrow src={greenArrow} alt="sell arrow" width={30} />
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
