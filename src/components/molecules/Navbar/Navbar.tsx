import { Logo } from "../../atoms/Logo/Logo";
import { UploadButton } from "../../atoms/UploadButton/UploadButton";
import { ProfileButton, type ProfileButtonProps } from "../ProfileButton/ProfileButton";
import { Searchbar } from "../Searchbar/Searchbar";

export const Navbar = ({ authenticated, profileHref }: ProfileButtonProps) => {
  return (
    <nav className="flex w-full items-center px-10 py-1">
      <div className="flex flex-1 items-center">
        <Logo />
      </div>
      <div>
        <Searchbar />
      </div>
      <div className="flex flex-1 items-center justify-end gap-2">
        <UploadButton />
        <ProfileButton profileHref={profileHref} authenticated={authenticated} />
      </div>
    </nav>
  );
};
