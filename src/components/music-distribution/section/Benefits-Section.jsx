import React from "react";

const Benefits = [
  {
    id: 1,
    title: "Global Reach",
    description:
      "ကမ္ဘာတစ်ဝှမ်းရှိ နားဆင်သူများထံ သင့်သီချင်းများ ရောက်ရှိစေခြင်း",
  },
  {
    id: 2,
    title: "Revenue Generation",
    description: "သင့်သီချင်းများမှ ဝင်ငွေရရှိနိုင်ခြင်း",
  },
  {
    id: 3,
    title: "Content Protection",
    description: "သင့်သီချင်းများကို မူပိုင်ခွင့်ကာကွယ်ပေးခြင်း",
  },
  {
    id: 4,
    title: "Professional Presence",
    description: "ပရော်ဖက်ရှင်နယ် အနုပညာရှင်အဖြစ် ရပ်တည်နိုင်ခြင်း",
  },
];

export default function Benefits_Section() {
  // from icones.js.org website
  function MusicIcon() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.5em"
        height="1.5em"
        viewBox="0 0 24 24"
        className="text-[#E6D28C]"
      >
        <path
          fill="currentColor"
          d="M12 3v10.55c-.59-.34-1.27-.55-2-.55c-2.21 0-4 1.79-4 4s1.79 4 4 4s4-1.79 4-4V7h4V3h-6z"
        />
      </svg>
    );
  }
  return (
    <>
      <div className="mt-12 scroll-animate opacity-0 translate-y-10 transition-all duration-1000">
        <div className="bg-[#111] rounded-3xl border border-[#E6D28C]/10 shadow-[0_0_15px_rgba(230,210,140,0.1)] overflow-hidden p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] bg-clip-text text-transparent animate-gradient">
            Benefits of Digital Distribution
          </h2>

          {/* Benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {Benefits.length &&
              Benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-black rounded-xl overflow-hidden border border-[#E6D28C]/20 hover:border-[#E6D28C]/50 hover:shadow-[0_0_15px_rgba(230,210,140,0.2)] transition-all duration-300 transform hover:-translate-y-1 p-6"
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#E6D28C]/10 flex items-center justify-center">
                      <MusicIcon />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-[#E6D28C] text-center mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-[#E6D28C]/70 text-center text-sm leading-7">
                    {benefit.description}
                  </p>
                </div>
              ))}

            {/* Benefit 2 */}
            {/* <div className="bg-black rounded-xl overflow-hidden border border-[#E6D28C]/20 hover:border-[#E6D28C]/50 hover:shadow-[0_0_15px_rgba(230,210,140,0.2)] transition-all duration-300 transform hover:-translate-y-1 p-6">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-[#E6D28C]/10 flex items-center justify-center">
                  <MusicIcon />
                </div>
              </div>
              <h3 className="text-lg font-bold text-[#E6D28C] text-center mb-2">
                Revenue Generation
              </h3>
              <p className="text-[#E6D28C]/70 text-center text-sm">
                သင့်သီချင်းများမှ ဝင်ငွေရရှိနိုင်ခြင်း
              </p>
            </div> */}

            {/* Benefit 3 */}
            {/* <div className="bg-black rounded-xl overflow-hidden border border-[#E6D28C]/20 hover:border-[#E6D28C]/50 hover:shadow-[0_0_15px_rgba(230,210,140,0.2)] transition-all duration-300 transform hover:-translate-y-1 p-6">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-[#E6D28C]/10 flex items-center justify-center">
                  <MusicIcon />
                </div>
              </div>
              <h3 className="text-lg font-bold text-[#E6D28C] text-center mb-2">
                Content Protection
              </h3>
              <p className="text-[#E6D28C]/70 text-center text-sm">
                သင့်သီချင်းများကို မူပိုင်ခွင့်ကာကွယ်ပေးခြင်း
              </p>
            </div> */}

            {/* Benefit 4 */}
            {/* <div className="bg-black rounded-xl overflow-hidden border border-[#E6D28C]/20 hover:border-[#E6D28C]/50 hover:shadow-[0_0_15px_rgba(230,210,140,0.2)] transition-all duration-300 transform hover:-translate-y-1 p-6">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-[#E6D28C]/10 flex items-center justify-center">
                  <MusicIcon />
                </div>
              </div>
              <h3 className="text-lg font-bold text-[#E6D28C] text-center mb-2">
                Professional Presence
              </h3>
              <p className="text-[#E6D28C]/70 text-center text-sm">
                ပရော်ဖက်ရှင်နယ် အနုပညာရှင်အဖြစ် ရပ်တည်နိုင်ခြင်း
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
