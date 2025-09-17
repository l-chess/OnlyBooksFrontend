import Link from "next/link";
import { Input } from "@/src/components/atoms/Input/Input";

const Login = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center space-y-2">
      <h1 className="text-center font-bold text-2xl text-purple-800">Einloggen</h1>
      <div className="flex w-50 flex-col space-y-2">
        <Input variant="framed" size="small" placeholder="Benutzername" />
        <Input variant="framed" size="small" placeholder="Passwort" />
      </div>
      <Link href="/registration" className="text-gray-400">
        Noch kein Konto? Dann <u>hier registrieren.</u>
      </Link>
    </div>
  );
};

export default Login;
