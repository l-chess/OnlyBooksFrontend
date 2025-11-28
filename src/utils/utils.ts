// src/hooks/useAuth.ts
import { useEffect, useState } from "react";

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const check = localStorage.getItem("isAuthenticated") === "true";
    setIsAuthenticated(check);

    const handleAuthChange = () => {
      setIsAuthenticated(localStorage.getItem("isAuthenticated") === "true");
    };

    window.addEventListener("authChanged", handleAuthChange);
    return () => window.removeEventListener("authChanged", handleAuthChange);
  }, []);

  return isAuthenticated;
};
