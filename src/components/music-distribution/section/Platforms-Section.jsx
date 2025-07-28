import React from "react";
//
import Spotify_Logo from "../../../assets/Spotify_Logo.svg";
import Apple_Music_Logo from "../../../assets/Apple_Music_Logo.svg";
import YouTube_Logo from "../../../assets/YouTube_Logo.svg";
import YouTube_Music_Logo from "../../../assets/YouTube_Music_Logo.svg";
import Deezer_Logo from "../../../assets/Deezer_Logo.png";
import Tidal_Logo from "../../../assets/Tidal_Logo.png";
import Amazon_Music_Logo from "../../../assets/Amazon_Music_Logo.png";
import Facebook_Logo from "../../../assets/Facebook_Logo.svg";
import Instagram_Logo from "../../../assets/Instagram_Logo.svg";

const platforms = [
  {
    id: 1,
    name: "Spotify",
    icon: (
      <img
        src={Spotify_Logo}
        alt="Spotify Logo"
        className="w-8 h-8 md:w-9 md:h-9"
      />
    ),
  },
  {
    id: 2,
    name: "Apple Music",
    icon: (
      <img
        src={Apple_Music_Logo}
        alt="Apple Music Logo"
        className="w-7 h-7 md:w-8 md:h-8"
      />
    ),
  },
  {
    id: 3,
    name: "YouTube",
    icon: (
      <img
        src={YouTube_Logo}
        alt="YouTube Logo"
        className="w-10 h-10 md:w-11 md:h-11"
      />
    ),
  },
  {
    id: 4,
    name: "YouTube Music",
    icon: (
      <img
        src={YouTube_Music_Logo}
        alt="YouTube Music Logo"
        className="w-9 h-9 md:w-10 md:h-10"
      />
    ),
  },
  {
    id: 5,
    name: "Deezer",
    icon: (
      <img
        src={Deezer_Logo}
        alt="Deezer Logo"
        className="w-8 h-8 md:w-9 md:h-9"
      />
    ),
  },
  {
    id: 6,
    name: "Tidal",
    icon: (
      <img
        src={Tidal_Logo}
        alt="Tidal Logo"
        className="w-10 h-10 md:w-11 md:h-11 rounded-full"
      />
    ),
  },
  {
    id: 7,
    name: "Amazon Music",
    icon: (
      <img
        src={Amazon_Music_Logo}
        alt="Amazon Music Logo"
        className="w-10 h-10 md:w-11 md:h-11 rounded-full"
      />
    ),
  },
  {
    id: 8,
    name: "Tik Tok",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-9 h-9 md:w-10 md:h-10"
        viewBox="0 0 256 290"
      >
        <path
          fill="#FF004F"
          d="M189.72 104.421c18.678 13.345 41.56 21.197 66.273 21.197v-47.53a67 67 0 0 1-13.918-1.456v37.413c-24.711 0-47.59-7.851-66.272-21.195v96.996c0 48.523-39.356 87.855-87.9 87.855c-18.113 0-34.949-5.473-48.934-14.86c15.962 16.313 38.222 26.432 62.848 26.432c48.548 0 87.905-39.332 87.905-87.857v-96.995zm17.17-47.952c-9.546-10.423-15.814-23.893-17.17-38.785v-6.113h-13.189c3.32 18.927 14.644 35.097 30.358 44.898M69.673 225.607a40 40 0 0 1-8.203-24.33c0-22.192 18.001-40.186 40.21-40.186a40.3 40.3 0 0 1 12.197 1.883v-48.593c-4.61-.631-9.262-.9-13.912-.801v37.822a40.3 40.3 0 0 0-12.203-1.882c-22.208 0-40.208 17.992-40.208 40.187c0 15.694 8.997 29.281 22.119 35.9"
        />
        <path d="M175.803 92.849c18.683 13.344 41.56 21.195 66.272 21.195V76.631c-13.794-2.937-26.005-10.141-35.186-20.162c-15.715-9.802-27.038-25.972-30.358-44.898h-34.643v189.843c-.079 22.132-18.049 40.052-40.21 40.052c-13.058 0-24.66-6.221-32.007-15.86c-13.12-6.618-22.118-20.206-22.118-35.898c0-22.193 18-40.187 40.208-40.187c4.255 0 8.356.662 12.203 1.882v-37.822c-47.692.985-86.047 39.933-86.047 87.834c0 23.912 9.551 45.589 25.053 61.428c13.985 9.385 30.82 14.86 48.934 14.86c48.545 0 87.9-39.335 87.9-87.857z" />
        <path
          fill="#00F2EA"
          d="M242.075 76.63V66.516a66.3 66.3 0 0 1-35.186-10.047a66.47 66.47 0 0 0 35.186 20.163M176.53 11.57a68 68 0 0 1-.728-5.457V0h-47.834v189.845c-.076 22.13-18.046 40.05-40.208 40.05a40.06 40.06 0 0 1-18.09-4.287c7.347 9.637 18.949 15.857 32.007 15.857c22.16 0 40.132-17.918 40.21-40.05V11.571zM99.966 113.58v-10.769a89 89 0 0 0-12.061-.818C39.355 101.993 0 141.327 0 189.845c0 30.419 15.467 57.227 38.971 72.996c-15.502-15.838-25.053-37.516-25.053-61.427c0-47.9 38.354-86.848 86.048-87.833"
        />
      </svg>
    ),
  },
  {
    id: 9,
    name: "Facebook",
    icon: (
      <img
        src={Facebook_Logo}
        alt="Facebook Logo"
        className="w-10 h-10 md:w-11 md:h-11 rounded-full"
      />
    ),
  },
  {
    id: 10,
    name: "Instagram",
    icon: (
      <img
        src={Instagram_Logo}
        alt="Instagram Logo"
        className="w-10 h-10 md:w-11 md:h-11 rounded-full"
      />
    ),
  },
];

export default function Platforms_Section() {
  return (
    <>
      <div className="mt-8 md:mt-12 scroll-animate opacity-0 translate-y-10 transition-all duration-1000">
        <div className="bg-[#111] rounded-2xl md:rounded-3xl border border-[#E6D28C]/10 shadow-[0_0_15px_rgba(230,210,140,0.1)] overflow-hidden p-6 md:p-8 lg:p-12">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 md:mb-8 text-center bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] bg-clip-text text-transparent animate-gradient">
            Distribution Platforms
          </h2>
          <p className="text-[#E6D28C]/80 text-center max-w-3xl mx-auto mb-8 md:mb-10 leading-relaxed text-sm md:text-base px-4 md:px-0">
            သင့်သီချင်းများကို အောက်ပါ Digital Music Platforms များပေါ်သို့
            ဖြန့်ဖြူးပေးပါမည်
          </p>

          {/* Platforms Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
            {platforms.map((platform) => (
              <div
                key={platform.id}
                className="bg-black rounded-lg md:rounded-xl overflow-hidden border border-[#E6D28C]/20 p-4 md:p-6"
              >
                <div className="flex justify-center mb-3 md:mb-4">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#E6D28C]/5 flex items-center justify-center">
                    {platform.icon}
                  </div>
                </div>
                <h3 className="text-sm md:text-lg font-bold text-[#E6D28C] text-center mb-2 leading-tight">
                  {platform.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
