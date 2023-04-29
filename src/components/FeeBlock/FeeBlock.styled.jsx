import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
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
export const Fee = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export const FeeList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
  width: 100%;
  list-style: none;
`;

export const SellFeeList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3px;
  list-style: none;
  width: 100%;
`;
export const FeeListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 2px;
  width: 100%;
  padding: 2px;
  border-radius: 3px;
  color: #07507e;
  background-color: #b1b0b0;
`;

export const FeeValue = styled.div`
  gap: 10px;
  font-size: 12px;
  font-weight: 700;
`;

export const FeeValueWrap = styled.div`
  display: flex;
  justify-content: left;
  align-self: flex-start;
  align-items: center;
  gap: 10px;
  padding: 2px 5px;
  width: 100%;
  border-radius: 2px;
  background-color: #b1e7ee;
  border: 1px dotted #797b7c;
`;
export const EqFeeWrapper = styled.button`
  display: flex;
  justify-content: left;
  align-items: center;
  align-self: flex-end;
  gap: 10px;
  padding: 2px 5px;
  border-radius: 5px;
  color: #0b0999;
  border: 1px dotted #797b7c;
  background-color: #4cd12e;
`;
export const FeeEquiv = styled.div`
  align-self: flex-end;
  gap: 10px;
  font-size: 12px;
  font-weight: 700;
`;

export const FeeTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border-radius: 5px;
  background-color: #6d6969;
`;
export const FeeBuyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  padding: 5px;
  border-radius: 5px;
  background-color: #6d6969;
`;
export const FeeSellContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
  height: 100%;
  padding: 5px;
  border-radius: 5px;
  background-color: #6d6969;
`;

export const Calc = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 35%;
`;

export const DataWrapper = styled.div`
  display: flex;
  text-align: center;
  gap: 10px;
  padding: 5px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 5px;
  color: #a7a4a4;
  background-color: #6d6969;
`;
