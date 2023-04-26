import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
  padding: 5px 15px;
  width: 100%;

  border: none;
  border-radius: 2px;
  background: linear-gradient(
    99.04deg,
    #9c95c4 -1.74%,
    rgba(255, 255, 255, 0.37) 116.29%
  );
  box-shadow: 2px 2px 5px 0px #444343;
`;

export const Data = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
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
  justify-content: space-between;
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
  width: 35%;
`;

export const DataWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2px 5px;
  background-color: #c8d2db;
  border: 1px dotted #797b7c;
  border-radius: 2px;
  font-size: 12px;
  font-weight: 700;
  color: #363535;
`;

export const DataFeeList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2px;
  list-style: none;
`;

export const DataFeeListItem = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 10px;
  padding: 2px 5px;
  border-radius: 2px;
  background-color: #e1f3dd;
  border: 1px dotted #797b7c;
`;
export const DataFeeWrapper = styled.button`
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 10px;
  padding: 2px 5px;
  border-radius: 2px;
  background-color: ${props => {
    if (props.feeAmount === props.children.props.children.join('')) {
      return '#df4600';
    }
    return '#19550c';
  }};
  border: 1px dotted #797b7c;
  cursor: pointer;
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
