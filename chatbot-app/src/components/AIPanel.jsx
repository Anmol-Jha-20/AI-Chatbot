import { useState } from "react";

function AIPanel({ setChatInput }) {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!input.trim()) return;

    const userMessage = { from: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);
    setInput("");

    try {
      const res = await fetch("http://localhost:5000/api/ai/ask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: input }),
      });

      const data = await res.json();
      const aiMessage = { from: "ai", text: data.reply };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { from: "ai", text: "❌ Failed to get AI response" },
      ]);
      console.error("Fetch error:", err);
    }

    setLoading(false);
  };

  return (
    <div className="w-full lg:w-[300px] bg-[#fdfdff] p-4 border-l flex flex-col h-full">
      <div className="text-sm text-gray-400 mb-3">AI Copilot</div>
      <div className="text-center mb-4">
        <div className="text-2xl mb-1">🤖</div>
        <p className="text-base font-semibold">Hi, I'm Fin AI Copilot</p>
        <p className="text-xs text-gray-500">
          Ask me anything about this conversation.
        </p>
      </div>

      <div className="mb-4">
        <p className="text-xs text-gray-500 mb-1">Suggested 💡</p>
        <button
          className="text-left text-xs text-blue-600 bg-blue-50 px-3 py-2 rounded w-full hover:bg-blue-100"
          onClick={() => setInput("How do I get a refund?")}
        >
          How do I get a refund?
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto space-y-4 mb-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`max-w-[85%] text-sm px-4 py-2 rounded-lg ${
              msg.from === "user"
                ? "bg-white border self-end shadow"
                : "bg-gradient-to-br from-pink-100 to-purple-100 text-gray-800 self-start"
            }`}
          >
            {msg.text}
            {msg.from === "ai" && (
              <div className="mt-2">
                <button
                  onClick={() => setChatInput(msg.text)}
                  className="flex items-center gap-2 bg-white text-black font-medium px-4 py-2 rounded-xl shadow border border-gray-200 hover:shadow-md transition cursor-pointer"
                >
                  <i className="fa-solid fa-up-right-from-square text-sm sm:text-base"></i>{" "}
                  Add to composer{" "}
                  <i className="fa-solid fa-chevron-down ml-auto text-xs sm:text-sm"></i>
                </button>
              </div>
            )}
          </div>
        ))}

        {loading && (
          <div className="bg-gray-100 text-sm text-gray-500 px-4 py-2 rounded-lg italic animate-pulse self-start">
            Thinking...
          </div>
        )}
      </div>

      <div className="mt-auto">
        <input
          type="text"
          placeholder="Ask a question..."
          className="w-full border rounded px-3 py-2 text-sm mb-2"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAsk()}
        />
        <button
          onClick={handleAsk}
          className="w-full bg-black text-white text-sm py-2 rounded hover:bg-gray-800 cursor-pointer"
        >
          Ask
        </button>
      </div>
    </div>
  );
}

export default AIPanel;
