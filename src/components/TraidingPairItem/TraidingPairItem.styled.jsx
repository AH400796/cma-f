import { ReactComponent as Star } from '../../images/star.svg';
import { ReactComponent as CalcComp } from '../../images/calculator.svg';
import { ReactComponent as Information } from '../../images/info.svg';
import { ReactComponent as Arrow } from '../../images/arrow.svg';
import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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
  color: #f85b12;
`;
export const ArbWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  width: 80%;
  padding: 0 20px;
`;

export const Arbitrage = styled.span`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 10px;
  font-size: 28px;
  font-weight: bold;
  color: #5ec532;
`;

export const ArrowWraper = styled.span`
  transform: rotate(180deg);
  color: ${props => {
    const { arbValue, prevArbValue } = props;
    if (arbValue > prevArbValue) {
      return '#2bbd18';
    } else if (arbValue < prevArbValue) {
      return '#e72727';
    }
  }};
  transform: ${props => {
    const { arbValue, prevArbValue } = props;
    if (arbValue > prevArbValue) {
      return 'rotate(-90deg)';
    } else if (arbValue < prevArbValue) {
      return 'rotate(90deg)';
    }
  }};
`;

export const ArbArrow = styled(Arrow)`
  width: 20px;
  height: 20px;

  fill: currentColor;
`;

export const StarButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
  padding: 10px;
  color: ${props => (props.fixedArb ? '#cf5923' : '#ffffff')};
`;

export const StarIcon = styled(Star)`
  width: 20px;
  height: 20px;
  transform: scale(1);
  transition: transform 250ms ease;
  fill: currentColor;
  &:hover {
    transform: scale(1.3);
  }
`;

export const FeeButton = styled.button`
  position: absolute;
  top: 0;
  right: 80px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  padding: 8px;
  color: ${props => (props.showFee ? '#cf5923' : '#ffffff')};
`;

export const Fee = styled(Information)`
  width: 25px;
  height: 25px;
  transform: scale(1);
  transition: transform 250ms ease;
  fill: currentColor;
  &:hover {
    transform: scale(1.3);
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
  color: ${props => (props.showCalc ? '#cf5923' : '#ffffff')};
`;

export const Calc = styled(CalcComp)`
  width: 20px;
  height: 20px;
  transform: scale(1);
  transition: transform 250ms ease;
  fill: currentColor;
  &:hover {
    transform: scale(1.3);
  }
`;

export const BlockWrapper = styled.div`
  display: flex;
  gap: 10px;
`;
