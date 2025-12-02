import { useState } from "react";
import { OfferTeaser, type OfferTeaserProps } from "../../molecules/OfferTeaser/OfferTeaser";
import { SearchFilter } from "../../molecules/SearchFilter/SearchFilter";

export type SearchPageProps = {
  results: OfferTeaserProps[];
};

export const SearchPage = ({ results }: SearchPageProps) => {
  const [filteredResults, setFilteredResults] = useState(results.map((result) => result));

  const handleFilterChange = (filters: { languages: string[]; swap: boolean; buy: boolean }) => {
    let updated = results.map((result) => result);

    if (filters.languages.length > 0) {
      updated = updated.filter((r) => filters.languages.includes(r.language));
    }
    if (!filters.swap) updated = updated.filter((r) => r.price !== "Tauschen");
    if (!filters.buy) updated = updated.filter((r) => r.price === "Tauschen");

    setFilteredResults(updated);
  };

  return (
    <div className="flex">
      <div>
        <SearchFilter
          languages={[
            ...new Set(
              results
                .filter((result) => result.language !== undefined && result.language.length > 0)
                .map((result) => result.language)
            ),
          ]}
          condition={[]}
          onFilterChange={handleFilterChange}
        />
      </div>

      <div>
        {filteredResults.length === 0 ? (
          <span>Leider ergab deine Suche keine Treffer.</span>
        ) : (
          filteredResults.map((offer, index) => (
            <OfferTeaser
              key={index}
              id={offer.id}
              image={offer.image}
              title={offer.title}
              tags={offer.tags}
              language={offer.language}
              condition={offer.condition}
              author={offer.author}
              postCode={offer.postCode}
              city={offer.city}
              price={offer.price}
              size="medium"
              imageClassname="w-50"
              className="w-full"
            />
          ))
        )}
      </div>
    </div>
  );
};
