import React from "react";
// logo
import KBZ_Pay_Logo from "../../../assets/KBZ_Pay_Logo.png";
import Wave_Pay_Logo from "../../../assets/Wave_Pay_Logo.png";

const methods = [
  {
    id: 1,
    title: "KBZ Pay",
    name: "KBZ Pay",
    phone: "09 421 120 143",
    logo: KBZ_Pay_Logo,
  },
  {
    id: 2,
    title: "WAVE Pay",
    name: "WAVE Pay",
    phone: "09 421 120 143",
    logo: Wave_Pay_Logo,
  },
];

export default function Payment_Method_Section() {
  return (
    <>
      <div className="w-full lg:w-1/2 bg-gradient-to-br from-[#000] to-[#111] text-[#E6D28C] p-6 md:p-8 rounded-xl shadow-[0_0_15px_rgba(230,210,140,0.15)] border border-[#E6D28C]/20 hover:shadow-[0_0_20px_rgba(230,210,140,0.3)] transition-all duration-500 ">
        <h3 className="text-xl font-semibold mb-6 flex items-center text-[#E6D28C] border-b border-[#E6D28C]/30 pb-2">
          <span className="mr-3 w-8 h-8 flex items-center justify-center bg-[#E6D28C]/10 rounded-full text-[#E6D28C]">
            📱
          </span>{" "}
          Choose Payment Method
        </h3>
        <div className="space-y-6">
          {methods.length &&
            methods.map((method, index) => (
              <div
                key={index}
                className="p-4 rounded-lg bg-black/30 hover:bg-black/50 transition-all duration-300 border border-[#E6D28C]/10"
              >
                <div className="flex items-center gap-2 mb-2">
                  <img
                    src={method.logo}
                    alt="KBZ Pay Logo"
                    width={20}
                    className="rounded-md"
                  />
                  <h3 className="font-semibold text-lg text-[#E6D28C]">
                    {method.title}
                  </h3>
                </div>
                <p className="text-[#E6D28C]/70 text-sm md:text-base">
                  Name: {method.name}
                </p>
                <p className="text-[#E6D28C]/70 text-sm md:text-base">
                  Phone No: {method.phone}
                </p>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
