import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";

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
    <label className="flex cursor-pointer items-center gap-1">
      <input type="checkbox" checked={checked} onChange={handleChange} className="hidden" />
      {checked === false ? (
        <ImCheckboxUnchecked className="text-gray-400" />
      ) : (
        <ImCheckboxChecked className="text-purple-800" />
      )}
      <span className="font-medium text-gray-400">{label}</span>
    </label>
  );
};
