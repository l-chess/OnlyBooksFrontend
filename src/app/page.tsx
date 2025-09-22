"use client";

import { useEffect, useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { MdLanguage } from "react-icons/md";
import type { OfferDetailType } from "@/src/app/offer/page";
import { Input } from "../components/atoms/Input/Input";
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
  searchTerm?: string;
};

const Homepage = ({
  languages = [],
  genres = [],
  searchTerm: initialSearchTerm = "",
}: HomepageProps) => {
  const [offers, setOffers] = useState<OfferTeaserProps[]>([]);
  const [filteredOffers, setFilteredOffers] = useState<OfferTeaserProps[]>([]);
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");

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
        setFilteredOffers(mappedOffers);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    let temp = offers;

    if (selectedLanguage) temp = temp.filter((o) => o.tags?.includes(selectedLanguage));
    if (selectedGenre) temp = temp.filter((o) => o.tags?.includes(selectedGenre));
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      temp = temp.filter(
        (o) => o.title.toLowerCase().includes(term) || o.author.toLowerCase().includes(term)
      );
    }

    setFilteredOffers(temp);
  }, [offers, selectedLanguage, selectedGenre, searchTerm]);

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
      <div className="ml-10 flex items-center gap-4">
        <Input
          type="text"
          placeholder="Suche"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          variant="framed"
          size="small"
          iconLeft={<IoSearchSharp className="text-xl" />}
        />

        {/*<Custom*/}
        {/*    label={selectedLanguage || "Sprache"}*/}
        {/*    iconLeft={<MdLanguage />}*/}
        {/*    color="lilla"*/}
        {/*    size="small"*/}
        {/*    type="dropdown"*/}
        {/*    options={[*/}
        {/*      { label: "Alle Sprachen", onClick: () => setSelectedLanguage("") },*/}
        {/*      ...(languages || []).map((lang) => ({*/}
        {/*        ...lang,*/}
        {/*        onClick: () =>*/}
        {/*            setSelectedLanguage(lang.label ? lang.label.toString() : ""),*/}
        {/*      })),*/}
        {/*    ]}*/}
        {/*/>*/}

        {/*<Custom*/}
        {/*    label={selectedGenre || "Genre"}*/}
        {/*    color="lilla"*/}
        {/*    size="small"*/}
        {/*    type="dropdown"*/}
        {/*    options={[*/}
        {/*      { label: "Alle Genres", onClick: () => setSelectedGenre("") },*/}
        {/*      ...(genres || []).map((genre) => ({*/}
        {/*        ...genre,*/}
        {/*        onClick: () =>*/}
        {/*            setSelectedGenre(genre.label ? genre.label.toString() : ""),*/}
        {/*      })),*/}
        {/*    ]}*/}
        {/*/>*/}
      </div>

      <div className="flex flex-wrap gap-12">
        {filteredOffers.map((offer) => (
          <OfferTeaser
            key={offer.id}
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
