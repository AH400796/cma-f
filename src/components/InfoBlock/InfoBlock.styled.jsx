import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;

  gap: 10px;
  padding: 5px 15px;
  width: 100%;

  border: none;
  border-radius: 5px;
  background: linear-gradient(
    99.04deg,
    #9c95c4 -1.74%,
    rgba(255, 255, 255, 0.37) 116.29%
  );
  box-shadow: 2px 2px 5px 0px #444343;
`;

export const FeeButton = styled.button`
  font-size: 12px;
  font-weight: 700;
  color: #363535;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const FeeWrapper = styled.li`
  display: flex;
  align-items: flex-end;
  gap: 10px;
`;

export const Fee = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Calc = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 40%;
`;

export const Delete = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: left;
  align-items: flex-start;
  width: 40px;
  height: 40px;
  color: #ffffff;
  font-weight: 700;

  background-color: #9c0202;
  border: none;
  border-radius: 5px;
  clip-path: polygon(0 0, 0% 100%, 100% 0);

  cursor: pointer;
`;

export const Link = styled.a`
  text-decoration: none;
`;

export const Type = styled.span`
  font-size: 20px;
  font-weight: 700;
  color: #28680b;
`;

export const MarketWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 20px;
  margin-bottom: 20px;
`;

export const Marketplace = styled.span`
  font-size: 20px;
  font-weight: 900;
  padding: 3px 10px 5px;
  color: #110264;
  background-color: #e7e703;
`;

export const Arrow = styled.img`
  width: 30px;
`;

export const Data = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
`;
export const DataWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2px 5px;
  background-color: #c8d2db;
  border: 1px dotted #797b7c;
  border-radius: 5px;
  font-size: 12px;
  font-weight: 700;
  color: #363535;
`;

export const DataFeeList = styled.ul`
  list-style: none;
`;

export const DataFeeListItem = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 10px;
  padding: 2px 5px;
  border-radius: 5px;
  background-color: #e1f3dd;
  border: 1px dotted #797b7c;
`;
export const DataFeeWrapper = styled.button`
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 10px;
  padding: 2px 5px;
  border-radius: 5px;
  background-color: ${props => {
    if (props.feeAmount === props.children.props.children.join('')) {
      return '#df4600';
    }
    return '#19550c';
  }};
  border: 1px dotted #797b7c;
  cursor: pointer;
`;
// #19550c;
export const DataValue = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: black;
`;

export const DataFeeValue = styled.div`
  gap: 10px;
  font-size: 12px;
  font-weight: 700;
  color: #363535;
`;

export const DataFeeEquiv = styled.div`
  gap: 10px;
  font-size: 12px;
  font-weight: 700;
  color: #ffffff;
`;
export const AmountData = styled.div`
  font-size: 12px;
  font-weight: 700;
  color: #363535;
`;

export const AmountCoinValue = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: #df4600;
`;
export const AmountDataValue = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: ${props => {
    if (props.proffit >= 0) {
      return '#19550c';
    }
    return '#bd1d08';
  }};
`;
