import { ReactComponent as CalcComp } from '../../images/calculator.svg';
import styled from 'styled-components';
import { Formik } from 'formik';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 2px;
  background-color: transparent;
  overflow: hidden;
`;

export const ExtraWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 100%;
  padding: 0 0 0 10px;
  width: 65%;
  height: 105%;
  background-color: transparent;
`;

export const CalcButton = styled.button`
  position: absolute;
  z-index: 100;
  top: 0;
  left: -80px;
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
export const FormWrapper = styled.div`
  position: absolute;
  top: 0;
  width: 95%;
  height: 95%;
  padding: 10px 10px 10px 50px;
  background-color: #a7a7a7;

  border-radius: 2px;
  box-shadow: 2px 2px 5px 0px #070707;
  right: 110%;
  transition: transform 400ms ease-in-out;
  transform: ${props =>
    !props.showCalc ? 'translateX(0)' : 'translateX(102%)'};
`;

export const Forma = styled(Formik)`
  padding: 10px 10px 10px 50px;
  border: 1px solid #cc3b0f;
  box-shadow: 2px 2px 5px 0px #070707;
`;

export const BlockWrapper = styled.div`
  display: flex;

  gap: 10px;
  margin-bottom: 10px;
`;
