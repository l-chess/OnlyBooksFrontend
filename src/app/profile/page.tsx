"use client";

import { useEffect, useState } from "react";
import { ProfileTeaser } from "@/src/components/atoms/ProfileTeaser/ProfileTeaser";
import { Custom } from "@/src/components/molecules/Custom/Custom";
import {
  OfferTeaser,
  type OfferTeaserProps,
} from "@/src/components/molecules/OfferTeaser/OfferTeaser";

export type ProfileProps = {
  name?: string;
  creationDate?: string;
  totalOffers?: number;
  ratings?: number;
  offers?: OfferTeaserProps[];
};

const Profile = ({ name, creationDate, totalOffers, ratings }: ProfileProps) => {
  const [userOffers, setUserOffers] = useState<OfferTeaserProps[]>([]);
  const [userData, setUserData] = useState({
    name: name || "",
    creationDate: creationDate || "",
    totalOffers: totalOffers || 0,
    ratings: ratings || 0,
  });

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (!userId) return;

    fetch(`http://localhost:8080/api/users/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        setUserData({
          name: data.name,
          creationDate: data.creationDate,
          totalOffers: data.totalOffers,
          ratings: data.ratings || 0,
        });
      })
      .catch(console.error);

    fetch(`http://localhost:8080/api/books?userId=${userId}`)
      .then((res) => res.json())
      .then((data: OfferTeaserProps[]) => {
        setUserOffers(data);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="flex flex-col gap-6 md:flex-row">
      <div className="space-y-4 text-center md:w-1/4">
        <ProfileTeaser variant="profile" name={userData.name} />
        <p className="text-gray-400">{`aktiv seit ${userData.creationDate}`}</p>
        <p className="text-gray-400">{`${userData.totalOffers} Anzeigen`}</p>
        <p className="text-gray-400">
          {userData.ratings ? `${userData.ratings} Bewertungen` : "Keine Bewertungen"}
        </p>
        <Custom
          label="Profil bewerten"
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

      <div className="flex-1 space-y-4">
        {userOffers.length === 0 ? (
          <p className="text-gray-600">Du hast noch keine Bücher hochgeladen.</p>
        ) : (
          userOffers.map((offer, index) => (
            <OfferTeaser
              key={index}
              size="medium"
              id={offer.id}
              image={offer.image}
              title={offer.title}
              author={offer.author}
              tags={offer.tags}
              postCode={offer.postCode}
              city={offer.city}
              price={offer.price}
              condition={offer.condition}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Profile;
