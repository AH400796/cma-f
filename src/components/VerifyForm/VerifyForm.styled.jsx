import styled from 'styled-components';
import { Form, Field } from 'formik';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
export const VerifyTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  padding: 0 20px 20px 20px;
  font-weight: 500;

  color: #f85b12;
  background: linear-gradient(
    274.25deg,
    #453432 23.51%,
    rgba(69, 52, 50, 0.83) 50.89%,
    rgba(117, 104, 77, 0.81) 308.27%
  );
  box-shadow: 2px 3px 5px #3d3d3d;
  border-radius: 5px;
`;

export const VerifyText = styled.span`
  text-align: center;
  font-size: 16px;
  margin: 20px 0 0;
`;
export const LoginFormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 300px;
  padding: 20px;
  font-weight: 500;

  color: #f85b12;
  background: linear-gradient(
    274.25deg,
    #453432 23.51%,
    rgba(69, 52, 50, 0.83) 50.89%,
    rgba(117, 104, 77, 0.81) 308.27%
  );
  box-shadow: 2px 3px 5px #3d3d3d;
  border-radius: 5px;
`;

export const InputLabel = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;

  gap: 10px;
  font-size: 16px;
  margin-bottom: 10px;
`;

export const Verifyext = styled.span`
  font-size: 16px;
  margin: 20px 0 0;
`;

export const Input = styled(Field)`
  max-width: 300px;

  padding: 9px 15px 8px 15px;
  font-size: 16px;
  border: none;
  border-radius: 3px;
  color: #453432;
  background-color: #c0bcba;
  box-shadow: 1px 1px 6px #3d3d3d;
  outline: transparent;

  &::placeholder {
    font-size: 14px;
    color: #7a7a7a;
    background-color: #c0bcba;
  }
`;

export const CodeInput = styled(Field)`
  align-self: center;
  text-align: center;
  width: 120px;
  padding: 9px 15px 8px 15px;
  font-size: 24px;
  border: none;
  border-radius: 3px;
  color: #453432;
  background-color: #c0bcba;
  box-shadow: 1px 1px 6px #3d3d3d;
  outline: transparent;
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

export const ErrWrapper = styled.span`
  font-size: 12px;
  color: red;
  position: absolute;
  bottom: -20px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
  width: 120px;
  height: 40px;

  border-radius: 5px;

  color: #f85b12;
  background-color: #4e4039;
  border: 2px solid #f85b12;
  box-shadow: 1px 1px 3px #c9c1c1;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: #f85b12;
    color: #ffffff;
  }

  &:disabled {
    color: #bdbdbd;
    background-color: #4e4039;
    border: 2px solid #bdbdbd;

    cursor: auto;
  }
`;
