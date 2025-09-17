import Link from "next/link";
import { Input } from "@/src/components/atoms/Input/Input";

const Registration = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center space-y-2">
      <h1 className="text-center font-bold text-2xl text-purple-800">Registrieren</h1>
      <div className="w-60 space-y-4">
        <Input variant="framed" size="small" placeholder="Benutzername" />
        <div className="space-y-1">
          <Input variant="framed" size="small" placeholder="Passwort" />
          <Input variant="framed" size="small" placeholder="Passwort bestätigen" />
        </div>
      </div>
      <Link href="/login" className="text-gray-400">
        Du hast schon ein Konto? Dann <u>hier einloggen.</u>
      </Link>
    </div>
  );
};

export default Registration;
