"use client";

import type { ChangeEvent, ReactNode } from "react";

export type InputProps = {
  variant: "underlined" | "framed";
  size: "small" | "medium";
  placeholder?: string;
  iconLeft?: ReactNode;
  value?: string; // <- hinzufügen
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  type?: string;
};

export const Input = ({
  variant,
  size,
  placeholder,
  iconLeft,
  value,
  onChange,
  type,
}: InputProps) => {
  const variantClass = (variant: string) => {
    if (variant === "underlined") {
      return "border-b-2";
    } else if (variant === "framed") {
      if (size === "small") {
        return "border-2 px-4 py-1 rounded-full";
      } else if (size === "medium") {
        return "border-2 px-4 rounded-2xl h-25";
      }
    }
  };

  return (
    <div
      className={`flex items-center gap-1 border-gray-400 py-1 text-gray-400 ${variantClass(variant)}`}
    >
      {iconLeft && iconLeft}
      {size === "small" ? (
        <input
          className="w-full font-semibold text-black placeholder-gray-400 outline-none placeholder:font-semibold"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          type={type ?? "text"}
        />
      ) : (
        <textarea
          className="h-full w-full resize-none overflow-scroll font-semibold text-black placeholder-gray-400 outline-none placeholder:font-semibold"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  );
};
