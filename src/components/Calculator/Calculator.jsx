import { useState } from 'react';

import {
  Wrapper,
  Forma,
  FormWrapper,
  CalcButton,
  Calc,
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
        <Calc showCalc={showCalc} />
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
