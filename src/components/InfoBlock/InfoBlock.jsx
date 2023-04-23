import { useState } from 'react';
import RangeInput from 'components/RangeInput';
import {
  Fee,
  Calc,
  Wrapper,
  Data,
  FeeButton,
  DataFeeValue,
  DataWrapper,
  DataFeeWrapper,
  DataFeeList,
  DataFeeListItem,
  FeeWrapper,
  DataFeeEquiv,
  AmountData,
  AmountDataValue,
  AmountCoinValue,
} from './InfoBlock.styled';

export default function InfoBlock({
  marketplace,
  fee,
  buyPrice,
  name,
  buyQty,
  sellQty,
  sellPrice,
}) {
  const [showFee, setShowFee] = useState(false);
  const [coinAmount, setCoinAmount] = useState(0);
  const [feeAmount, setFeeAmount] = useState(0);

  const handleClick = () => {
    setShowFee(prevState => !prevState);
  };
  const handleFeeClick = e => {
    setFeeAmount(e.target.innerText);
  };
  const handleChange = event => {
    setCoinAmount(event.target.value);
  };

  const max = buyQty > sellQty ? sellQty : buyQty;
  const step = max / 100;
  const setupRange = [0, max, step, 'amount'];
  const feeCoinAm =
    feeAmount === 0 ? 0 : Number(feeAmount.replace(/ USDT/g, ''));
  const proffit = (
    coinAmount * sellPrice -
    coinAmount * buyPrice -
    feeCoinAm
  ).toFixed(2);

  return (
    <Wrapper>
      <FeeButton onClick={handleClick}>
        Additional and withdraw fee information
      </FeeButton>
      {showFee && (
        <Data>
          <Fee>
            <DataWrapper>
              Fee on {marketplace}: amount-coin [network] / (USDT) :
            </DataWrapper>
            <DataFeeList>
              {fee?.map(el => {
                const [coinAmount, coin, , network] = el;
                const equiv = name.includes(coin)
                  ? Number((buyPrice * coinAmount).toFixed(2))
                  : '???';
                return (
                  <FeeWrapper key={network}>
                    <DataFeeListItem>
                      <DataFeeValue>{coinAmount}</DataFeeValue>
                      <DataFeeValue>{coin} </DataFeeValue>
                      <DataFeeValue> [{network}]</DataFeeValue>
                    </DataFeeListItem>
                    <DataFeeWrapper
                      feeAmount={feeAmount}
                      onClick={e => handleFeeClick(e)}
                    >
                      <DataFeeEquiv>{equiv} USDT</DataFeeEquiv>
                    </DataFeeWrapper>
                  </FeeWrapper>
                );
              })}
            </DataFeeList>
          </Fee>
          <Calc>
            <DataWrapper>
              <AmountData>Amount selling :</AmountData>
              <AmountCoinValue>{coinAmount}</AmountCoinValue>
            </DataWrapper>
            <RangeInput
              onChange={handleChange}
              value={coinAmount}
              setupRange={setupRange}
            />
            <DataWrapper>
              <AmountData>Proffit :</AmountData>
              <AmountDataValue proffit={proffit}>
                {proffit > 0 ? `+${proffit} USDT` : `${proffit} USDT`}
              </AmountDataValue>
            </DataWrapper>
          </Calc>
        </Data>
      )}
    </Wrapper>
  );
}
