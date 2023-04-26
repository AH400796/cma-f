import { Wrapper, Forma, FormWrapper } from './Calculator.styled';

export default function Calculator({ data, showCalc }) {
  return (
    <Wrapper>
      <FormWrapper showCalc={showCalc}>
        <Forma action="">
          <input type="text" />
        </Forma>
      </FormWrapper>
    </Wrapper>
  );
}
