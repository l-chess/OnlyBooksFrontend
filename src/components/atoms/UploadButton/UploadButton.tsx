import Link from "next/link";
import { LuUpload } from "react-icons/lu";

export type UploadButtonProps = {
  href: string;
};

export const UploadButton = ({ href }: UploadButtonProps) => {
  return (
    <Link href={href}>
      <LuUpload className="text-3xl text-purple-800" />
    </Link>
  );
};
