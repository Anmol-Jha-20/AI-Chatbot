export default function MessageBubble({ msg }) {
  const isUser = msg.from === "user";

  return (
    <div className={`flex ${isUser ? "justify-start" : "justify-end"}`}>
      <div
        className={`max-w-[70%] px-4 py-2 rounded-lg text-sm shadow-sm ${
          isUser ? "bg-gray-100 text-black" : "bg-blue-600 text-white"
        }`}
      >
        {msg.text}
        {!isUser && (
          <p className="text-[10px] text-right mt-1 text-blue-200">Seen</p>
        )}
      </div>
    </div>
  );
}
