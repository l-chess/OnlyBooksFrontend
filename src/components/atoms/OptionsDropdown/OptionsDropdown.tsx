import Link from "next/link";
import type { ReactNode } from "react";

export type Option = {
  label: string | ReactNode;
  href: string;
};

export type OptionsDropdownProps = {
  options: Option[];
  width?: string;
};

export const OptionsDropdown = ({ options, width = "max-w-fit" }: OptionsDropdownProps) => {
  return (
    <div
      className={`${width} rounded-lg border-2 border-gray-400 bg-white px-2 text-center font-semibold text-gray-400`}
    >
      {options.map((option, index) => {
        const isLast = (index: number) => {
          return index === options.length - 1;
        };
        return (
          <Link key={index} href={option.href}>
            <div
              className={`${!isLast(index) && "border-b border-b-gray-400"} p-1 hover:underline`}
            >
              {option.label}
            </div>
          </Link>
        );
      })}
    </div>
  );
};
