"use client";
import { useState } from "react";
import { IoLogOutOutline, IoPersonCircleOutline } from "react-icons/io5";
import { OptionsDropdown } from "../../atoms/OptionsDropdown/OptionsDropdown";

export type ProfileButtonProps = {
  authenticated: boolean;
};

export const ProfileButton = ({ authenticated }: ProfileButtonProps) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const options = () => {
    if (authenticated) {
      return [
        {
          label: "Profil",
          href: "/profile",
        },
        {
          label: (
            <button
              type="button"
              className="flex items-center gap-1"
              onClick={() => {
                localStorage.removeItem("isAuthenticated");
                localStorage.removeItem("username");
                window.location.href = "/login";
              }}
            >
              <IoLogOutOutline />
              Ausloggen
            </button>
          ),
          href: "#",
        },
      ];
    } else {
      return [
        {
          label: "Einloggen",
          href: "/login",
        },
        {
          label: "Registrieren",
          href: "/registration",
        },
      ];
    }
  };

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
