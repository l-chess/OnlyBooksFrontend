import Link from "next/link";
import type { ImageProps } from "../../atoms/Image/Image";
import { Image } from "../../atoms/Image/Image";
import { Custom } from "../Custom/Custom";

export type OfferTeaserProps = {
  image: ImageProps;
  title: string;
  author: string;
  tags?: string[];
  postCode: string;
  city: string;
  price: number | "Tauschen";
  condition: "Wie neu" | "Leichte Gebrauchsspuren" | "Gebraucht" | "Kaputt";
  size: "small" | "medium";
  className?: string;
};

export const OfferTeaser = ({
  className,
  image,
  title,
  author,
  tags,
  postCode,
  city,
  price,
  condition,
  size,
}: OfferTeaserProps) => {
  return (
    <Link
      href="/offer"
      className={`group flex cursor-pointer ${size === "small" ? "flex-col gap-1 text-center" : "items-center"} ${className}`}
    >
      <Image src={image.src} alt={image.alt} className={image.className} />
      <div className={size === "medium" ? "space-y-2" : ""}>
        <h1 className="font-semibold text-xl group-hover:underline">{title}</h1>
        <h2 className="text-lg group-hover:underline">{author}</h2>
        <div
          className={`flex flex-wrap gap-1 overflow-hidden ${size === "small" ? "max-h-16 justify-center" : "max-h-7"}`}
        >
          {tags?.map((tag, index) => (
            <Custom key={index} type="button" color="gray" label={tag} size="small" />
          ))}
        </div>
        <div className="flex w-full items-center justify-between gap-2">
          {size === "small" && (
            <span className="self-start text-left text-gray-400">
              {postCode} {city}
            </span>
          )}
          <span className={`font-bold ${size === "medium" && "text-2xl"}`}>
            {price + (price !== "Tauschen" ? "€" : "")}
          </span>
          {size === "medium" && <span className="text-gray-400">{condition}</span>}
        </div>
        {size === "medium" && (
          <span className="text-gray-400 text-lg">
            {postCode} {city}
          </span>
        )}
      </div>
    </Link>
  );
};
