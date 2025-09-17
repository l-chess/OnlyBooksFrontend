import { Input } from "@/src/components/atoms/Input/Input";

const RouteBPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center space-y-2">
      <h1 className="text-center font-bold text-2xl text-purple-800">Einloggen</h1>
      <div className="flex w-50 flex-col space-y-2">
        <Input variant="framed" size="small" placeholder="Benutzername" />
        <Input variant="framed" size="small" placeholder="Passwort" />
      </div>
    </div>
  );
};

export default RouteBPage;
