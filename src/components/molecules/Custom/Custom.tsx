"use client";
import { type ReactNode, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { type Option, OptionsDropdown } from "../../atoms/OptionsDropdown/OptionsDropdown";

export type CustomProps = {
  label?: string;
  type: "button" | "dropdown";
  color: "lilla" | "gray" | "white";
  size: "small" | "medium";
  width?: string;
  iconLeft?: ReactNode;
  onClick?: VoidFunction;
  options?: Option[];
};

export const Custom = ({
  label,
  type,
  color,
  size,
  width,
  iconLeft,
  onClick,
  options,
}: CustomProps) => {
  const colorTheme = (color: string) => {
    switch (color) {
      case "lilla":
        return "bg-purple-800 text-white";
      case "gray":
        return "bg-gray-300 text-black";
      case "white":
        return "text-gray-400 border-2 border-gray-400";
    }
  };

  const scale = (size: string) => {
    switch (size) {
      case "small":
        return "px-3 py-0.5";
      case "medium":
        return "font-semibold px-4 py-1";
    }
  };

  const [showDropdown, setShowDropdown] = useState(false);
  if (type === "dropdown") {
    onClick = () => setShowDropdown(!showDropdown);
  }

  return (
    <div className="relative w-full">
      <button
        type="button"
        onClick={onClick}
        className={`${colorTheme(color)} ${scale(size)} ${width} flex items-center justify-between gap-1 rounded-full ${onClick && "cursor-pointer"}`}
      >
        <div className="flex items-center gap-1">
          {iconLeft && iconLeft}
          {label && label}
        </div>
        {type === "dropdown" && !showDropdown && (
          <FaChevronDown className={size === "small" ? "text-sm" : ""} />
        )}
        {type === "dropdown" && showDropdown && (
          <FaChevronUp className={size === "small" ? "text-sm" : ""} />
        )}
      </button>
      {showDropdown && type === "dropdown" && options && (
        <div className="absolute top-full right-0 left-0 mt-1 flex justify-center">
          <OptionsDropdown
            options={options.map((opt) => ({
              ...opt,
              onClick: () => {
                opt.onClick?.();
                setShowDropdown(false);
              },
            }))}
          />
        </div>
      )}
    </div>
  );
};
