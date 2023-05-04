import styled from 'styled-components';
import { Form, Field } from 'formik';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export const LoginFormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
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
  margin-bottom: 30px;
`;

export const Input = styled(Field)`
  max-width: 300px;
  outline: transparent;
  padding: 9px 15px 8px 15px;
  font-size: 16px;
  border: none;
  border-radius: 3px;
  color: #453432;
  background-color: #c0bcba;
  box-shadow: 1px 1px 6px #3d3d3d;

  &::placeholder {
    font-size: 14px;
    color: #7a7a7a;
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
  width: 100px;
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

export const ButtonSignUp = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
  width: 100px;
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
`;
