import Link from "next/link";
import type { ImageProps } from "../../atoms/Image/Image";
import { Image } from "../../atoms/Image/Image";
import { Custom } from "../Custom/Custom";

export type OfferTeaserProps = {
  image: ImageProps;
  title: string;
  href: string;
  author: string;
  language: string;
  postCode: string;
  city: string;
  price: number;
  className?: string;
};

export const OfferTeaser = ({
  className,
  href,
  image,
  title,
  author,
  language,
  postCode,
  city,
  price,
}: OfferTeaserProps) => {
  return (
    <Link
      href={href}
      className={
        "flex cursor-pointer flex-col content-center items-center hover:underline" + className
      }
    >
      <Image src={image.src} alt={image.alt} className={image.className} />
      <h1 className="font-semibold text-xl">{title}</h1>
      <h2 className="text-lg">{author}</h2>
      <Custom type="button" color="gray" label={language} size="small" />
      <div className="flex w-full items-center justify-between">
        <span className="self-start text-left text-gray-400">
          {postCode}, {city}
        </span>
        <span className="font-bold">{price + "€"}</span>
      </div>
    </Link>
  );
};
