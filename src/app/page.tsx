"use client";

import { useEffect, useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { Input } from "../components/atoms/Input/Input";
import { HomepageFilter } from "../components/molecules/HomepageFilter/HomepageFilter";
import {
  OfferTeaser,
  type OfferTeaserProps,
} from "../components/molecules/OfferTeaser/OfferTeaser";

const Homepage = () => {
  const [offers, setOffers] = useState<OfferTeaserProps[]>([]);
  const [filteredOffers, setFilteredOffers] = useState<OfferTeaserProps[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [error, setError] = useState(false);

  // Get data from backend
  useEffect(() => {
    fetch("http://localhost:8080/api/books")
      .then((res) => res.json())
      .then((data: OfferTeaserProps[]) => {
        const mappedOffers = data.map((book) => ({
          id: book.id,
          title: book.title,
          author: book.author,
          image: book.image
            ? { src: `data:image/jpeg;base64,${book.image}`, alt: book.title }
            : { src: "/default-cover.jpg", alt: "Kein Bild verfügbar" },
          price: book.price,
          condition: book.condition,
          genre: book.genre, // map genre from backend
          language: book.language,
          postCode: book.postCode || "",
          city: book.city || "",
          size: "small" as "small",
        }));
        setOffers(mappedOffers);
        setFilteredOffers(mappedOffers);
      })
      .catch(() => {
        setError(true);
      });
  }, []);

  // Filter offers
  useEffect(() => {
    let temp = offers;

    if (selectedLanguage) temp = temp.filter((o) => o.language === selectedLanguage);
    if (selectedGenre) temp = temp.filter((o) => o.genre === selectedGenre); // filter by genre
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      temp = temp.filter(
        (o) => o.title.toLowerCase().includes(term) || o.author.toLowerCase().includes(term)
      );
    }

    setFilteredOffers(temp);
  }, [offers, selectedLanguage, selectedGenre, searchTerm]);

  if (error) {
    return (
      <div className="w-full p-10 text-center text-xl">Seite konnte nicht geladen werden.</div>
    );
  }

  return (
    <div className="w-full space-y-4 px-4">
      <div className="mx-auto md:w-full lg:w-2xl">
        <Input
          type="text"
          placeholder="Suche"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          variant="framed"
          size="small"
          iconLeft={<IoSearchSharp className="text-xl" />}
        />
      </div>

      <HomepageFilter
        offers={offers}
        onSelectLanguage={setSelectedLanguage}
        onSelectTag={setSelectedGenre} // still works, just maps to genre now
      />

      <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {filteredOffers.map((offer, id) => (
          <div key={id} className="w-full">
            <OfferTeaser
              id={offer.id}
              image={offer.image}
              title={offer.title}
              author={offer.author}
              genre={offer.genre} // pass genre directly
              language={offer.language}
              postCode={offer.postCode}
              city={offer.city}
              price={offer.price}
              condition={offer.condition}
              size="small"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homepage;
