import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  top: -5px;
  left: 100%;
  width: 65%;
  height: 500px;
  background-color: transparent;
  overflow: hidden;
`;

export const FormWrapper = styled.div`
  position: absolute;
  top: 5px;
  width: 96%;
  height: 224px;
  padding: 10px;
  background-color: #414040;
  border-radius: 2px;
  box-shadow: 2px 2px 5px 0px #070707;
  right: 110%;
  transition: transform 400ms ease-in-out;
  transform: ${props =>
    props.showCalc ? 'translateX(112%)' : 'translateX(0)'};
`;

export const FeeFormWrapper = styled.div`
  position: absolute;
  top: 5px;
  width: 96%;

  height: 224px;
  padding: 10px;
  background-color: #414040;
  border-radius: 2px;
  box-shadow: 2px 2px 5px 0px #070707;
  right: 110%;
  transition: transform 400ms ease-in-out;
  transform: ${props => {
    if (props.showCalc) {
      return 'translate(112%, 105%)';
    } else if (props.showFee) {
      return 'translateX(112%)';
    }
  }};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`;

export const CalcText = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100px;
  height: 20px;
  font-size: 14px;
  font-weight: 600;
  color: #afafaa;
`;

export const PointerText = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10px;
  height: 20px;
  font-size: 14px;
  font-weight: 600;
  color: #afafaa;
`;

export const ResultText = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 21px;
  font-size: 16px;
  font-weight: 900;
  border-radius: 5px;
  background-color: #a7a4a4;
  color: #07507e;
  color: ${props => (Number(props.children) > 0 ? '#07507e' : '#be1f1a')};
`;

export const SellWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  padding: 5px;
  border-radius: 5px;
  background-color: #6d6969;
`;

export const BuyWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  padding: 5px;
  border-radius: 5px;
  background-color: #6d6969;
`;

export const FeeWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  padding: 5px;
  border-radius: 5px;
  background-color: #6d6969;
`;

export const ArbLevel = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100px;
  height: 20px;
  font-size: 16px;
  font-weight: 900;
  color: #5ec532;
`;

export const BlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: center;
  gap: 2px;
`;

export const Input = styled.input`
  display: flex;
  width: 100px;
  height: 20px;
  padding: 1px 5px 2px 5px;
  text-align: center;
  font-weight: 900;
  outline: none;
  border: none;
  border-radius: 5px;
  color: #07507e;
  appearance: none;
  margin: 0;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &[type='number'] {
    -moz-appearance: textfield;
  }
`;

export const SellPriceInput = styled.input`
  display: flex;
  width: 100px;
  height: 20px;
  padding: 1px 5px 2px 5px;
  text-align: center;
  font-weight: 900;
  color: #e04747;
  outline: none;
  border: none;
  border-radius: 5px;
  appearance: none;
  margin: 0;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &[type='number'] {
    -moz-appearance: textfield;
  }
`;

export const BuyPriceInput = styled.input`
  display: flex;
  width: 100px;
  height: 20px;
  padding: 1px 5px 2px 5px;
  text-align: center;
  font-weight: 900;
  color: #0a8611;
  outline: none;
  border: none;
  border-radius: 5px;
  appearance: none;
  margin: 0;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &[type='number'] {
    -moz-appearance: textfield;
  }
`;

export const InputLabel = styled.label``;
