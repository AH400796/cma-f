import { Input } from './RangeInput.styled.jsx';

export default function RangeInput({ value, onChange }) {
  return (
    <Input
      type="range"
      name="arbpercentage"
      value={value}
      min="0"
      max="20"
      step="0.1"
      id="arb-percentage"
      onChange={event => onChange(event)}
    />
  );
}
