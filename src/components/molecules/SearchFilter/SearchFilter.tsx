import { useEffect, useState } from "react";
import { FaChevronLeft } from "react-icons/fa6";
import { Checkbox } from "../../atoms/Checkbox/Checkbox";
import { Input } from "../../atoms/Input/Input";
import type { Option } from "../../atoms/OptionsDropdown/OptionsDropdown";
import { Custom } from "../Custom/Custom";

export type SearchFilterProps = {
  languages: string[];
  condition: Option[];
  onFilterChange: (filters: {
    languages: string[];
    swap: boolean;
    buy: boolean;
    minPrice?: number;
    maxPrice?: number;
    distance?: number;
    condition?: string;
  }) => void;
};

export const SearchFilter = ({ languages, condition, onFilterChange }: SearchFilterProps) => {
  const [swap, setSwapped] = useState(true);
  const [buy, setBuy] = useState(true);
  const [selectedLangs, setSelectedLangs] = useState(languages);

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    onFilterChange({ languages: selectedLangs, swap: swap, buy: buy });
  }, [buy, swap]);

  const filterLangs = (language: string) => {
    const copy = selectedLangs.map((lang) => lang);
    if (selectedLangs.includes(language)) {
      copy.splice(copy.indexOf(language), 1);
    } else {
      copy.push(language);
    }
    onFilterChange({ languages: copy, swap, buy });
    setSelectedLangs(copy);
  };

  return (
    <div className="space-y-2">
      <h3 className="font-semibold text-lg">Ergebnisse filtern</h3>

      <div className="flex gap-4">
        <Checkbox label="Tauschen" checked={swap} onClick={() => setSwapped(!swap)} />
        <Checkbox label="Kaufen" checked={buy} onClick={() => setBuy(!buy)} />
      </div>

      <span>Preis:</span>
      <div className="flex items-center gap-1 font-semibold text-gray-400">
        <div className="w-15">
          <Input variant="framed" size="small" />
        </div>
        € -
        <div className="w-15">
          <Input variant="framed" size="small" />
        </div>
        €
      </div>

      <span>Entfernung:</span>
      <div className="flex items-center font-semibold text-gray-400">
        <FaChevronLeft />
        <div className="mr-1 w-15">
          <Input variant="framed" size="small" />
        </div>
        km
      </div>

      <span>Zustand:</span>
      <Custom
        type="dropdown"
        label="Zustand wählen"
        color="gray"
        size="small"
        options={condition}
      />

      <span>Sprache:</span>
      {languages.map((language, index) => (
        <Checkbox
          key={index}
          label={language}
          checked={selectedLangs.includes(language)}
          onClick={() => filterLangs(language)}
        />
      ))}
    </div>
  );
};
