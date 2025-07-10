import React from "react";
import { HashLink } from "react-router-hash-link";

export default function Services_Overview_Section() {
  return (
    <>
      <div className="mt-10 scroll-animate opacity-0 translate-y-10">
        <div className="bg-[#111] p-6 sm:p-8 rounded-3xl border border-[#E6D28C]/10 shadow-[0_0_15px_rgba(230,210,140,0.1)]">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] bg-clip-text text-transparent font-jetbrains text-center">
            Our Services
          </h2>
          <p className="text-[#E6D28C]/90 mb-8 font-jetbrains text-center max-w-4xl mx-auto">
            Myanmar Christian Music Network offers a comprehensive suite of
            services designed to support Christian musicians, churches, and
            ministries throughout Myanmar. From music distribution to licensing
            and education, we provide the tools and resources you need to
            create, share, and protect your music.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 font-jetbrains">
            {/* Music Distribution */}
            <HashLink smooth to="#music-distribution" className="group">
              <div className="bg-black h-full p-6 rounded-xl border border-[#E6D28C]/20 hover:border-[#E6D28C]/50 hover:shadow-[0_0_15px_rgba(230,210,140,0.2)] transition-all duration-300 transform group-hover:-translate-y-1 flex flex-col items-center text-center">
                <span className="text-4xl mb-3">🎵</span>
                <h3 className="text-xl font-bold text-[#E6D28C] mb-2">
                  Music Distribution
                </h3>
                <p className="text-[#E6D28C]/70 text-sm">
                  Get your music on all major streaming platforms and reach a
                  global audience.
                </p>
              </div>
            </HashLink>

            {/* Cover Song Licence */}
            <HashLink smooth to="#cover-song-licence" className="group">
              <div className="bg-black h-full p-6 rounded-xl border border-[#E6D28C]/20 hover:border-[#E6D28C]/50 hover:shadow-[0_0_15px_rgba(230,210,140,0.2)] transition-all duration-300 transform group-hover:-translate-y-1 flex flex-col items-center text-center">
                <span className="text-4xl mb-3">📝</span>
                <h3 className="text-xl font-bold text-[#E6D28C] mb-2">
                  Cover Song Licence
                </h3>
                <p className="text-[#E6D28C]/70 text-sm">
                  Legally cover songs with proper licensing and royalty
                  management.
                </p>
              </div>
            </HashLink>

            {/* Church Licence */}
            <HashLink smooth to="#church-licence" className="group">
              <div className="bg-black h-full p-6 rounded-xl border border-[#E6D28C]/20 hover:border-[#E6D28C]/50 hover:shadow-[0_0_15px_rgba(230,210,140,0.2)] transition-all duration-300 transform group-hover:-translate-y-1 flex flex-col items-center text-center">
                <span className="text-4xl mb-3">⛪</span>
                <h3 className="text-xl font-bold text-[#E6D28C] mb-2">
                  Church Licence
                </h3>
                <p className="text-[#E6D28C]/70 text-sm">
                  Comprehensive licensing solutions for churches and worship
                  ministries.
                </p>
              </div>
            </HashLink>

            {/* Music School */}
            <HashLink smooth to="#music-school" className="group">
              <div className="bg-black h-full p-6 rounded-xl border border-[#E6D28C]/20 hover:border-[#E6D28C]/50 hover:shadow-[0_0_15px_rgba(230,210,140,0.2)] transition-all duration-300 transform group-hover:-translate-y-1 flex flex-col items-center text-center">
                <span className="text-4xl mb-3">🎹</span>
                <h3 className="text-xl font-bold text-[#E6D28C] mb-2">
                  Music School
                </h3>
                <p className="text-[#E6D28C]/70 text-sm">
                  Learn music production, theory, and performance from industry
                  professionals.
                </p>
              </div>
            </HashLink>

            {/* Create Song */}
            <HashLink smooth to="#create-song" className="group">
              <div className="bg-black h-full p-6 rounded-xl border border-[#E6D28C]/20 hover:border-[#E6D28C]/50 hover:shadow-[0_0_15px_rgba(230,210,140,0.2)] transition-all duration-300 transform group-hover:-translate-y-1 flex flex-col items-center text-center">
                <span className="text-4xl mb-3">🎼</span>
                <h3 className="text-xl font-bold text-[#E6D28C] mb-2">
                  Create Song
                </h3>
                <p className="text-[#E6D28C]/70 text-sm">
                  Professional songwriting and production services for artists
                  and ministries.
                </p>
              </div>
            </HashLink>

            {/* New: Consultation Services */}
            <HashLink smooth to="#consultation" className="group">
              <div className="bg-black h-full p-6 rounded-xl border border-[#E6D28C]/20 hover:border-[#E6D28C]/50 hover:shadow-[0_0_15px_rgba(230,210,140,0.2)] transition-all duration-300 transform group-hover:-translate-y-1 flex flex-col items-center text-center">
                <span className="text-4xl mb-3">💼</span>
                <h3 className="text-xl font-bold text-[#E6D28C] mb-2">
                  Consultation
                </h3>
                <p className="text-[#E6D28C]/70 text-sm">
                  Expert guidance on music career development, ministry growth,
                  and more.
                </p>
              </div>
            </HashLink>
          </div>
        </div>
      </div>
    </>
  );
}
