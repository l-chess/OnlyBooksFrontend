"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/src/utils/utils";
import { Custom } from "../../components/molecules/Custom/Custom";
import type { OfferDetailType } from "../offer/page";

type CartItem = OfferDetailType & { quantity?: number };

const CartPage = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [showCheckout, setShowCheckout] = useState(false);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [postCode, setPostCode] = useState("");
  const [city, setCity] = useState("");
  const [orderMessage, setOrderMessage] = useState("");

  const isAuthenticated = useAuth();

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(savedCart);
  }, []);

  const totalPrice = cart.reduce((sum, item) => {
    if (item.price && item.price !== "Tauschen") {
      return sum + Number(item.price) * (item.quantity || 1);
    }
    return sum;
  }, 0);

  const removeFromCart = (id: number) => {
    const updated = cart.filter((item) => item.id !== id);
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
    window.dispatchEvent(new Event("cartChanged"));
  };

  const updateQuantity = (id: number, delta: number) => {
    const updated = cart
      .map((item) => (item.id === id ? { ...item, quantity: (item.quantity || 1) + delta } : item))
      .filter((item) => (item.quantity ?? 0) > 0);

    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
    window.dispatchEvent(new Event("cartChanged"));
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
    window.dispatchEvent(new Event("cartChanged"));
  };

  const submitOrder = () => {
    if (!name || !address || !postCode || !city) {
      setOrderMessage("Bitte alle Felder ausfüllen!");
      return;
    }
    // Prototyp: keine echte Bestellung
    clearCart();
    setShowCheckout(false);
    setName("");
    setAddress("");
    setPostCode("");
    setCity("");

    alert("Danke für Ihre Bestellung! 🎉");
  };

  if (!isAuthenticated) {
    return (
      <div className="mx-auto mt-20 text-center">
        <p>
          Bitte zuerst{" "}
          <a href="/login" className="text-purple-800 underline">
            einloggen
          </a>
          !
        </p>
      </div>
    );
  }

  if (cart.length === 0) {
    return <p className="mt-20 text-center">Warenkorb ist leer</p>;
  }

  return (
    <div className="mx-auto w-2/3 space-y-6">
      {cart.map((item) => (
        <div key={item.id} className="flex items-center justify-between rounded border p-4">
          <div>
            <h2 className="font-bold">{item.title}</h2>
            <p>{item.author}</p>
            <p>{item.price !== "Tauschen" ? `${item.price}€` : "Tauschen"}</p>
            <div className="mt-2 flex items-center gap-2">
              <button
                type="button"
                onClick={() => updateQuantity(item.id, -1)}
                className="rounded border px-2 py-1"
              >
                -
              </button>
              <span>{item.quantity || 1}</span>
              <button
                type="button"
                onClick={() => updateQuantity(item.id, 1)}
                className="rounded border px-2 py-1"
              >
                +
              </button>
            </div>
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

      <div className="mt-4 flex items-center justify-between">
        <div className="font-bold text-xl">Gesamt: {totalPrice} €</div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setShowCheckout(!showCheckout)}
            className="rounded bg-purple-800 px-4 py-2 text-white"
          >
            Bestellung abschließen
          </button>
          <button
            type="button"
            onClick={clearCart}
            className="rounded bg-red-500 px-4 py-2 text-white"
          >
            Warenkorb leeren
          </button>
        </div>
      </div>

      {showCheckout && (
        <div className="mt-6 space-y-4 rounded border bg-gray-50 p-4">
          <h2 className="font-semibold text-xl">Bestellformular</h2>
          <input
            type="text"
            placeholder="Name"
            className="w-full rounded border p-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Adresse"
            className="w-full rounded border p-2"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <input
            type="text"
            placeholder="Postleitzahl"
            className="w-full rounded border p-2"
            value={postCode}
            onChange={(e) => setPostCode(e.target.value)}
          />
          <input
            type="text"
            placeholder="Stadt"
            className="w-full rounded border p-2"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button
            type="button"
            onClick={submitOrder}
            className="w-full rounded bg-purple-800 py-2 text-white"
          >
            Bestellung senden
          </button>
        </div>
      )}

      {orderMessage && (
        <p className="mt-4 text-center font-semibold text-green-700">{orderMessage}</p>
      )}
    </div>
  );
};

export default CartPage;
