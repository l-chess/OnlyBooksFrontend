import type { ChatMessageProps } from "../../atoms/ChatMessage/ChatMessage";
import { Image, type ImageProps } from "../../atoms/Image/Image";

export type Chat = {
  cover: ImageProps;
  title: string;
  variant?: "compact" | "header";
  postalCode?: string;
  messages?: ChatMessageProps[];
  isLast?: boolean;
};

export const ChatTeaser = ({
  cover,
  title,
  variant,
  postalCode,
  messages,
  isLast = true,
}: Chat) => {
  return (
    <div
      className={`flex w-full ${variant === "compact" && "pr-4 pl-2"} ${!isLast && "border-b border-b-gray-400"}`}
    >
      <Image src={cover.src} alt={cover.alt} className="w-12" />
      <div className="flex-1">
        <span className="truncate font-semibold">{title}</span>
        <div className="flex justify-between">
          <span className="truncate text-gray-400">
            {variant === "compact" &&
              messages &&
              messages[messages.length - 1].self === true &&
              "Du: "}
            {variant === "compact" && messages && messages[messages.length - 1].message}
            {variant === "header" && postalCode && postalCode}
          </span>
          {variant === "compact" && messages && (
            <span className="ml-1 text-gray-400">{messages[messages.length - 1].timeStamp}</span>
          )}
        </div>
      </div>
    </div>
  );
};
