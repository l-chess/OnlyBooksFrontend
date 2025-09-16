import Link from "next/link";
import { LuUpload } from "react-icons/lu";

export const UploadButton = () => {
  return (
    <Link href="/">
      <LuUpload className="text-3xl text-purple-800" />
    </Link>
  );
};
