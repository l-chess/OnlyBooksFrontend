import Link from "next/link";
import { FiBookOpen } from "react-icons/fi";

export const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-1 text-purple-800">
      <FiBookOpen className="text-3xl" />
      <h1 className="font-bold text-2xl">OnlyBooks</h1>
    </Link>
  );
};
