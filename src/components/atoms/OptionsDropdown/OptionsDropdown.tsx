import Link from "next/link";
import type { ReactNode } from "react";

export type Option = {
  label: string | ReactNode;
  href?: string;
  onClick?: () => void;
};

export type OptionsDropdownProps = {
  options: Option[];
  width?: string;
};

export const OptionsDropdown = ({ options, width = "max-w-fit" }: OptionsDropdownProps) => {
  return (
    <div
      className={`${width} max-h-50 overflow-y-scroll rounded-lg border-2 border-gray-400 bg-white px-2 text-center font-semibold text-gray-400`}
    >
      {options.map((option, index) => {
        const isLast = index === options.length - 1;

        if (option.onClick) {
          return (
            <button
              key={index}
              type="button"
              onClick={option.onClick}
              className={`${!isLast && "border-b border-b-gray-400"} w-full p-1 text-left hover:underline`}
            >
              {option.label}
            </button>
          );
        }

        return (
          <Link key={index} href={option.href ?? "#"}>
            <div className={`${!isLast && "border-b border-b-gray-400"} p-1 hover:underline`}>
              {option.label}
            </div>
          </Link>
        );
      })}
    </div>
  );
};
