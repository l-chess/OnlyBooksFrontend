export type CheckboxProps = {
  label: string;
  checked: boolean;
  onChange?: (checked: boolean) => void;
};

export const Checkbox = ({ label, checked, onChange }: CheckboxProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.checked);
  };
  return (
    <label>
      <input type="checkbox" checked={checked} onChange={handleChange} className="hidden" />
      <span>{label}</span>
    </label>
  );
};
