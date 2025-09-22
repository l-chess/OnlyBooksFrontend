import type { Meta, StoryObj } from "@storybook/react";
import SearchPage from "./page";

const meta = {
  title: "Pages/Search",
  component: SearchPage,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-screen">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof SearchPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    results: [
      {
        title: "The Song of Achilles",
        author: "Madeline Miller",
        condition: "Leichte Gebrauchsspuren",
        tags: ["Englisch", "LGBTQIA+"],
        size: "medium",
        postCode: "20535",
        city: "Hamburg",
        price: 5,
        image: {
          src: "https://booklounge.co.za/wp-content/uploads/2022/08/the-song-of-achilles-1.jpg",
          alt: "The Song of Achilles Book Cover",
          className: "",
        },
      },
      {
        title: "De Finibus Bonorum et Malorum",
        author: "Marcus Tullius Cicero",
        condition: "Kaputt",
        tags: ["Latein"],
        size: "medium",
        postCode: "22111",
        city: "Hamburg",
        price: 10,
        image: {
          src: "//covers.openlibrary.org/b/id/6486564-L.jpg",
          alt: "De Finibus Bonorum et Malorum Book Cover",
          className: "",
        },
      },
      {
        title: "Witches, Bitches, It-Girls",
        author: "Rebekka Endler",
        condition: "Wie neu",
        tags: ["Deutsch", "Non-Fiction", "Spiegel-Bestseller"],
        size: "medium",
        postCode: "22083",
        city: "Hamburg",
        price: "Tauschen",
        image: {
          src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fres.cloudinary.com%2Fholtzbrinck-buchverlage%2Fimage%2Ffetch%2Fw_520%2Cc_fill%2Cg_auto%2Cq_auto%2Fhttps%3A%2F%2Fpondus-hpg.s3.eu-central-1.amazonaws.com%2Frowohlt%2Fpublic%2FGP9kDyD42xJfaU4NkUo1heeUv0VnMRHpSspW5lpc0QA%2F9783498007409.jpg&f=1&nofb=1&ipt=966a6fe140c0e4229a41d8060ea4f569e5a60b9e2cc88d770f723959efc42d7d",
          alt: "Witches Bitches It-Girls Book Cover",
          className: "",
        },
      },
      {
        title: "The Mountain in the Sea",
        author: "Ray Nayler",
        condition: "Leichte Gebrauchsspuren",
        size: "medium",
        tags: ["Englisch"],
        postCode: "22111",
        city: "Hamburg",
        price: "Tauschen",
        image: {
          src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.saymedia-content.com%2F.image%2Ft_share%2FMjAwMDY1MTYyMjUyNzIzNTc2%2Fthe-mountain-in-the-sea-by-ray-nayler-book-review.jpg&f=1&nofb=1&ipt=a98b7acd9fc8cadb5bf5c38493601a0c68330af385c93bb6b2c4ee21f612ebb5",
          alt: "The Mountain in the Sea Book Cover",
          className: "",
        },
      },
      {
        title: "Artificial Intelligence: A Modern Approach",
        author: "Stuart Russel, Peter Norvig",
        condition: "Wie neu",
        tags: ["Englisch", "Non-Fiction"],
        size: "medium",
        postCode: "22111",
        city: "Hamburg",
        price: 15,
        image: {
          src: "https://aima.cs.berkeley.edu/cover.jpg",
          alt: "Artificial Intelligence Book Cover",
          className: "",
        },
      },
      {
        title: "Grave Love",
        author: "Audrey Rush",
        condition: "Gebraucht",
        tags: ["Englisch", "Dark Romance", "18+"],
        size: "medium",
        postCode: "22111",
        city: "Hamburg",
        price: "Tauschen",
        image: {
          src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages-na.ssl-images-amazon.com%2Fimages%2FS%2Fcompressed.photo.goodreads.com%2Fbooks%2F1684414390i%2F157107343.jpg&f=1&nofb=1&ipt=cfb71aab7be1e0b54ec4f863d036be035d91802b65776448d21a3a97830f07fa",
          alt: "Grave Love Book Cover",
          className: "",
        },
      },
      {
        title: "Das Parfüm",
        author: "Patrick Süskind",
        condition: "Kaputt",
        tags: ["Deutsch"],
        size: "medium",
        postCode: "20249",
        city: "Hamburg",
        price: 3,
        image: {
          src: "https://images.thalia.media/00/-/b1a7b88cd79b4240af0f17471f9004c6/das-parfum-epub-3-patrick-sueskind.jpeg",
          alt: "Das Parfüm Book Cover",
          className: "",
        },
      },
      {
        title: "Neue Jazz-Harmonielehre",
        author: "Frank Sikora",
        tags: ["Deutsch", "Non-Fiction"],
        postCode: "22559",
        city: "Hamburg",
        condition: "Gebraucht",
        size: "medium",
        price: 5,
        image: {
          src: "https://images.thalia.media/-/BF750-750/82e82038852349a38c8ca7a43aa98ffb/neue-jazz-harmonielehre-pdf-frank-sikora.jpeg",
          alt: "Neue Jazz-Harmonielehre Book Cover",
          className: "",
        },
      },
    ],
  },
};
