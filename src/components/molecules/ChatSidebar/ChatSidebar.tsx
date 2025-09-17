import { ChatTeaser, type ChatTeaserProps } from "../ChatTeaser/ChatTeaser";

export type ChatSidebarProps = {
  chats: ChatTeaserProps[];
};

export const ChatSidebar = ({ chats }: ChatSidebarProps) => {
  return (
    <div className="flex h-screen w-80 flex-1 flex-col">
      <div className="flex h-10 items-center justify-center bg-purple-800 font-semibold text-lg text-white">
        Chats
      </div>
      <div className="overflow-y-scroll">
        {chats.map((chat, index) => (
          <ChatTeaser
            key={index}
            title={chat.title}
            cover={chat.cover}
            latestMessage={chat.latestMessage}
            timeStamp={chat.timeStamp}
            isLast={index === chats.length - 1}
          />
        ))}
      </div>
    </div>
  );
};
