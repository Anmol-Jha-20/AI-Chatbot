import { useState } from "react";
import MessageBubble from "./MessageBubble.jsx";

export default function ChatSection({ input, setInput }) {
  const [messages, setMessages] = useState([
    { from: "user", text: "I bought a product..." },
    { from: "agent", text: "Let me just look into this for you, Luis." },
  ]);

  return (
    <div className="flex-1 flex flex-col bg-white border-r h-full">
      {/* Header */}
      <div className="p-4 flex justify-between items-center border-b text-sm md:text-base">
        <p className="font-medium">Luis Easton</p>
        <button className="text-sm px-3 py-1 border rounded hover:bg-gray-100">
          Close
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 p-6 overflow-y-auto space-y-4 cursor-default">
        {messages.map((msg, i) => (
          <MessageBubble key={i} msg={msg} />
        ))}
      </div>

      {/* Input */}
      <div className="border-t p-4 bg-white sticky bottom-0">
        <div className="flex items-center gap-2">
          <input
            type="text"
            className="flex-1 border rounded px-4 py-2 text-sm"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            onClick={() => {
              if (input.trim()) {
                setMessages([...messages, { from: "agent", text: input }]);
                setInput("");
              }
            }}
            className="text-sm px-4 py-2 bg-black text-white rounded cursor-pointer"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
