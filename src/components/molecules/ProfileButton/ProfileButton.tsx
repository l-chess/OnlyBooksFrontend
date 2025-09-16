import { use, useEffect, useRef, useState } from "react";
import { IoLogOutOutline, IoPersonCircleOutline } from "react-icons/io5";
import { OptionsDropdown } from "../../atoms/OptionsDropdown/OptionsDropdown";

export type ProfileButtonProps = {
  authenticated: boolean;
};

export const ProfileButton = ({ authenticated }: ProfileButtonProps) => {
  const options = () => {
    if (authenticated) {
      return [
        {
          label: "Profil",
          href: "/",
        },
        {
          label: (
            <p className="flex items-center gap-1">
              <IoLogOutOutline />
              Ausloggen
            </p>
          ),
          href: "/",
        },
      ];
    } else {
      return [
        {
          label: "Einloggen",
          href: "/",
        },
        {
          label: "Registrieren",
          href: "/",
        },
      ];
    }
  };

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
    <div className="relative w-fit">
      <button type="button" ref={containerRef} onClick={() => setShowDropdown(true)}>
        <IoPersonCircleOutline className="text-4xl text-purple-800" />
      </button>
      {showDropdown && (
        <div className="absolute top-[80%] right-0">
          <OptionsDropdown options={options()} />
        </div>
      )}
    </div>
  );
};
