import { ReactComponent as Star } from '../../images/star.svg';
import { ReactComponent as CalcComp } from '../../images/calculator.svg';
import { ReactComponent as Information } from '../../images/info.svg';
import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0px 10px 10px;

  border-radius: 2px;
  background-color: #414040;
  box-shadow: 2px 2px 5px 0px #070707;
`;

export const ExtraWrapper = styled.li`
  position: relative;
  margin-bottom: 20px;
`;

export const ValueWrapper = styled.div`
  width: 100%;
`;

export const PairName = styled.span`
  padding: 10px;
  font-size: 24px;
  font-weight: bold;
  color: #fd4108;
`;

export const StarButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
  padding: 10px;
`;

export const StarIcon = styled(Star)`
  width: 20px;
  height: 20px;
  fill: ${p => (p.fixedArb ? '#cf5923' : '#ffffff')};
  &:hover {
    fill: #cf5923;
  }
`;

export const InfoButton = styled.button`
  position: absolute;
  top: 0;
  right: 80px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  padding: 8px;
`;

export const Info = styled(Information)`
  width: 25px;
  height: 25px;
  fill: ${p => (p.showInfo ? '#cf5923' : '#ffffff')};
  &:hover {
    fill: #cf5923;
  }
`;
export const CalcButton = styled.button`
  position: absolute;

  top: 0;
  right: 40px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  padding: 10px;
`;

export const Calc = styled(CalcComp)`
  width: 20px;
  height: 20px;
  fill: ${p => (p.showCalc ? '#cf5923' : '#ffffff')};
  &:hover {
    fill: #cf5923;
  }
`;

export const Arbitrage = styled.span`
  padding: 0 10px;
  font-size: 28px;
  font-weight: bold;
  color: #5ec532;
`;

export const BlockWrapper = styled.div`
  display: flex;

  gap: 10px;
  margin-bottom: 10px;
`;

export const ArbWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;
