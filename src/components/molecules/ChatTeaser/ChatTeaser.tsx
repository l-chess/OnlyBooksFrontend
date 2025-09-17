import { Image, type ImageProps } from "../../atoms/Image/Image";

export type ChatTeaserProps = {
  cover: ImageProps;
  title: string;
  latestMessage: string;
  timeStamp: string;
  isLast?: boolean;
};

export const ChatTeaser = ({
  cover,
  title,
  latestMessage,
  timeStamp,
  isLast = true,
}: ChatTeaserProps) => {
  return (
    <div className={`flex w-full pr-4 pl-2 ${!isLast && "border-b border-b-gray-400"}`}>
      <Image src={cover.src} alt={cover.alt} className="w-12" />
      <div className="flex-1">
        <span className="font-semibold">{title}</span>
        <div className="flex justify-between">
          <span className="text-gray-400">{latestMessage}</span>
          <span className="text-gray-400">{timeStamp}</span>
        </div>
      </div>
    </div>
  );
};
