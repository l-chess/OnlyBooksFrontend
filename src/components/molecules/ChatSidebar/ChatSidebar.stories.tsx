import type { Meta, StoryObj } from "@storybook/react";
import { ChatSidebar } from "./ChatSidebar";

const meta = {
  title: "Molecules/ChatSidebar",
  component: ChatSidebar,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-80">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ChatSidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    chats: [
      {
        title: "The Song of Achilles",
        cover: {
          src: "https://booklounge.co.za/wp-content/uploads/2022/08/the-song-of-achilles-1.jpg",
          alt: "The Song of Achilles",
        },
        variant: "compact",
        messages: [
          {
            message: "Hi, ist das Buch noch zu haben?",
            self: true,
            timeStamp: "1h",
          },
        ],
      },
      {
        title: "The Song of Achilles",
        cover: {
          src: "https://booklounge.co.za/wp-content/uploads/2022/08/the-song-of-achilles-1.jpg",
          alt: "The Song of Achilles",
        },
        variant: "compact",
        messages: [
          {
            message: "Hi, ist das Buch noch zu haben?",
            self: true,
            timeStamp: "1h",
          },
        ],
      },
      {
        title: "The Song of Achilles",
        cover: {
          src: "https://booklounge.co.za/wp-content/uploads/2022/08/the-song-of-achilles-1.jpg",
          alt: "The Song of Achilles",
        },
        variant: "compact",
        messages: [
          {
            message: "Hi, ist das Buch noch zu haben?",
            self: true,
            timeStamp: "1h",
          },
        ],
      },
      {
        title: "The Song of Achilles",
        cover: {
          src: "https://booklounge.co.za/wp-content/uploads/2022/08/the-song-of-achilles-1.jpg",
          alt: "The Song of Achilles",
        },
        variant: "compact",
        messages: [
          {
            message: "Hi, ist das Buch noch zu haben?",
            self: true,
            timeStamp: "1h",
          },
        ],
      },
      {
        title: "The Song of Achilles",
        cover: {
          src: "https://booklounge.co.za/wp-content/uploads/2022/08/the-song-of-achilles-1.jpg",
          alt: "The Song of Achilles",
        },
        variant: "compact",
        messages: [
          {
            message: "Hi, ist das Buch noch zu haben?",
            self: true,
            timeStamp: "1h",
          },
        ],
      },
      {
        title: "The Song of Achilles",
        cover: {
          src: "https://booklounge.co.za/wp-content/uploads/2022/08/the-song-of-achilles-1.jpg",
          alt: "The Song of Achilles",
        },
        variant: "compact",
        messages: [
          {
            message: "Hi, ist das Buch noch zu haben?",
            self: true,
            timeStamp: "1h",
          },
        ],
      },
      {
        title: "The Song of Achilles",
        cover: {
          src: "https://booklounge.co.za/wp-content/uploads/2022/08/the-song-of-achilles-1.jpg",
          alt: "The Song of Achilles",
        },
        variant: "compact",
        messages: [
          {
            message: "Hi, ist das Buch noch zu haben?",
            self: true,
            timeStamp: "1h",
          },
        ],
      },
      {
        title: "The Song of Achilles",
        cover: {
          src: "https://booklounge.co.za/wp-content/uploads/2022/08/the-song-of-achilles-1.jpg",
          alt: "The Song of Achilles",
        },
        variant: "compact",
        messages: [
          {
            message: "Hi, ist das Buch noch zu haben?",
            self: true,
            timeStamp: "1h",
          },
        ],
      },
      {
        title: "The Song of Achilles",
        cover: {
          src: "https://booklounge.co.za/wp-content/uploads/2022/08/the-song-of-achilles-1.jpg",
          alt: "The Song of Achilles",
        },
        variant: "compact",
        messages: [
          {
            message: "Hi, ist das Buch noch zu haben?",
            self: true,
            timeStamp: "1h",
          },
        ],
      },
      {
        title: "The Song of Achilles",
        cover: {
          src: "https://booklounge.co.za/wp-content/uploads/2022/08/the-song-of-achilles-1.jpg",
          alt: "The Song of Achilles",
        },
        variant: "compact",
        messages: [
          {
            message: "Hi, ist das Buch noch zu haben?",
            self: true,
            timeStamp: "1h",
          },
        ],
      },
      {
        title: "The Song of Achilles",
        cover: {
          src: "https://booklounge.co.za/wp-content/uploads/2022/08/the-song-of-achilles-1.jpg",
          alt: "The Song of Achilles",
        },
        variant: "compact",
        messages: [
          {
            message: "Hi, ist das Buch noch zu haben?",
            self: true,
            timeStamp: "1h",
          },
        ],
      },
      {
        title: "The Song of Achilles",
        cover: {
          src: "https://booklounge.co.za/wp-content/uploads/2022/08/the-song-of-achilles-1.jpg",
          alt: "The Song of Achilles",
        },
        variant: "compact",
        messages: [
          {
            message: "Hi, ist das Buch noch zu haben?",
            self: true,
            timeStamp: "1h",
          },
        ],
      },
      {
        title: "The Song of Achilles",
        cover: {
          src: "https://booklounge.co.za/wp-content/uploads/2022/08/the-song-of-achilles-1.jpg",
          alt: "The Song of Achilles",
        },
        variant: "compact",
        messages: [
          {
            message: "Hi, ist das Buch noch zu haben?",
            self: true,
            timeStamp: "1h",
          },
        ],
      },
      {
        title: "The Song of Achilles",
        cover: {
          src: "https://booklounge.co.za/wp-content/uploads/2022/08/the-song-of-achilles-1.jpg",
          alt: "The Song of Achilles",
        },
        variant: "compact",
        messages: [
          {
            message: "Hi, ist das Buch noch zu haben?",
            self: true,
            timeStamp: "1h",
          },
        ],
      },
      {
        title: "The Song of Achilles",
        cover: {
          src: "https://booklounge.co.za/wp-content/uploads/2022/08/the-song-of-achilles-1.jpg",
          alt: "The Song of Achilles",
        },
        variant: "compact",
        messages: [
          {
            message: "Hi, ist das Buch noch zu haben?",
            self: true,
            timeStamp: "1h",
          },
        ],
      },
      {
        title: "The Song of Achilles",
        cover: {
          src: "https://booklounge.co.za/wp-content/uploads/2022/08/the-song-of-achilles-1.jpg",
          alt: "The Song of Achilles",
        },
        variant: "compact",
        messages: [
          {
            message: "Hi, ist das Buch noch zu haben?",
            self: true,
            timeStamp: "1h",
          },
        ],
      },
      {
        title: "The Song of Achilles",
        cover: {
          src: "https://booklounge.co.za/wp-content/uploads/2022/08/the-song-of-achilles-1.jpg",
          alt: "The Song of Achilles",
        },
        variant: "compact",
        messages: [
          {
            message: "Hi, ist das Buch noch zu haben?",
            self: true,
            timeStamp: "1h",
          },
        ],
      },
      {
        title: "The Song of Achilles",
        cover: {
          src: "https://booklounge.co.za/wp-content/uploads/2022/08/the-song-of-achilles-1.jpg",
          alt: "The Song of Achilles",
        },
        variant: "compact",
        messages: [
          {
            message: "Hi, ist das Buch noch zu haben?",
            self: true,
            timeStamp: "1h",
          },
        ],
      },
      {
        title: "The Song of Achilles",
        cover: {
          src: "https://booklounge.co.za/wp-content/uploads/2022/08/the-song-of-achilles-1.jpg",
          alt: "The Song of Achilles",
        },
        variant: "compact",
        messages: [
          {
            message: "Hi, ist das Buch noch zu haben?",
            self: true,
            timeStamp: "1h",
          },
        ],
      },
      {
        title: "The Song of Achilles",
        cover: {
          src: "https://booklounge.co.za/wp-content/uploads/2022/08/the-song-of-achilles-1.jpg",
          alt: "The Song of Achilles",
        },
        variant: "compact",
        messages: [
          {
            message: "Hi, ist das Buch noch zu haben?",
            self: true,
            timeStamp: "1h",
          },
        ],
      },
    ],
  },
};
