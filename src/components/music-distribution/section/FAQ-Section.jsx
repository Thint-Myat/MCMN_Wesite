import React, { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "MCMN မှတဆင့် သီချင်းဖြန့်ဖြူးရန် မည်သည့်အရာများ လိုအပ်ပါသလဲ?",
    answer: "သင့်သီချင်း MP3/WAV ဖိုင်၊ သီချင်းဓာတ်ပုံ၊ သီချင်းအကြောင်း အချက်အလက်များနှင့် သင့်ဆက်သွယ်ရန် အချက်အလက်များ လိုအပ်ပါသည်။",
  },
  {
    id: 2,
    question: "မည်သည့် platforms များပေါ်တွင် ဖြန့်ဖြူးပေးနိုင်ပါသလဲ?",
    answer: "Spotify, Apple Music, YouTube Music, Amazon Music, Deezer အပါအဝင် နိုင်ငံတကာ music platforms ၁၅၀ ကျော်တွင် ဖြန့်ဖြူးပေးနိုင်ပါသည်။",
  },
  {
    id: 3,
    question: "သီချင်းဖြန့်ဖြူးခြင်းအတွက် ကုန်ကျစရိတ် မည်မျှရှိပါသလဲ?",
    answer: "သီချင်းဖြန့်ဖြူးခြင်းအတွက် ကုန်ကျစရိတ်များကို သင့်လိုအပ်ချက်နှင့် ဝန်ဆောင်မှုအပေါ် မူတည်၍ ကွဲပြားနိုင်ပါသည်။ အသေးစိတ်သိရှိလိုပါက ကျွန်ုပ်တို့ထံ ဆက်သွယ်မေးမြန်းနိုင်ပါသည်။",
  },
  {
    id: 4,
    question: "သီချင်းဖြန့်ဖြူးပြီးနောက် ဝင်ငွေကို မည်သို့ရရှိနိုင်ပါသလဲ?",
    answer: "သင့်သီချင်းများမှ ရရှိသော ဝင်ငွေများကို လစဉ် သို့မဟုတ် သုံးလတစ်ကြိမ် စုစည်း၍ သင့်ထံသို့ ပေးပို့ပါမည်။ ငွေပေးချေမှုနည်းလမ်းများကို သင့်နှင့် တိုင်ပင်ဆွေးနွေးပြီး အဆင်ပြေသည့်နည်းလမ်းဖြင့် ဆောင်ရွက်ပေးပါမည်။",
  },
  {
    id: 5,
    question: "သီချင်းဖြန့်ဖြူးရန် မည်မျှကြာမြင့်ပါသလဲ?",
    answer: "သင့်သီချင်းများကို platforms အားလုံးပေါ်တွင် ဖြန့်ဖြူးရန် ပုံမှန်အားဖြင့် ၂-၄ ပတ်ခန့် ကြာမြင့်နိုင်ပါသည်။ အချို့ platforms များတွင် ပိုမိုမြန်ဆန်စွာ ရရှိနိုင်ပါသည်။",
  },
  {
    id: 6,
    question: "မူပိုင်ခွင့်နှင့် ပတ်သက်၍ မည်သို့ကာကွယ်ပေးပါသလဲ?",
    answer: "သင့်သီချင်းများကို Content ID စနစ်ဖြင့် မှတ်ပုံတင်ပေးခြင်း၊ တရားမဝင်အသုံးပြုမှုများကို စောင့်ကြည့်ခြင်းနှင့် မူပိုင်ခွင့်ချိုးဖောက်မှုများကို တားဆီးခြင်းတို့ကို ဆောင်ရွက်ပေးပါသည်။",
  },
];

export default function FAQ_Section() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <div className="scroll-animate opacity-0 translate-y-10 transition-all duration-1000">
        <div className="bg-[#111] rounded-3xl border border-[#E6D28C]/10 shadow-[0_0_15px_rgba(230,210,140,0.1)] overflow-hidden p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] bg-clip-text text-transparent animate-gradient">
            မေးလေ့ရှိသော မေးခွန်းများ
          </h2>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={faq.id}
                className="bg-black/50 rounded-xl border border-[#E6D28C]/20 overflow-hidden transition-all duration-300"
              >
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="text-[#E6D28C] font-medium">{faq.question}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 text-[#E6D28C] transition-transform duration-300 ${activeIndex === index ? "transform rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ${activeIndex === index ? "py-4 max-h-40" : "max-h-0 py-0"}`}
                >
                  <p className="text-[#E6D28C]/70">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-[#E6D28C]/80 mb-4">
              အခြားမေးခွန်းများရှိပါက ကျွန်ုပ်တို့ထံ ဆက်သွယ်မေးမြန်းနိုင်ပါသည်
            </p>
            <button className="px-6 py-2 bg-transparent border border-[#E6D28C] text-[#E6D28C] font-medium rounded-full hover:bg-[#E6D28C]/10 hover:shadow-[0_0_15px_rgba(230,210,140,0.3)] transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
