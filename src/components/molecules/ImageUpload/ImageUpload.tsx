import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { IoCameraSharp, IoImagesSharp } from "react-icons/io5";
import { LuUpload } from "react-icons/lu";
import { OptionsDropdown } from "../../atoms/OptionsDropdown/OptionsDropdown";

export type ImageUploadProps = {
  variant: "specific" | "additional";
  label?: string;
};

export const ImageUpload = ({ variant, label }: ImageUploadProps) => {
  const options = [
    {
      label: (
        <p className="flex items-center gap-1">
          <IoCameraSharp />
          Foto machen
        </p>
      ),
      href: "/",
    },
    {
      label: (
        <p className="flex items-center gap-1">
          <IoImagesSharp />
          Aus Gallerie wählen
        </p>
      ),
      href: "/",
    },
  ];

  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setShowDropdown(!showDropdown)}
        className="relative flex aspect-square w-40 flex-col items-center justify-center rounded-2xl bg-gray-300 text-black"
      >
        {variant === "specific" && <LuUpload className="text-2xl" />}{" "}
        {variant === "additional" && <FaPlus className="text-2xl" />}
        <span className="font-medium text-lg">{label}</span>
      </button>
      {showDropdown && (
        <div className="absolute top-1/2 left-1/2 z-50">
          <OptionsDropdown options={options} width="min-w-50" />
        </div>
      )}
    </div>
  );
};
