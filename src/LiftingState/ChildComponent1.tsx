/* eslint-disable @typescript-eslint/no-unused-vars */
interface ChildComponent1Props {
  value: string;
  onChange: (value: string) => void;
}

export default function ChildComponent1({ value, onChange }: ChildComponent1Props) {
  return (
    <input
      type="text"
      placeholder="Child Component 1"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

