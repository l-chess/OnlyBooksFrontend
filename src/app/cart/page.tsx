"use client";

import { useEffect, useState } from "react";
import { Custom } from "../../components/molecules/Custom/Custom";
import type { OfferDetailType } from "../offer/[id]/page";

const CartPage = () => {
  const [cart, setCart] = useState<OfferDetailType[]>([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(savedCart);
  }, []);

  const removeFromCart = (id: number) => {
    const updated = cart.filter((item) => item.id !== id);
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  if (cart.length === 0) return <p className="mt-20 text-center">Warenkorb ist leer</p>;

  return (
    <div className="mx-auto w-2/3 space-y-6">
      {cart.map((item) => (
        <div key={item.id} className="flex items-center justify-between rounded border p-4">
          <div>
            <h2 className="font-bold">{item.title}</h2>
            <p>{item.author}</p>
            <p>{item.price !== "Tauschen" ? `${item.price}€` : "Tauschen"}</p>
          </div>
          <Custom
            type="button"
            color="gray"
            label="Entfernen"
            size="small"
            onClick={() => removeFromCart(item.id)}
          />
        </div>
      ))}
    </div>
  );
};

export default CartPage;
