import { type Chat, ChatTeaser } from "../ChatTeaser/ChatTeaser";

export type ChatSidebarProps = {
  chats: Chat[];
};

export const ChatSidebar = ({ chats }: ChatSidebarProps) => {
  return (
    <div className="flex h-screen flex-1 flex-col border-r border-r-purple-800">
      <div className="flex h-15 items-center justify-center bg-purple-800 font-semibold text-lg text-white">
        Chats
      </div>
      <div className="overflow-y-scroll">
        {chats.map((chat, index) => (
          <ChatTeaser
            key={index}
            title={chat.title}
            variant="compact"
            cover={chat.cover}
            messages={chat.messages}
            isLast={index === chats.length - 1}
          />
        ))}
      </div>
    </div>
  );
};
