import React from "react";
import { NavLink } from "react-router-dom";

export default function Music_Distribution_Section() {
  return (
    <>
      <div
        id="music-distribution"
        className="scroll-animate opacity-0 translate-y-10"
      >
        <div className="bg-[#111] p-6 sm:p-8 rounded-3xl border border-[#E6D28C]/10 shadow-[0_0_15px_rgba(230,210,140,0.1)]">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] bg-clip-text text-transparent border-l-4 border-[#D4AF37] pl-4 font-jetbrains">
            Music Distribution
          </h2>
          <p className="text-[#E6D28C]/90 mt-4 font-jetbrains text-sm sm:text-base leading-relaxed">
            Our music distribution service helps Christian artists in Myanmar
            reach global audiences through all major streaming platforms. We
            handle the technical aspects of distribution while ensuring you
            maintain full rights to your music and receive fair compensation.
          </p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-black/50 p-4 rounded-xl border border-[#E6D28C]/5 hover:border-[#E6D28C]/20 transition-all duration-300">
              <h3 className="text-[#E6D28C] font-bold mb-2">Global Reach</h3>
              <p className="text-[#E6D28C]/70 text-sm">
                Distribution to Spotify, Apple Music, YouTube Music, Amazon
                Music, and 150+ platforms worldwide.
              </p>
            </div>
            <div className="bg-black/50 p-4 rounded-xl border border-[#E6D28C]/5 hover:border-[#E6D28C]/20 transition-all duration-300">
              <h3 className="text-[#E6D28C] font-bold mb-2">
                Artist-Friendly Terms
              </h3>
              <p className="text-[#E6D28C]/70 text-sm">
                Keep 100% ownership of your music with transparent revenue
                sharing and no hidden fees.
              </p>
            </div>
            <div className="bg-black/50 p-4 rounded-xl border border-[#E6D28C]/5 hover:border-[#E6D28C]/20 transition-all duration-300">
              <h3 className="text-[#E6D28C] font-bold mb-2">
                Marketing Support
              </h3>
              <p className="text-[#E6D28C]/70 text-sm">
                Promotional assistance to help your music reach the right
                audience and maximize impact.
              </p>
            </div>
            <div className="bg-black/50 p-4 rounded-xl border border-[#E6D28C]/5 hover:border-[#E6D28C]/20 transition-all duration-300">
              <h3 className="text-[#E6D28C] font-bold mb-2">
                Detailed Analytics
              </h3>
              <p className="text-[#E6D28C]/70 text-sm">
                Access comprehensive streaming data and audience insights to
                grow your ministry.
              </p>
            </div>
          </div>

          <div className="mt-6 text-center">
            <NavLink to="/music-distribution">
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
