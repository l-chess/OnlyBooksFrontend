import { MdLanguage } from "react-icons/md";
import { Custom } from "../Custom/Custom";
import type { OfferTeaserProps } from "../OfferTeaser/OfferTeaser";

export type HomepageFilterProps = {
  offers: OfferTeaserProps[];
  onSelectLanguage?: (language: string) => void;
  onSelectTag?: (tag: string) => void; // still called onSelectTag for consistency
};

export const HomepageFilter = ({ offers, onSelectLanguage, onSelectTag }: HomepageFilterProps) => {
  const languages = [...new Set(offers.map((o) => o.language))].sort((a, b) => a.localeCompare(b));

  const genres = [...new Set(offers.map((o) => o.genre).filter(Boolean))].sort((a, b) =>
    a.localeCompare(b)
  );

  const languageOptions = [
    {
      label: "Alle Sprachen", // "All languages" or "Clear"
      onClick: () => onSelectLanguage?.(""), // resets the filter
    },
    ...languages.map((lang) => ({
      label: lang,
      onClick: () => onSelectLanguage?.(lang),
    })),
  ];

  const genreOptions = [
    {
      label: "Alle Genres",
      onClick: () => onSelectTag?.(""), // resets the genre filter
    },
    ...genres.map((genre) => ({
      label: genre,
      onClick: () => onSelectTag?.(genre),
    })),
  ];

  return (
    <div className="flex gap-2">
      {/* language filter */}
      <div className="flex-none">
        <Custom
          type="dropdown"
          label="Sprache"
          color="lilla"
          size="small"
          iconLeft={<MdLanguage />}
          options={languageOptions}
        />
      </div>
      {/* genre filter */}
      <div className="flex-none">
        <Custom type="dropdown" label="Genre" color="lilla" size="small" options={genreOptions} />
      </div>
      {/* distance filter */}
      <div className="flex-none">
        <Custom type="dropdown" label="Entfernung" color="lilla" size="small" />
      </div>
      {/* transaction type filter */}
      <div className="flex-none">
        <Custom type="dropdown" label="Tauschen und Kaufen" color="lilla" size="small" />
      </div>
    </div>
  );
};
