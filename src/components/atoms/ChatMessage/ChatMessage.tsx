"use client";
import { useEffect, useRef, useState } from "react";

export type ChatMessageProps = {
  message: string;
  self: boolean;
  timeStamp: string;
};

export const ChatMessage = ({ message, self }: ChatMessageProps) => {
  const messageRef = useRef<HTMLDivElement>(null);
  const [singleLined, setSingleLined] = useState(true);

  useEffect(() => {
    const el = messageRef.current;
    if (!el) return;
    const lineHeight = parseFloat(getComputedStyle(el).lineHeight || "0");
    const height = el?.clientHeight;
    setSingleLined(height <= lineHeight * 1.1);
  }, []);

  return (
    <div
      ref={messageRef}
      className={`max-w-3/5 px-3 py-0.5 text-center ${self ? "bg-purple-800 text-white" : "bg-gray-300"} ${singleLined ? "rounded-full" : "rounded-2xl"}`}
    >
      <span>{message}</span>
    </div>
  );
};
