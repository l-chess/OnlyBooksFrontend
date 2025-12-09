import type { Meta, StoryObj } from "@storybook/react";
import { SearchPage } from "./Search";

const meta = {
  title: "Organisms/Search",
  component: SearchPage,
  tags: ["autodocs"],
} satisfies Meta<typeof SearchPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    results: [
      {
        id: 0,
        image: {
          src: "https://res.cloudinary.com/holtzbrinck-buchverlage/image/fetch/w_520,c_fill,g_auto,q_auto/https://pondus-hpg.s3.eu-central-1.amazonaws.com/rowohlt/public/GP9kDyD42xJfaU4NkUo1heeUv0VnMRHpSspW5lpc0QA/9783498007409.jpg",
          alt: "Witches, Bitches, It-Girls von Rebekka Endler",
        },
        title: "Witches, Bitches, It-Girls",
        genre: "Non-Fiction",
        language: "Deutsch",
        condition: "Wie neu",
        author: "Rebekka Endler",
        postCode: "20144",
        city: "Hamburg",
        price: 10,
      },
      {
        id: 1,
        title: "The Song of Achilles",
        author: "Madeline Miller",
        condition: "Leichte Gebrauchsspuren",
        genre: "LGBTQIA+",
        language: "Englisch",
        postCode: "20535",
        city: "Hamburg",
        price: 5,
        image: {
          src: "https://booklounge.co.za/wp-content/uploads/2022/08/the-song-of-achilles-1.jpg",
          alt: "The Song of Achilles Book Cover",
        },
      },
      {
        id: 2,
        title: "De Finibus Bonorum et Malorum",
        author: "Marcus Tullius Cicero",
        condition: "Kaputt",
        genre: "Philosophy",
        language: "Latein",
        postCode: "22111",
        city: "Hamburg",
        price: 10,
        image: {
          src: "//covers.openlibrary.org/b/id/6486564-L.jpg",
          alt: "De Finibus Bonorum et Malorum Book Cover",
        },
      },
    ],
  },
};
