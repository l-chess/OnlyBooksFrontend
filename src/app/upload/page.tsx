"use client";
import { useState } from "react";
import { MdLanguage } from "react-icons/md";
import { Checkbox } from "@/src/components/atoms/Checkbox/Checkbox";
import { Input } from "@/src/components/atoms/Input/Input";
import { Custom } from "@/src/components/molecules/Custom/Custom";
import { ImageUpload } from "@/src/components/molecules/ImageUpload/ImageUpload";

const Upload = () => {
  const [sale, setSale] = useState(false);
  const [swap, setSwap] = useState(false);
  const [ageRestriction, setAgeRestriction] = useState(false);

  const languages = [
    { label: "Deutsch", href: "" },
    { label: "Englisch", href: "" },
  ];

  const genres = [
    { label: "Dark Romance", href: "" },
    { label: "Romance", href: "" },
    { label: "Fantasy", href: "" },
    { label: "Non-Fiction", href: "" },
    { label: "Sci-Fi", href: "" },
    { label: "Klassik", href: "" },
  ];

  const condition = [
    { label: "Wie neu", href: "" },
    { label: "Leichte Gebrauchsspuren", href: "" },
    { label: "Gebraucht", href: "" },
    { label: "Kaputt", href: "" },
  ];

  return (
    <div className="mx-auto w-full space-y-2 font-bold md:w-1/2">
      <h1 className="text-2xl text-purple-800">Neue Anzeige</h1>

      <div className="font-semibold text-gray-400">
        <h2 className="text-lg">Foto hochladen</h2>
        <div className="flex gap-2">
          <ImageUpload variant="specific" label="Buchcover" />
          <ImageUpload variant="specific" label="Buchrücken" />
          <ImageUpload variant="additional" />
        </div>
      </div>

      <div>
        <Input variant="underlined" size="small" placeholder="Titel" />
        <Input variant="underlined" size="small" placeholder="Autor" />
      </div>

      <div className="flex h-10 items-center gap-10">
        <Checkbox label="Verkauf" checked={sale} onClick={() => setSale(!sale)} />
        {sale && <Input variant="underlined" size="small" placeholder="Preis" />}
        <Checkbox label="Tausch" checked={swap} onClick={() => setSwap(!swap)} />
      </div>

      <div className="flex justify-between px-10">
        <Custom
          type="dropdown"
          color="white"
          size="medium"
          width="w-50"
          iconLeft={<MdLanguage />}
          label="Sprache"
          options={languages}
        />
        <Custom
          type="dropdown"
          color="white"
          size="medium"
          width="w-50"
          label="Genre"
          options={genres}
        />
        <Custom
          type="dropdown"
          color="white"
          size="medium"
          width="w-50"
          label="Zustand"
          options={condition}
        />
      </div>

      <div className="flex justify-between">
        <Input variant="underlined" placeholder="Seitenanzahl" size="small" />
        <Input variant="underlined" placeholder="Veröffentlichungsjahr" size="small" />
        <Checkbox
          label="Empfehlung 18+"
          checked={ageRestriction}
          onClick={() => setAgeRestriction(!ageRestriction)}
        />
      </div>

      <div className="space-y-2">
        <Input variant="underlined" size="small" placeholder="Verlag" />
        <Input variant="underlined" size="small" placeholder="ISBN" />
        <Input variant="framed" size="medium" placeholder="Beschreibung" />
        <Input variant="underlined" size="small" placeholder="Tags" />
      </div>

      <div className="mt-8">
        <Custom type="button" color="lilla" size="medium" label="Hochladen" />
      </div>
    </div>
  );
};

export default Upload;
