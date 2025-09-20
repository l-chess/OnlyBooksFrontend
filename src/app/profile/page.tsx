import { ProfileTeaser } from "@/src/components/atoms/ProfileTeaser/ProfileTeaser";
import { Custom } from "@/src/components/molecules/Custom/Custom";
import {
  OfferTeaser,
  type OfferTeaserProps,
} from "@/src/components/molecules/OfferTeaser/OfferTeaser";

export type ProfileProps = {
  name: string;
  creationDate: string;
  totalOffers: number;
  ratings?: number;
  offers?: OfferTeaserProps[];
};

const Profile = ({ name, creationDate, totalOffers, ratings, offers }: ProfileProps) => {
  return (
    <div className="flex">
      <div className="space-y-2 text-center">
        <ProfileTeaser variant="profile" name={name} />
        <p className="text-gray-400">{`aktiv seit ${creationDate}`}</p>
        <p className="text-gray-400">{`${totalOffers} Anzeigen`}</p>
        <p className="text-gray-400">{ratings ? `${ratings} Bewertungen` : "Keine Bewertungen"}</p>
        <Custom
          label="Profile bewerten"
          color="lilla"
          size="medium"
          type="button"
          width="w-full justify-center"
        />
        <Custom
          label="Profil melden"
          color="white"
          size="medium"
          type="button"
          width="w-full justify-center"
        />
      </div>

      <div>
        {offers?.map((offer, index) => (
          <OfferTeaser
            key={index}
            size="medium"
            image={offer.image}
            title={offer.title}
            author={offer.author}
            tags={offer.tags}
            postCode={offer.postCode}
            city={offer.city}
            price={offer.price}
            condition={offer.condition}
          />
        ))}
      </div>
    </div>
  );
};

export default Profile;
