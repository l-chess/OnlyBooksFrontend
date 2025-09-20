"use client";
import { useState } from "react";
import { SlOptionsVertical } from "react-icons/sl";
import { OptionsDropdown } from "../../atoms/OptionsDropdown/OptionsDropdown";

export const ChatOptions = () => {
  const options = [
    {
      label: "Profil melden",
      href: "/",
    },
  ];

  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="relative">
      <button type="button" onClick={() => setShowDropdown(!showDropdown)}>
        <SlOptionsVertical className="text-gray-400" />
      </button>
      {showDropdown && (
        <div className="absolute right-0">
          <OptionsDropdown options={options} width="w-40" />
        </div>
      )}
    </div>
  );
};
