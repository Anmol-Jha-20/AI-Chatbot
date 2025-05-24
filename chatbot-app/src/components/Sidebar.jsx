export default function Sidebar({ isOpen, onClose }) {
  return (
    <div
      className={`fixed md:static top-0 left-0 h-full bg-white border-r z-50 transition-transform duration-300 ease-in-out
         ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
    >
      <div className="w-[280px] bg-white border-r p-4">
        <h2 className="text-lg font-semibold mb-4">Your inbox</h2>
        <button onClick={onClose} className="md:hidden text-sm">
          ✖
        </button>
        <div className="flex gap-4 text-sm mb-4">
          <span className="font-semibold text-black cursor-pointer">Open</span>
          <span className="text-gray-500 cursor-pointer">Waiting longest</span>
        </div>
        <div className="space-y-4">
          {[1, 2, 3].map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-3 p-2 rounded hover:bg-gray-100 cursor-pointer"
            >
              <div className="relative">
                <div className="w-9 h-9 rounded-full bg-gray-300" />
                {i === 0 && (
                  <span className="absolute top-0 right-0 w-2 h-2 bg-blue-500 rounded-full" />
                )}
              </div>
              <div className="text-sm flex-1">
                <p className="font-semibold">Luis · Github</p>
                <p className="text-gray-500 text-xs truncate w-[160px]">
                  I have a question...
                </p>
              </div>
              <span className="text-xs text-gray-400">45m</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
