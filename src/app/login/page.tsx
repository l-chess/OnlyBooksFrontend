"use client";

import Link from "next/link";
import { useState } from "react";
import { Input } from "@/src/components/atoms/Input/Input";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const user = await response.json();
        localStorage.setItem("isAuthenticated", "true");
        localStorage.setItem("username", user.username);
        window.dispatchEvent(new Event("authChanged"));
        window.location.href = "/";
        setMessage(`Willkommen zurück, ${user.username}! 🎉`);
      } else {
        setMessage("Benutzername oder Passwort falsch!");
      }
    } catch (error) {
      console.error(error);
      setMessage("Server-Fehler beim Login!");
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center space-y-2">
      <h1 className="text-center font-bold text-2xl text-purple-800">Einloggen</h1>
      <div className="flex w-50 flex-col space-y-2">
        <Input
          variant="framed"
          size="small"
          placeholder="Benutzername"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          variant="framed"
          size="small"
          placeholder="Passwort"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
      </div>

      <button
        type="button"
        onClick={handleLogin}
        className="mt-4 w-full rounded bg-purple-800 px-4 py-2 text-white hover:bg-purple-700"
      >
        Einloggen
      </button>

      {message && <p className="mt-2 text-gray-600 text-sm">{message}</p>}

      <Link href="/registration" className="text-gray-400">
        Noch kein Konto? Dann <u>hier registrieren.</u>
      </Link>
    </div>
  );
};

export default Login;
