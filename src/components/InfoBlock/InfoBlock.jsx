import { useState } from 'react';
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
} from './InfoBlock.styled';

export default function InfoBlock({
  marketplace,

  fee,
}) {
  const [showFee, setShowFee] = useState(false);

  const handleClick = () => {
    setShowFee(prevState => (prevState = !showFee));
  };
  return (
    <Wrapper onClick={handleClick}>
      <DataWrapper>
        {!showFee ? (
          <Data>Additional and withdrawfee information</Data>
        ) : (
          <Data>Fee: Amount-Coin // Network:</Data>
        )}
      </DataWrapper>
      {showFee && (
        <DataFeeList>
          {fee?.map(el => {
            const [amount, coin, , network] = el;
            return (
              <DataFeeListItem key={network}>
                <DataFeeValue>{amount}</DataFeeValue>
                <DataFeeValue>{coin} //</DataFeeValue>
                <DataFeeValue>{network}</DataFeeValue>
              </DataFeeListItem>
            );
          })}
        </DataFeeList>
      )}
    </Wrapper>
  );
}
