import React, { useState } from "react";
import Sidebar from "./components/Sidebar.jsx";
import ChatSection from "./components/ChatSection.jsx";
import AIPanel from "./components/AIPanel.jsx";

// function App() {
//   const [chatInput, setChatInput] = useState("");
//   return (
//     <div className="flex flex-col md:flex-row h-screen font-sans bg-[#f7f9fb]">
//       <Sidebar />
//       <div className="flex-1 min-h-[50vh]">
//         <ChatSection input={chatInput} setInput={setChatInput} />
//       </div>
//       <div className="w-full md:w-[300px] border-t md:border-t-0 md:border-l">
//         <AIPanel setChatInput={setChatInput} />
//       </div>
//     </div>
//   );
// }

// export default App;

function App() {
  const [chatInput, setChatInput] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main Content */}
      <div className="flex flex-col flex-1">
        {/* Mobile Top Bar with Hamburger */}
        <div className="md:hidden p-4 border-b flex justify-between items-center">
          <button
            onClick={() => setSidebarOpen(true)}
            className="text-lg font-semibold"
          >
            ☰
          </button>
          <p className="font-medium">Support Inbox</p>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col md:flex-row">
          <div className="flex-1">
            <ChatSection input={chatInput} setInput={setChatInput} />
          </div>
          <div className="w-full md:w-[300px] border-t md:border-t-0 md:border-l">
            <AIPanel setChatInput={setChatInput} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
