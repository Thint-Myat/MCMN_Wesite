import React from "react";

const items = [
  {
    id: 1,
    icon: "📞",
    text: "+959 799901085",
  },
  {
    id: 2,
    icon: "📧",
    text: "myanmarchristianmusicnetwork@gmail.com",
  },
  {
    id: 3,
    icon: "📍",
    text: "No. 1, 1st Floor, 1st Road, Yangon",
  },
];

export default function Contact_Information_Section() {
  return (
    <>
      <div className="w-full lg:w-1/3 p-6 bg-[#111] rounded-lg shadow-[0_0_15px_rgba(230,210,140,0.15)] border border-[#E6D28C]/20 hover:shadow-[0_0_20px_rgba(230,210,140,0.3)] transition-all duration-500">
        <h3 className="text-xl font-semibold mb-6 text-[#E6D28C] border-b border-[#E6D28C]/30 pb-2">
          Contact Information
        </h3>
        <p className="text-sm text-[#E6D28C]/70 mb-6">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>

        <div className="space-y-6">
          {items.length &&
            items.map((item, index) => (
              <div key={index} className="flex items-center group">
                <span className="mr-3 w-8 h-8 flex items-center justify-center bg-[#E6D28C]/10 rounded-full text-[#E6D28C] group-hover:bg-[#E6D28C]/20 transition-all duration-300">
                  {item.icon}
                </span>
                <span className="text-sm group-hover:text-[#E6D28C] transition-colors duration-300">
                  {item.text}
                </span>
              </div>
            ))}
          {/* <div className="flex items-center group">
            <span className="mr-3 w-8 h-8 flex items-center justify-center bg-[#E6D28C]/10 rounded-full text-[#E6D28C] group-hover:bg-[#E6D28C]/20 transition-all duration-300">
              📧
            </span>
            <span className="text-sm group-hover:text-[#E6D28C] transition-colors duration-300">
              myanmarchristianmusicnetwork@gmail.com
            </span>
          </div>
          <div className="flex items-center group">
            <span className="mr-3 w-8 h-8 flex items-center justify-center bg-[#E6D28C]/10 rounded-full text-[#E6D28C] group-hover:bg-[#E6D28C]/20 transition-all duration-300">
              📍
            </span>
            <span className="text-sm group-hover:text-[#E6D28C] transition-colors duration-300">
              Baw Ga St. Northokkala, Yangon
            </span>
          </div> */}
        </div>
      </div>
    </>
  );
}
