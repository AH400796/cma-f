import styled from 'styled-components';
import { Formik } from 'formik';

export const Wrapper = styled.div`
  position: absolute;
  top: -5px;
  left: 101%;
  width: 65%;
  height: 105%;
  background-color: transparent;
  overflow: hidden;
`;

export const FormWrapper = styled.div`
  position: absolute;
  top: 5px;
  width: 96%;
  height: 95%;
  padding: 10px 10px 10px 50px;
  background-color: #414040;

  border-radius: 2px;
  box-shadow: 2px 2px 5px 0px #070707;
  right: 110%;
  transition: transform 400ms ease-in-out;
  transform: ${props =>
    !props.showCalc ? 'translateX(0)' : 'translateX(112%)'};
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
