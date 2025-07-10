import React from "react";
// logo
import CB_Bank_Logo from "../../../assets/CB_Bank_Logo.jpg";
import AYA_Bank_Logo from "../../../assets/AYA_Bank_Logo.png";
import KBZ_Bank_Logo from "../../../assets/KBZ_Bank_Logo.png";
import YOMA_Bank_Logo from "../../../assets/YOMA_Bank_Logo.png";

const banks = [
  {
    id: 1,
    title: "CB BANK",
    accountNumber: "0084600100098997, 0143600900004782",
    accountName: "SAW ELISHA MO, NAW RAY WAH PHAW, CHIT KO KO OO, ZIN MYO OO",
    logo: CB_Bank_Logo,
  },
  {
    id: 2,
    title: "AYA BANK",
    accountNumber: "0084600100098997, 0143600900004782",
    accountName: "SAW ELISHA MO, NAW RAY WAH PHAW, CHIT KO KO OO, ZIN MYO OO",
    logo: AYA_Bank_Logo,
  },
  {
    id: 3,
    title: "KBZ BANK",
    accountNumber: "0084600100098997, 0143600900004782",
    accountName: "SAW ELISHA MO, NAW RAY WAH PHAW, CHIT KO KO OO, ZIN MYO OO",
    logo: KBZ_Bank_Logo,
  },
  {
    id: 4,
    title: "YOMA BANK",
    accountNumber: "0084600100098997, 0143600900004782",
    accountName: "SAW ELISHA MO, NAW RAY WAH PHAW, CHIT KO KO OO, ZIN MYO OO",
    logo: YOMA_Bank_Logo,
  },
];

export default function Direct_Transfer_Section() {
  return (
    <>
      <div className="w-full lg:w-1/2 bg-gradient-to-br from-[#000] to-[#111] p-6 md:p-8 rounded-xl shadow-[0_0_15px_rgba(230,210,140,0.15)] border border-[#E6D28C]/20 hover:shadow-[0_0_20px_rgba(230,210,140,0.3)] transition-all duration-500 ">
        <h3 className="text-xl font-semibold mb-6 flex items-center text-[#E6D28C] border-b border-[#E6D28C]/30 pb-2">
          <span className="mr-3 w-8 h-8 flex items-center justify-center bg-[#E6D28C]/10 rounded-full text-[#E6D28C]">
            💳
          </span>{" "}
          Direct Transfer
        </h3>
        <div className="space-y-6">
          {banks.length &&
            banks.map((bank, index) => (
              <div
                key={index}
                className="p-4 rounded-lg bg-black/30 hover:bg-black/50 transition-all duration-300 border border-[#E6D28C]/10"
              >
                <div className="flex items-center gap-2 mb-2">
                  <img
                    src={bank.logo}
                    alt="CB Bank Logo"
                    width={20}
                    className="rounded-md"
                  />
                  <h4 className="font-semibold text-lg text-[#E6D28C]">
                    {bank.title}
                  </h4>
                </div>
                <p className="text-[#E6D28C]/70 text-sm md:text-base">
                  Account Number: {bank.accountNumber}
                </p>
                <p className="text-[#E6D28C]/70 text-sm md:text-base">
                  Account Name: {bank.accountName}
                </p>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
