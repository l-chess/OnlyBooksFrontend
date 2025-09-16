"use client";
import { useState } from "react";
import { IoLogOutOutline, IoPersonCircleOutline } from "react-icons/io5";
import { OptionsDropdown } from "../../atoms/OptionsDropdown/OptionsDropdown";

export type ProfileButtonProps = {
  authenticated: boolean;
  profileHref: string;
};

export const ProfileButton = ({ authenticated, profileHref }: ProfileButtonProps) => {
  const options = () => {
    if (authenticated) {
      return [
        {
          label: "Profil",
          href: profileHref,
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

  return (
    <div className="relative w-fit">
      <button
        type="button"
        onClick={() => setShowDropdown(!showDropdown)}
        className="flex cursor-pointer items-center"
      >
        <IoPersonCircleOutline className="text-4xl text-purple-800" />
      </button>
      {showDropdown && (
        <div className="absolute right-0">
          <OptionsDropdown options={options()} />
        </div>
      )}
    </div>
  );
};
