"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { LuShoppingCart } from "react-icons/lu";
import { Logo } from "../../atoms/Logo/Logo";
import { UploadButton } from "../../atoms/UploadButton/UploadButton";
import { ProfileButton } from "../ProfileButton/ProfileButton";

export const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const updateAuth = () => {
      setIsAuthenticated(localStorage.getItem("isAuthenticated") === "true");
    };
    updateAuth();
    window.addEventListener("authChanged", updateAuth);

    const updateCart = () => {
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");
      setCartCount(cart.length);
    };
    updateCart();
    window.addEventListener("cartChanged", updateCart);

    return () => {
      window.removeEventListener("authChanged", updateAuth);
      window.removeEventListener("cartChanged", updateCart);
    };
  }, []);

  return (
    <nav className="flex w-full items-center px-10 py-4">
      <div className="flex flex-1 items-center">
        <Logo />
      </div>
      <div>{/*<Searchbar />*/}</div>
      <div className="flex flex-1 items-center justify-end gap-2">
        <UploadButton />
        <Link href="/cart" className="relative">
          <LuShoppingCart className="text-3xl text-purple-800" />
          {cartCount > 0 && (
            <span className="-top-2 -right-2 absolute rounded-full bg-red-500 px-1 font-bold text-white text-xs">
              {cartCount}
            </span>
          )}
        </Link>
        <ProfileButton authenticated={isAuthenticated} />
      </div>
    </nav>
  );
};
