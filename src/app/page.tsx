import { MdLanguage } from "react-icons/md";
import type { Option } from "../components/atoms/OptionsDropdown/OptionsDropdown";
import { Custom } from "../components/molecules/Custom/Custom";
import {
  OfferTeaser,
  type OfferTeaserProps,
} from "../components/molecules/OfferTeaser/OfferTeaser";

export type HomepageProps = {
  languages: Option[];
  genres: Option[];
  offers: OfferTeaserProps[];
};

const Homepage = ({ languages, genres, offers }: HomepageProps) => {
  return (
    <div className="w-full space-y-4">
      <div className="flex gap-2">
        <div className="w-fit">
          <Custom
            label="Sprache"
            iconLeft={<MdLanguage />}
            color="lilla"
            size="small"
            type="dropdown"
            options={languages}
          />
        </div>
        <div className="w-fit">
          <Custom label="Genre" color="lilla" size="small" type="dropdown" options={genres} />
        </div>
        <div className="w-fit">
          <Custom
            label="Entfernung"
            color="lilla"
            size="small"
            type="dropdown"
            options={[
              { label: "< 10km", href: "" },
              { label: "< 50km", href: "" },
              { label: "< 100km", href: "" },
              { label: "> 100km", href: "" },
            ]}
          />
        </div>
        <div className="w-fit">
          <Custom
            label="Tauschen und Kaufen"
            color="lilla"
            size="small"
            type="dropdown"
            options={[
              { label: "Tauschen", href: "" },
              { label: "Kaufen", href: "" },
              { label: "Tauschen und Kaufen", href: "" },
            ]}
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-12">
        {offers.map((offer, index) => (
          <OfferTeaser
            key={index}
            image={offer.image}
            title={offer.title}
            author={offer.author}
            tags={offer.tags}
            postCode={offer.postCode}
            city={offer.city}
            price={offer.price}
            condition={offer.condition}
            size="small"
          />
        ))}
      </div>
    </div>
  );
};

export default Homepage;
