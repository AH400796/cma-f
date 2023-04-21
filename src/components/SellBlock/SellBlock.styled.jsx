import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px 15px;
  width: 350px;

  border-radius: 5px;
  background-color: #f3c2c2;
  box-shadow: 2px 2px 5px 0px #444343;
`;

export const Link = styled.a`
  text-decoration: none;
`;

export const Type = styled.span`
  font-size: 16px;
  font-weight: 700;
  color: red;
`;

export const MarketWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
`;

export const Marketplace = styled.span`
  font-size: 20px;
  font-weight: 900;
  color: #141111;
`;

export const Arrow = styled.img`
  width: 50px;
`;

export const DataWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding: 2px 5px;
  background-color: #f5dada;
  margin-bottom: 10px;
  border: 1px dotted #797b7c;
  border-radius: 5px;
`;

export const Data = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #2e2d2d;
`;

export const DataValue = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: black;
`;
