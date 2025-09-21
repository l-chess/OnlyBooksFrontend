"use client";

import { useEffect, useState } from "react";
import { MdLanguage } from "react-icons/md";
import type { OfferDetailType } from "@/src/app/offer/[id]/page";
import type { Option } from "../components/atoms/OptionsDropdown/OptionsDropdown";
import { Custom } from "../components/molecules/Custom/Custom";
import {
  OfferTeaser,
  type OfferTeaserProps,
} from "../components/molecules/OfferTeaser/OfferTeaser";

interface Book {
  id: number;
  title: string;
  author: string;
  coverImage?: string;
  price?: string;
  condition?: string;
  tags?: string;
  postCode?: string;
  city?: string;
}

export type HomepageProps = {
  languages: Option[];
  genres: Option[];
  offers?: OfferDetailType[];
};

const Homepage = ({ languages, genres }: HomepageProps) => {
  const [offers, setOffers] = useState<OfferTeaserProps[]>([]);

  // biome-ignore lint/correctness/useExhaustiveDependencies: parsePrice & parseCondition sind statisch
  useEffect(() => {
    fetch("http://localhost:8080/api/books")
      .then((res) => res.json())
      .then((data: Book[]) => {
        const mappedOffers = data.map((book) => ({
          id: book.id,
          title: book.title,
          author: book.author,
          image: book.coverImage
            ? { src: `data:image/jpeg;base64,${book.coverImage}`, alt: book.title }
            : { src: "/default-cover.jpg", alt: "Kein Bild verfügbar" },
          price: parsePrice(book.price),
          condition: parseCondition(book.condition),
          tags: book.tags ? book.tags.split(",") : [],
          postCode: book.postCode || "",
          city: book.city || "",
          size: "small" as "small",
        }));
        setOffers(mappedOffers);
      })
      .catch((err) => console.error(err));
  }, []);

  const parsePrice = (price?: string): number | "Tauschen" => {
    if (!price) return "Tauschen";
    const n = Number(price);
    return Number.isNaN(n) ? "Tauschen" : n;
  };

  const parseCondition = (
    cond?: string
  ): "Wie neu" | "Leichte Gebrauchsspuren" | "Gebraucht" | "Kaputt" => {
    switch (cond) {
      case "Wie neu":
        return "Wie neu";
      case "Leichte Gebrauchsspuren":
        return "Leichte Gebrauchsspuren";
      case "Gebraucht":
        return "Gebraucht";
      case "Kaputt":
        return "Kaputt";
      default:
        return "Gebraucht";
    }
  };

  return (
    <div className="w-full space-y-4">
      <div className="flex gap-2">
        <div className="w-fit">
          <Custom
            label="Sprache"
            iconLeft={<MdLanguage />}
            color="lilla"
            size="small"
            type="dropdown"
            options={languages}
          />
        </div>
        <div className="w-fit">
          <Custom label="Genre" color="lilla" size="small" type="dropdown" options={genres} />
        </div>
        <div className="w-fit">
          <Custom
            label="Entfernung"
            color="lilla"
            size="small"
            type="dropdown"
            options={[
              { label: "< 10km", href: "" },
              { label: "< 50km", href: "" },
              { label: "< 100km", href: "" },
              { label: "> 100km", href: "" },
            ]}
          />
        </div>
        <div className="w-fit">
          <Custom
            label="Tauschen und Kaufen"
            color="lilla"
            size="small"
            type="dropdown"
            options={[
              { label: "Tauschen", href: "" },
              { label: "Kaufen", href: "" },
              { label: "Tauschen und Kaufen", href: "" },
            ]}
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-12">
        {offers?.map((offer, index) => (
          <OfferTeaser
            key={index}
            id={offer.id}
            image={offer.image}
            title={offer.title}
            author={offer.author}
            tags={offer.tags}
            postCode={offer.postCode}
            city={offer.city}
            price={offer.price}
            condition={offer.condition}
            size="small"
          />
        ))}
      </div>
    </div>
  );
};

export default Homepage;
