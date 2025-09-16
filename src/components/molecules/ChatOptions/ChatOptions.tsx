import { useEffect, useRef, useState } from "react";
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
        <SlOptionsVertical />
      </button>
      {showDropdown && (
        <div className="absolute right-0 w-32">
          <OptionsDropdown options={options} />
        </div>
      )}
    </div>
  );
};
