import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 5px 15px;
  width: 100%;

  border-radius: 2px;
  background: linear-gradient(
    99.04deg,
    #c9f3c1 -1.74%,
    rgba(255, 255, 255, 0.37) 116.29%
  );
  box-shadow: 2px 2px 5px 0px #444343;
`;

export const ExtraWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 50%;
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

  background-color: #da5151;
  border: none;
  border-radius: 2px 0 0 0;
  clip-path: polygon(0 0, 0% 100%, 100% 0);

  cursor: pointer;
`;

export const Link = styled.a`
  text-decoration: none;
`;

export const WithdrLink = styled.a`
  display: flex;
  justify-content: center;
  text-decoration: none;
  padding: 3px;
  font-weight: 900;
  color: #797b7c;
`;
export const WithdrCont = styled.div`
  width: 120px;
  padding: 3px 10px;
  text-align: center;
  border: 3px solid #797b7c;
  border-radius: 10px;
`;

export const Type = styled.span`
  font-size: 20px;
  font-weight: 700;
  color: #28680b;
`;

export const MarketWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-bottom: 10px;
`;

export const Marketplace = styled.span`
  font-size: 20px;
  font-weight: 900;
  padding: 3px 10px 5px;
  color: #221f0d;
  text-shadow: 2px 2px 7px #e7e703;
`;

export const Arrow = styled.img`
  width: 30px;
`;

export const DataWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding: 2px 5px;
  background-color: #e1f3dd;

  margin-bottom: 5px;
  border: 1px dotted #797b7c;
  border-radius: 5px;
`;

export const DataFeeList = styled.ul`
  list-style: none;
`;

export const DataFeeListItem = styled.li`
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 10px;
  padding: 2px 5px;
  border-radius: 5px;
  background-color: #e1f3dd;
  border: 1px dotted #797b7c;
`;

export const Data = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  font-weight: 600;
  color: #2e2d2d;
`;
export const DataFee = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: #2e2d2d;
`;

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
