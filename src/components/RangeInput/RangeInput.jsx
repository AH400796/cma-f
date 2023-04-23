import { Input } from './RangeInput.styled.jsx';

export default function RangeInput({ value, onChange, setupRange }) {
  const [min, max, step, name] = setupRange;
  return (
    <Input
      type="range"
      name={name}
      value={value}
      min={min}
      max={max}
      step={step}
      id={name}
      onChange={event => onChange(event)}
    />
  );
}
