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
  const containerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative">
      <button type="button" ref={containerRef} onClick={() => setShowDropdown(true)}>
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
