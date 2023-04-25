import { useState } from 'react';
import calculator from '../../images/calculator.svg';

import {
  Wrapper,
  Forma,
  FormWrapper,
  CalcButton,
  CalcIcon,
  ExtraWrapper,
} from './Calculator.styled';

export default function Calculator({ data }) {
  const [showCalc, setShowCalc] = useState(false);

  const handleClickCalc = () => {
    setShowCalc(prevState => !prevState);
  };
  return (
    <ExtraWrapper>
      <CalcButton title="Caclulator" onClick={handleClickCalc}>
        <CalcIcon src={calculator} alt="calculator" />
      </CalcButton>
      <Wrapper>
        <FormWrapper showCalc={showCalc}>
          <Forma action="">
            <input type="text" />
          </Forma>
        </FormWrapper>
      </Wrapper>
    </ExtraWrapper>
  );
}
