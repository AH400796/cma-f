import {
  Wrapper,
  Link,
  Type,
  Marketplace,
  Arrow,
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

export default function BuyBlock({
  url,
  marketplace,
  buyPrice,
  buyQuantity,
  fee,
}) {
  return (
    <Wrapper>
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
        <DataWrapper>
          <Data>
            fee: <DataFee> (amount | coin | network) </DataFee>
          </Data>
        </DataWrapper>
        <DataFeeList>
          {fee?.map(el => {
            const [amount, coin, , network] = el;
            return (
              <DataFeeListItem key={network}>
                <DataFeeValue>{amount} |</DataFeeValue>
                <DataFeeValue>{coin} |</DataFeeValue>
                <DataFeeValue>{network}</DataFeeValue>
              </DataFeeListItem>
            );
          })}
        </DataFeeList>
      </Link>
    </Wrapper>
  );
}
