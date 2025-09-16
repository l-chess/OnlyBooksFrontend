import type { ReactNode } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

export type CustomProps = {
  label: string;
  type: "button" | "dropdown";
  color: "lilla" | "gray" | "white";
  size: "small" | "medium";
  iconLeft?: ReactNode;
  onClick?: VoidFunction;
};

export const Custom = ({ label, type, color, size, iconLeft, onClick }: CustomProps) => {
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

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${colorTheme(color)} ${scale(size)} flex items-center gap-1 rounded-full`}
    >
      {iconLeft && iconLeft}
      {label}
      {type === "dropdown" && <FaChevronDown className={size === "small" ? "text-sm" : ""} />}
    </button>
  );
};
// TODO: add dropdown logic
