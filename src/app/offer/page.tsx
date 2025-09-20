import { DetailAccordion } from "../../components/atoms/DetailAccordion/DetailAccordion";
import { Image } from "../../components/atoms/Image/Image";
import { ProfileTeaser } from "../../components/atoms/ProfileTeaser/ProfileTeaser";
import { Custom } from "../../components/molecules/Custom/Custom";
import type { OfferTeaserProps } from "../../components/molecules/OfferTeaser/OfferTeaser";

export type OfferDetailProps = {
  offer: OfferTeaserProps;
  content: string;
  description: string;
  sellerName: string;
};

const OfferDetail = ({ offer, content, description, sellerName }: OfferDetailProps) => {
  return (
    <div className="mx-auto flex w-2/3">
      <div className="w-1/2">
        <Image src={offer.image.src} alt={offer.image.alt} className={offer.image.className} />
        <div className="flex w-full items-center justify-between">
          <ProfileTeaser name={sellerName} variant="external" />
        </div>
      </div>

      <div className="w-1/3">
        <h1 className="my-1 font-bold text-xl">{offer.title}</h1>
        <h2 className="text-lg">{offer.author}</h2>
        <p className="font-bold text-xl">
          {offer.price === "Tauschen" ? offer.price : `${offer.price} €`}
        </p>
        <p className="my-1 text-gray-400">
          {offer.postCode} {offer.city}
        </p>
        <div className="flex w-full justify-center">
          <Custom
            type="button"
            color="lilla"
            label="Anfrage senden"
            size="medium"
            width="w-full justify-center"
          />
        </div>
        <p className="my-1 text-gray-400">{offer.condition}</p>
        <DetailAccordion title="Details anzeigen" content={content} />
        <h2 className="my-1 font-semibold text-lg">Beschreibung: </h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default OfferDetail;
