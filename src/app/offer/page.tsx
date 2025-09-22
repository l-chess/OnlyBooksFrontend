"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Image } from "@/src/components/atoms/Image/Image";
import { Custom } from "@/src/components/molecules/Custom/Custom";

export type OfferDetailType = {
  id: number;
  title: string;
  author: string;
  price?: string | number;
  condition?: string;
  postCode?: string;
  city?: string;
  genre?: string;
  language?: string;
  publisher?: string;
  year?: string;
  pages?: string;
  isbn?: string;
  tags?: string[];
  description?: string;
  coverImage?: string;
  image?: { src: string; alt: string; className?: string };
  size?: string;
};

const OfferPage = () => {
  const { id } = useParams();
  const [offer, setOffer] = useState<OfferDetailType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!id) return;

    (async () => {
      try {
        const res = await fetch(`http://localhost:8080/api/books/${id}`);
        if (!res.ok) {
          setError(true);
          return;
        }
        const data = await res.json();
        setOffer({
          ...data,
          coverImage: data.coverImage
            ? `data:image/jpeg;base64,${data.coverImage}`
            : "/placeholder.png",
        });
      } catch (e) {
        console.error(e);
        setError(true);
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);

  if (loading) return <p className="mt-20 text-center">Lade Angebot...</p>;
  if (error || !offer) return <p className="mt-20 text-center">Angebot nicht gefunden</p>;

  const addToCart = () => {
    if (!offer) return;
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    if (cart.some((item: OfferDetailType) => item.id === offer.id)) {
      alert("Dieses Buch ist bereits im Warenkorb.");
      return;
    }

    const updatedCart = [...cart, offer];
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    window.dispatchEvent(new Event("cartChanged"));
    alert("Zum Warenkorb hinzugefügt!");
  };

  return (
    <div className="mx-auto flex w-11/12 flex-col gap-8 md:w-2/3">
      <div className="flex flex-col gap-6 md:flex-row">
        <div className="flex flex-1 justify-center">
          <Image
            src={offer.coverImage ?? "/placeholder.png"}
            alt={offer.title}
            className="h-96 w-full max-w-sm rounded-xl bg-gray-100 object-contain"
          />
        </div>

        <div className="flex flex-1 flex-col justify-start gap-4">
          <h1 className="font-bold text-3xl text-purple-800">{offer.title}</h1>
          <h2 className="text-gray-700 text-xl">{offer.author}</h2>
          <p className="font-semibold text-2xl text-green-700">
            {offer.price
              ? offer.price === "Tauschen"
                ? "Zum Tausch"
                : `${offer.price} €`
              : "Preis nicht verfügbar"}
          </p>

          <Custom
            type="button"
            color="lilla"
            label="In den Warenkorb"
            size="medium"
            width="w-full"
            onClick={addToCart}
          />
        </div>
      </div>

      <div className="flex flex-col gap-6 md:flex-row">
        <div className="flex-1">
          <h2 className="mb-2 font-semibold text-xl">Beschreibung</h2>
          <p className="text-gray-700">{offer.description ?? "Keine Beschreibung vorhanden."}</p>
        </div>

        <div className="flex-1">
          <h2 className="mb-2 font-semibold text-xl">Details</h2>
          <div className="space-y-1 text-sm">
            <p>
              <b>Genre:</b> {offer.genre ?? "–"}
            </p>
            <p>
              <b>Sprache:</b> {offer.language ?? "–"}
            </p>
            <p>
              <b>Zustand:</b> {offer.condition ?? "–"}
            </p>
            <p>
              <b>Verlag:</b> {offer.publisher ?? "–"}
            </p>
            <p>
              <b>Erscheinungsjahr:</b> {offer.year ?? "–"}
            </p>
            <p>
              <b>Seitenzahl:</b> {offer.pages ?? "–"}
            </p>
            <p>
              <b>ISBN:</b> {offer.isbn ?? "–"}
            </p>
            {/*{offer.tags && offer.tags.length > 0 && <p><b>Tags:</b> {offer.tags.join(", ")}</p>}*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferPage;
