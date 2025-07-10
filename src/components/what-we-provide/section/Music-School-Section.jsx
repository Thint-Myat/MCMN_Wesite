import React from "react";
import { NavLink } from "react-router-dom";

export default function Music_School_Section() {
  return (
    <>
      <div
        id="music-school"
        className="scroll-animate opacity-0 translate-y-10"
      >
        <div className="bg-[#111] p-6 sm:p-8 rounded-3xl border border-[#E6D28C]/10 shadow-[0_0_15px_rgba(230,210,140,0.1)]">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] bg-clip-text text-transparent border-l-4 border-[#D4AF37] pl-4 font-jetbrains">
            Music School
          </h2>
          <p className="text-[#E6D28C]/90 mt-4 font-jetbrains text-sm sm:text-base leading-relaxed">
            Our music school offers comprehensive education in music production,
            performance, and ministry leadership. Learn from experienced
            Christian musicians and industry professionals in a supportive
            environment designed to develop your God-given talents.
          </p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-black/50 p-5 rounded-xl border border-[#E6D28C]/5 hover:border-[#E6D28C]/20 transition-all duration-300 hover:shadow-[0_0_10px_rgba(230,210,140,0.1)]">
              <div className="text-2xl mb-2">🎸</div>
              <h3 className="text-xl font-bold text-[#E6D28C] mb-2">
                Instrument Training
              </h3>
              <p className="text-[#E6D28C]/80 text-sm">
                Professional instruction in guitar, piano, drums, bass, and
                vocals for worship ministry.
              </p>
            </div>
            <div className="bg-black/50 p-5 rounded-xl border border-[#E6D28C]/5 hover:border-[#E6D28C]/20 transition-all duration-300 hover:shadow-[0_0_10px_rgba(230,210,140,0.1)]">
              <div className="text-2xl mb-2">🎚️</div>
              <h3 className="text-xl font-bold text-[#E6D28C] mb-2">
                Music Production
              </h3>
              <p className="text-[#E6D28C]/80 text-sm">
                Learn recording, mixing, and mastering techniques for
                professional-quality music production.
              </p>
            </div>
            <div className="bg-black/50 p-5 rounded-xl border border-[#E6D28C]/5 hover:border-[#E6D28C]/20 transition-all duration-300 hover:shadow-[0_0_10px_rgba(230,210,140,0.1)]">
              <div className="text-2xl mb-2">📝</div>
              <h3 className="text-xl font-bold text-[#E6D28C] mb-2">
                Songwriting
              </h3>
              <p className="text-[#E6D28C]/80 text-sm">
                Develop your songwriting skills with guidance on lyrics, melody,
                harmony, and arrangement.
              </p>
            </div>
            <div className="bg-black/50 p-5 rounded-xl border border-[#E6D28C]/5 hover:border-[#E6D28C]/20 transition-all duration-300 hover:shadow-[0_0_10px_rgba(230,210,140,0.1)]">
              <div className="text-2xl mb-2">🙏</div>
              <h3 className="text-xl font-bold text-[#E6D28C] mb-2">
                Worship Leadership
              </h3>
              <p className="text-[#E6D28C]/80 text-sm">
                Training in worship team dynamics, spiritual leadership, and
                service planning.
              </p>
            </div>
          </div>

          <div className="mt-6 text-center">
            <NavLink to="/music-school">
              <button className="bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] text-black px-6 py-3 rounded-full text-base font-bold hover:shadow-[0_0_15px_rgba(230,210,140,0.5)] transition-all duration-300 transform hover:scale-105">
                Learn More
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
