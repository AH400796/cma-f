import styled from 'styled-components';

export const Wrapper = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0px 10px 10px;
  margin-bottom: 20px;

  border-radius: 10px;
  background-color: #a7a7a7;
  box-shadow: 2px 2px 5px 0px #070707;
`;

export const ValueWrapper = styled.div`
  width: 100%;
`;

export const PairName = styled.span`
  padding: 10px;
  font-size: 24px;
  font-weight: bold;
  color: #cc3b0f;
`;

export const Arbitrage = styled.span`
  padding: 0 10px 10px;
  font-size: 28px;
  font-weight: bold;
  color: ${props => {
    return Number(props.children[0]) < 0 ? '#aa1111' : '#327c12';
  }};
`;

export const BlockWrapper = styled.div`
  display: flex;

  gap: 10px;
  margin-bottom: 10px;
`;
export const ArbWrapper = styled.div`
  align-items: center;
  display: flex;
  gap: 30px;
`;
