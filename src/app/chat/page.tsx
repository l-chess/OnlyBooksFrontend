import { IoSend } from "react-icons/io5";
import data from "@/src/backup-data.json";
import { ChatMessage } from "@/src/components/atoms/ChatMessage/ChatMessage";
import { Input } from "@/src/components/atoms/Input/Input";
import { ChatOptions } from "@/src/components/molecules/ChatOptions/ChatOptions";
import { ChatSidebar } from "@/src/components/molecules/ChatSidebar/ChatSidebar";
import { ChatTeaser } from "@/src/components/molecules/ChatTeaser/ChatTeaser";
import { Custom } from "@/src/components/molecules/Custom/Custom";

const Chat = () => {
  const chats = data.chats;
  return (
    <div className="flex h-[calc(100vh-68px)] w-screen flex-1 overflow-hidden">
      <div className="w-1/4">
        <ChatSidebar chats={chats} />
      </div>

      <div className="flex flex-1 flex-col">
        <div className="flex h-15 flex-row items-center justify-between border-purple-800 border-t border-b">
          <ChatTeaser
            cover={chats[0].cover}
            title={chats[0].title}
            variant="header"
            postalCode={chats[0].postalCode}
          />
          <div className="mr-4">
            <ChatOptions />
          </div>
        </div>

        <div className="flex flex-1 flex-col">
          <div className="flex flex-1 flex-col overflow-y-auto p-2">
            {chats[0].messages.map((message, index) => (
              <div
                key={index}
                className={`${message.self === true ? "justify-end" : "justify-start"} flex`}
              >
                <ChatMessage
                  message={message.message}
                  self={message.self}
                  timeStamp={message.timeStamp}
                />
              </div>
            ))}
          </div>
          <div className="mx-auto flex w-1/2 items-center justify-between gap-2 py-6">
            <div className="w-full">
              <Input variant="framed" size="small" placeholder="Nachricht schreiben" />
            </div>
            <Custom
              type="button"
              color="lilla"
              iconLeft={<IoSend className="text-xl" />}
              size="medium"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
