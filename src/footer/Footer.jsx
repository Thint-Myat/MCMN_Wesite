import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const quickLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About Us",
    href: "/about",
  },
  {
    label: "Services",
    href: "/what-we-provide",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export function MaterialSymbolsMailRounded(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      {/* Icon from Material Symbols by Google - https://github.com/google/material-design-icons/blob/master/LICENSE */}
      <path
        fill="currentColor"
        d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7.175q.125 0 .263-.038t.262-.112L19.6 8.25q.2-.125.3-.312t.1-.413q0-.5-.425-.75T18.7 6.8L12 11L5.3 6.8q-.45-.275-.875-.012T4 7.525q0 .25.1.438t.3.287l7.075 4.425q.125.075.263.113t.262.037"
      />
    </svg>
  );
}

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    // For scroll animations
    const handleScroll = () => {
      const elements = document.querySelectorAll(".scroll-animate");
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const isInView = rect.top <= window.innerHeight * 0.9;
        if (isInView) {
          el.classList.add("animate-in");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <footer className="padding bg-gradient-to-r from-[#050505] via-[#0a0a0a] to-[#050505] font-jetbrains relative overflow-hidden">
        {/* Gold dust effect overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#D4AF37_0%,_transparent_70%)] opacity-[0.03] mix-blend-overlay"></div>
          <div className="absolute bottom-1/4 right-1/3 w-48 h-48 bg-[radial-gradient(ellipse_at_center,_#D4AF37_0%,_transparent_70%)] opacity-[0.03] mix-blend-overlay"></div>
        </div>

        {/* Diagonal gold accent */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/[0.07] via-transparent to-transparent z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-transparent to-[#E6D28C]/[0.05] z-0"></div>

        {/* Main footer content */}
        <div className="relative z-10 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: About & Social */}
          <div className="scroll-animate opacity-0 translate-y-10">
            <h2 className="text-xl font-bold mb-4 bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] bg-clip-text text-transparent animate-gradient">
              Follow Us
            </h2>
            <div className="flex gap-4 mt-3">
              {/* Facebook */}
              <Link
                to="https://www.facebook.com/MyanmarChristianMusicNetwork"
                className="transform transition-all duration-300 hover:scale-110 group"
                aria-label="Facebook"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  className="text-[#E6D28C] group-hover:text-[#D4AF37] transition-colors duration-300"
                >
                  <path
                    fill="currentColor"
                    d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"
                  />
                </svg>
              </Link>

              {/* Spotify */}
              {/* <Link
                to="#"
                className="transform transition-all duration-300 hover:scale-110 group"
                aria-label="Spotify"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  className="text-[#E6D28C] group-hover:text-[#D4AF37] transition-colors duration-300"
                >
                  <path
                    fill="currentColor"
                    d="M17.9 10.9C14.7 9 9.35 8.8 6.3 9.75c-.5.15-1-.15-1.15-.6c-.15-.5.15-1 .6-1.15c3.55-1.05 9.4-.85 13.1 1.35c.45.25.6.85.35 1.3c-.25.35-.85.5-1.3.25m-.1 2.8c-.25.35-.7.5-1.05.25c-2.7-1.65-6.8-2.15-9.95-1.15c-.4.1-.85-.1-.95-.5s.1-.85.5-.95c3.65-1.1 8.15-.55 11.25 1.35c.3.15.45.65.2 1m-1.2 2.75c-.2.3-.55.4-.85.2c-2.35-1.45-5.3-1.75-8.8-.95c-.35.1-.65-.15-.75-.45c-.1-.35.15-.65.45-.75c3.8-.85 7.1-.5 9.7 1.1c.35.15.4.55.25.85M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2"
                  />
                </svg>
              </Link> */}

              {/* Instagram */}
              <Link
                to="https://instagram.com/myanmarchristianmusicnetwork"
                className="transform transition-all duration-300 hover:scale-110 group"
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  className="text-[#E6D28C] group-hover:text-[#D4AF37] transition-colors duration-300"
                >
                  <path
                    fill="currentColor"
                    d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
                  />
                </svg>
              </Link>

              {/* YouTube */}
              <Link
                to="https://youtube.com/@MyanmarChristianMusicNetwork"
                className="transform transition-all duration-300 hover:scale-110 group"
                aria-label="YouTube"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  className="text-[#E6D28C] group-hover:text-[#D4AF37] transition-colors duration-300"
                >
                  <path
                    fill="currentColor"
                    d="m10 15l5.19-3L10 9zm11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div
            className="scroll-animate opacity-0 translate-y-10"
            style={{ transitionDelay: "100ms" }}
          >
            <h2 className="text-xl font-bold mb-4 bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] bg-clip-text text-transparent animate-gradient">
              Quick Links
            </h2>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-[#E6D28C]/80 hover:text-[#D4AF37] transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]/70 group-hover:scale-125 transition-transform duration-300"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div
            className="scroll-animate opacity-0 translate-y-10 col-span-2"
            style={{ transitionDelay: "200ms" }}
          >
            <h2 className="text-xl font-bold mb-4 bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] bg-clip-text text-transparent animate-gradient">
              Contact Us
            </h2>
            <div className="space-y-3">
              <div className="flex items-center gap-2 group">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  className="text-[#E6D28C] group-hover:text-[#D4AF37] transition-colors duration-300 mt-1"
                >
                  <path
                    fill="currentColor"
                    d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7"
                  />
                </svg>
                <p className="text-[#E6D28C]/80 group-hover:text-[#D4AF37] transition-colors duration-300">
                  No.1126(A), Kantharyar 1st street, 35 Quarter, North Dagon
                  Township, Yangon
                </p>
              </div>
              <div className="flex items-center gap-2 group">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  className="text-[#E6D28C] group-hover:text-[#D4AF37] transition-colors duration-300 mt-1"
                >
                  <path
                    fill="currentColor"
                    d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24c1.12.37 2.32.57 3.57.57c.55 0 1 .45 1 1V20c0 .55-.45 1-1 1c-9.39 0-17-7.61-17-17c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02z"
                  />
                </svg>
                <p className="text-[#E6D28C]/80 group-hover:text-[#D4AF37] transition-colors duration-300">
                  +959 799901085
                </p>
              </div>
              <div className="flex items-center gap-2 group">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  className="text-[#E6D28C] group-hover:text-[#D4AF37] transition-colors duration-300 mt-1"
                >
                  <path
                    fill="currentColor"
                    d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7.175q.125 0 .263-.038t.262-.112L19.6 8.25q.2-.125.3-.312t.1-.413q0-.5-.425-.75T18.7 6.8L12 11L5.3 6.8q-.45-.275-.875-.012T4 7.525q0 .25.1.438t.3.287l7.075 4.425q.125.075.263.113t.262.037"
                  />
                </svg>
                <p className="text-[#E6D28C]/80 group-hover:text-[#D4AF37] transition-colors duration-300">
                  myanmarchristianmusicnetwork@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Column 4: Newsletter */}
        {/* <div
          className="scroll-animate opacity-0 translate-y-10"
          style={{ transitionDelay: "300ms" }}
        >
          <h2 className="text-xl font-bold mb-4 bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] bg-clip-text text-transparent animate-gradient">
            Newsletter
          </h2>
          <p className="text-[#E6D28C]/80 mb-3">
            Subscribe for updates on new releases and events.
          </p>
          <div className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-2 rounded-lg bg-black/50 border border-[#E6D28C]/30 text-[#E6D28C] placeholder-[#E6D28C]/50 focus:outline-none focus:border-[#E6D28C] transition-all duration-300"
            />
            <button className="px-4 py-2 bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] text-black rounded-lg text-sm font-bold hover:shadow-[0_0_15px_rgba(230,210,140,0.5)] transition-all duration-300 transform hover:scale-105">
              Subscribe
            </button>
          </div>
        </div> */}

        {/* Divider with gold gradient */}
        <div className="relative z-10">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#E6D28C]/30 to-transparent my-6"></div>
        </div>

        {/* Copyright section */}
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-center py-4 text-sm">
          <div className="text-[#E6D28C]/70 mb-4 md:mb-0 text-center md:text-left">
            <p>© 2025 MCMN-MM.COM. All Rights Reserved.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
            <Link
              to="/faq"
              className="text-[#E6D28C]/70 hover:text-[#D4AF37] transition-colors duration-300"
            >
              FAQ
            </Link>
            <Link
              to="/copyright"
              className="text-[#E6D28C]/70 hover:text-[#D4AF37] transition-colors duration-300"
            >
              Copyright
            </Link>
            <Link
              to="/privacy"
              className="text-[#E6D28C]/70 hover:text-[#D4AF37] transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-[#E6D28C]/70 hover:text-[#D4AF37] transition-colors duration-300"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>

        {/* Animated particles */}
        <div className="absolute bottom-1/4 left-1/4 w-6 h-6 rounded-full bg-gradient-to-br from-[#E6D28C]/20 to-[#D4AF37]/10 animate-float blur-[1px]"></div>
        <div className="absolute top-1/3 right-1/4 w-4 h-4 rounded-full bg-gradient-to-tr from-[#E6D28C]/15 to-[#D4AF37]/5 animate-twinkle blur-[1px]"></div>
        <div
          className="absolute top-2/3 right-1/3 w-5 h-5 rounded-full bg-gradient-to-bl from-[#E6D28C]/20 to-[#D4AF37]/10 animate-float blur-[1px]"
          style={{ animationDelay: "1s" }}
        ></div>
      </footer>

      {/* Add custom styles for scroll animations */}
      <style jsx>{`
        .scroll-animate {
          transition: opacity 1s ease-out, transform 1s ease-out;
        }
        .animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </>
  );
}
