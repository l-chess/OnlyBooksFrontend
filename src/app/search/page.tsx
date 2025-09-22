import { useEffect, useState } from "react";
import {
  OfferTeaser,
  type OfferTeaserProps,
} from "../../components/molecules/OfferTeaser/OfferTeaser";
import { SearchFilter } from "../../components/molecules/SearchFilter/SearchFilter";

export type SearchPageProps = {
  results: OfferTeaserProps[];
  className?: string;
};

export const SearchPage = ({ results, className }: SearchPageProps) => {
  const [filteredResults, setFilteredResults] = useState(results.map((result) => result));

  const handleFilterChange = (filters: { languages: string[]; swap: boolean; buy: boolean }) => {
    let updated = results.map((result) => result);

    if (filters.languages.length > 0) {
      updated = updated.filter((r) => filters.languages.includes(r.tags[0]));
    }
    if (!filters.swap) updated = updated.filter((r) => r.price !== "Tauschen");
    if (!filters.buy) updated = updated.filter((r) => r.price === "Tauschen");

    setFilteredResults(updated);
  };

  return (
    <div className={"flex" + className}>
      <SearchFilter
        languages={[
          ...new Set(
            results
              .filter((result) => result.tags !== undefined && result.tags.length > 0)
              .map((result) => result.tags[0])
          ),
        ]}
        condition={[]}
        onFilterChange={handleFilterChange}
      />
      <div className="flex flex-wrap gap-20">
        {filteredResults.length === 0 ? (
          <span>Leider ergab deine Suche keine Treffer.</span>
        ) : (
          filteredResults.map((offer, index) => (
            <OfferTeaser
              key={index}
              image={offer.image}
              title={offer.title}
              tags={offer.tags}
              condition={offer.condition}
              author={offer.author}
              postCode={offer.postCode}
              city={offer.city}
              price={offer.price}
              size="medium"
            />
          ))
        )}
      </div>
    </div>
  );
};

export default SearchPage;
