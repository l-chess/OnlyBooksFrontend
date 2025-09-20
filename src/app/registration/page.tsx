"use client";

import Link from "next/link";
import { useState } from "react";
import { Input } from "@/src/components/atoms/Input/Input";

const Registration = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = async () => {
    if (password !== passwordConfirm) {
      setMessage("Passwörter stimmen nicht überein!");
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/api/auth/registrieren", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        setMessage("Registrierung erfolgreich! 🎉");
      } else {
        setMessage("Fehler bei der Registrierung.");
      }
    } catch (error) {
      console.error(error);
      setMessage("Server-Fehler!");
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center space-y-2">
      <h1 className="text-center font-bold text-2xl text-purple-800">Registrieren</h1>
      <div className="w-60 space-y-4">
        <Input
          variant="framed"
          size="small"
          placeholder="Benutzername"
          value={username}
          onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
            setUsername(e.target.value)
          }
        />
        <div className="space-y-1">
          <Input
            variant="framed"
            size="small"
            placeholder="Passwort"
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
              setPassword(e.target.value)
            }
            type="password"
          />
          <Input
            variant="framed"
            size="small"
            placeholder="Passwort bestätigen"
            value={passwordConfirm}
            onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
              setPasswordConfirm(e.target.value)
            }
            type="password"
          />
        </div>
      </div>

      <button
        type="button"
        onClick={handleRegister}
        className="mt-2 w-full rounded bg-purple-800 px-4 py-2 text-white hover:bg-purple-700"
      >
        Registrieren
      </button>

      {message && <p className="mt-2 text-gray-600 text-sm">{message}</p>}

      <Link href="/login" className="text-gray-400">
        Du hast schon ein Konto? Dann <u>hier einloggen.</u>
      </Link>
    </div>
  );
};

export default Registration;
