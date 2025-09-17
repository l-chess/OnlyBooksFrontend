import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";

export type CheckboxProps = {
  label: string;
  checked: boolean;
  onClick?: VoidFunction;
};

export const Checkbox = ({ label, checked, onClick }: CheckboxProps) => {
  return (
    <label className="flex cursor-pointer items-center gap-1">
      <input type="checkbox" checked={checked} onChange={onClick} className="hidden" />
      {checked === false ? (
        <ImCheckboxUnchecked className="text-gray-400" />
      ) : (
        <ImCheckboxChecked className="text-purple-800" />
      )}
      <span className="font-semibold text-gray-400">{label}</span>
    </label>
  );
};
