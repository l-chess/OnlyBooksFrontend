import Link from "next/link";
import { FaChevronRight } from "react-icons/fa6";
import { IoPersonCircleOutline } from "react-icons/io5";

export type ProfileTeaserProps = {
  name: string;
  variant: "profile" | "external";
};

export const ProfileTeaser = ({ name, variant }: ProfileTeaserProps) => {
  return (
    <Link href="/" className={`flex items-center ${variant === "external" ? "w-full" : ""}`}>
      <IoPersonCircleOutline className="left-0 text-4xl" />
      <span className="font-semibold text-lg">{name}</span>
      {variant === "external" && (
        <span className="right-0 ml-50 flex items-center font-medium text-gray-400 text-lg">
          Profil ansehen <FaChevronRight className="text-sm" />
        </span>
      )}
    </Link>
  );
};
