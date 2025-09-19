import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";
import { DetailAccordion } from "../atoms/DetailAccordion/DetailAccordion";
import { Image, type ImageProps } from "../atoms/Image/Image";
import { ProfileTeaser } from "../atoms/ProfileTeaser/ProfileTeaser";
import { Custom } from "../molecules/Custom/Custom";

export type OfferDetailProps = {
  image: ImageProps;
  title: string;
  author: string;
  details: string;
  description: string;
  sellerName: string;
  state: string;
  postCode: string;
  city: string;
  price: number;
  viewProfileLink: string;
  className?: string;
};

export const OfferDetail = ({
  image,
  title,
  author,
  state,
  details,
  description,
  sellerName,
  postCode,
  city,
  price,
  viewProfileLink,
  className,
}: OfferDetailProps) => {
  return (
    <div className={"flex inline-flex" + className}>
      <div className="w-4/6">
        <Image src={image.src} alt={image.alt} className={image.className} />
        <div className="flex w-full items-center justify-between">
          <ProfileTeaser name={sellerName} variant="profile" />
          <Link
            href={viewProfileLink}
            className="flex inline-flex gap-1 text-gray-400 hover:underline"
          >
            Profil ansehen
            <MdKeyboardArrowRight />
          </Link>
        </div>
      </div>
      <div className="w-2/6 space-y-2">
        <h1 className="my-1 font-bold text-xl">{title}</h1>
        <h2 className="text-lg">{author}</h2>
        <div className="flex w-full items-center justify-between">
          <span className="my-1 text-gray-400">
            {postCode}, {city}
          </span>
          <span className="my-1 font-semibold">{price + "€"}</span>
        </div>
        <Custom type="button" color="lilla" label="Anfrage senden" size="medium" />
        <span className="mb-5 text-gray-400">{state}</span>
        <DetailAccordion title="Details anzeigen" content={details} />
        <h2 className="my-1 font-semibold text-lg">Beschreibung: </h2>
        <p>{description}</p>
      </div>
    </div>
  );
};
