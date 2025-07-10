import React from "react";

// Tab navigation options
const tabs = [
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "platforms", label: "Platforms" },
  { id: "process", label: "Process" },
  { id: "benefits", label: "Benefits" },
  { id: "faq", label: "FAQ" },
];

export default function Navigation_Tabs({ activeTab, setActiveTab }) {
  return (
    <>
      <div className="padding scroll-animate opacity-0 translate-y-10 mt-10 mb-10 bg-gradient-to-br from-[#000] to-[#111] rounded-full border border-[#E6D28C]/10 shadow-[0_0_15px_rgba(230,210,140,0.15)] overflow-hidden transition-all duration-300 ">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto hide-scrollbar py-2 gap-1 sm:gap-2 justify-start sm:justify-center">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-1 whitespace-nowrap rounded-full text-sm sm:text-base font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] text-black shadow-[0_0_10px_rgba(230,210,140,0.3)]"
                    : "text-[#E6D28C]/70 hover:text-[#E6D28C] hover:bg-[#E6D28C]/10"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
