"use client";
import { useState } from "react";
import { MdLanguage } from "react-icons/md";
import { Checkbox } from "@/src/components/atoms/Checkbox/Checkbox";
import { Input } from "@/src/components/atoms/Input/Input";
import { Custom } from "@/src/components/molecules/Custom/Custom";
import { ImageUpload } from "@/src/components/molecules/ImageUpload/ImageUpload";
import { useAuth } from "@/src/utils/utils";

const Upload = () => {
  const isAuthenticated = useAuth();

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [sale, setSale] = useState(false);
  const [swap, setSwap] = useState(false);
  const [price, setPrice] = useState("");
  const [ageRestriction, setAgeRestriction] = useState(false);
  const [language, setLanguage] = useState("");
  const [genre, setGenre] = useState("");
  const [bookCondition, setBookCondition] = useState("");
  const [pages, setPages] = useState("");
  const [year, setYear] = useState("");
  const [publisher, setPublisher] = useState("");
  const [isbn, setIsbn] = useState("");
  const [description, setDescription] = useState("");
  // const [tags, setTags] = useState("");

  const [coverImage, setCoverImage] = useState<File | null>(null);
  const [spineImage, setSpineImage] = useState<File | null>(null);
  const [additionalImages, setAdditionalImages] = useState<File[]>([]);

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

  const handleUpload = async () => {
    if (!title || !author) {
      alert("Titel und Autor müssen ausgefüllt sein!");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("author", author);
    formData.append("sale", String(sale));
    formData.append("swap", String(swap));
    formData.append("price", price);
    formData.append("ageRestriction", String(ageRestriction));
    formData.append("language", language);
    formData.append("genre", genre);
    formData.append("condition", bookCondition);
    formData.append("pages", pages);
    formData.append("year", year);
    formData.append("publisher", publisher);
    formData.append("isbn", isbn);
    formData.append("description", description);
    // formData.append("tags", tags);
    if (coverImage) formData.append("coverImage", coverImage);
    if (spineImage) formData.append("spineImage", spineImage);
    additionalImages.forEach((img, i) => {
      formData.append(`additionalImage${i}`, img);
    });

    try {
      const response = await fetch("http://localhost:8080/api/books", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("Buch erfolgreich hochgeladen!");
        window.location.href = "/";
      } else {
        alert("Fehler beim Hochladen.");
      }
    } catch (error) {
      console.error(error);
      alert("Server-Fehler beim Hochladen.");
    }
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

  return (
    <div className="mx-auto w-full space-y-2 font-bold md:w-1/2">
      <h1 className="text-2xl text-purple-800">Neue Anzeige</h1>

      <div className="font-semibold text-gray-400">
        <h2 className="text-lg">Foto hochladen</h2>
        <div className="flex gap-2">
          <ImageUpload
            variant="specific"
            label="Buchcover"
            onFilesSelect={(files) => setCoverImage(files[0] || null)}
          />
          <ImageUpload
            variant="specific"
            label="Buchrücken"
            onFilesSelect={(files) => setSpineImage(files[0] || null)}
          />
          <ImageUpload variant="additional" onFilesSelect={setAdditionalImages} />
        </div>
      </div>

      <div>
        <Input
          variant="underlined"
          size="small"
          placeholder="Titel"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Input
          variant="underlined"
          size="small"
          placeholder="Autor"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>

      <div className="flex h-10 items-center gap-10">
        <Checkbox label="Verkauf" checked={sale} onClick={() => setSale(!sale)} />
        {sale && (
          <Input
            variant="underlined"
            size="small"
            placeholder="Preis"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        )}
        <Checkbox label="Tausch" checked={swap} onClick={() => setSwap(!swap)} />
      </div>

      <div className="flex justify-between px-10">
        <Custom
          type="dropdown"
          color="white"
          size="medium"
          width="w-50"
          iconLeft={<MdLanguage />}
          label={language || "Sprache"}
          options={languages.map((lang) => ({
            label: lang.label,
            href: "#",
            onClick: () => setLanguage(lang.label),
          }))}
        />
        <Custom
          type="dropdown"
          color="white"
          size="medium"
          width="w-50"
          label={genre || "Genre"}
          options={genres.map((g) => ({
            label: g.label,
            href: "#",
            onClick: () => setGenre(g.label),
          }))}
        />
        <Custom
          type="dropdown"
          color="white"
          size="medium"
          width="w-50"
          label={bookCondition || "Zustand"}
          options={condition.map((c) => ({
            label: c.label,
            href: "#",
            onClick: () => setBookCondition(c.label),
          }))}
        />
      </div>

      <div className="flex justify-between">
        <Input
          variant="underlined"
          placeholder="Seitenanzahl"
          size="small"
          value={pages}
          onChange={(e) => setPages(e.target.value)}
        />
        <Input
          variant="underlined"
          placeholder="Veröffentlichungsjahr"
          size="small"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        <Checkbox
          label="Empfehlung 18+"
          checked={ageRestriction}
          onClick={() => setAgeRestriction(!ageRestriction)}
        />
      </div>

      <div className="space-y-2">
        <Input
          variant="underlined"
          size="small"
          placeholder="Verlag"
          value={publisher}
          onChange={(e) => setPublisher(e.target.value)}
        />
        <Input
          variant="underlined"
          size="small"
          placeholder="ISBN"
          value={isbn}
          onChange={(e) => setIsbn(e.target.value)}
        />
        <Input
          variant="framed"
          size="medium"
          placeholder="Beschreibung"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        {/*<Input variant="underlined" size="small" placeholder="Tags" value={tags} onChange={e => setTags(e.target.value)} />*/}
      </div>

      <div className="mt-8">
        <Custom
          type="button"
          color="lilla"
          size="medium"
          label="Hochladen"
          onClick={handleUpload}
        />
      </div>
    </div>
  );
};

export default Upload;
