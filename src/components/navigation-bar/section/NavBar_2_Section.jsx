import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../../assets/logo.png";
import { Menu, X } from "lucide-react";

export default function NavBar_2_Section({ scrolled, isVisible }) {
  const [showMenu, setShowMenu] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMobileDropdown, setShowMobileDropdown] = useState(false);

  return (
    <>
      <nav
        className={`transition-all duration-300 flex justify-between items-center padding py-2 font-jetbrains relative z-30
  ${
    scrolled
      ? "bg-black/80 backdrop-blur-md shadow-md"
      : "bg-gradient-to-r from-[#050505] via-[#0a0a0a] to-[#050505]"
  }`}
      >
        {/* Logo - Enhanced Responsive */}
        <div
          className={`text-base sm:text-lg text-[#E6D28C] transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <NavLink to={"/"}>
            <div className="flex justify-center items-center gap-2 sm:gap-3 group hover:scale-105 transition-transform duration-300">
              <img
                src={Logo}
                alt="MCMN Logo"
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-transparent group-hover:border-[#D4AF37]/50 transition-all duration-300"
              />
              <span className="bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] bg-clip-text text-transparent animate-gradient hidden sm:block lg:block">
                Myanmar Christian Music Network
              </span>
              <span className="bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] bg-clip-text text-transparent animate-gradient block sm:hidden text-sm">
                MCMN
              </span>
            </div>
          </NavLink>
        </div>

        <div className="relative">
          {/* Desktop Menu - Enhanced */}
          <ul className="xl:flex hidden items-center gap-6 2xl:gap-10 text-[#E6D28C] text-sm xl:text-base">
            {/* About */}
            <li className="relative group">
              <NavLink
                to={"/about"}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#D4AF37] font-semibold"
                    : "hover:text-[#D4AF37] transition-colors duration-300"
                }
              >
                About
              </NavLink>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
            </li>

            {/* What We Provide - Enhanced Dropdown */}
            <li className="relative group">
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="flex items-center gap-1 text-[#E6D28C] hover:text-[#D4AF37] transition-colors duration-300 focus:outline-none"
              >
                <NavLink
                  to={"/what-we-provide"}
                  className={({ isActive }) =>
                    isActive ? "text-[#D4AF37] font-semibold" : ""
                  }
                >
                  What We Provide
                </NavLink>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  className={`transform transition-transform duration-300 ${
                    showDropdown ? "rotate-180" : ""
                  }`}
                >
                  <path fill="currentColor" d="m12 15l-5-5h10z" />
                </svg>
              </button>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>

              {/* Enhanced Desktop Dropdown Menu */}
              {showDropdown && (
                <>
                  {/* Backdrop for dropdown */}
                  <div 
                    className="fixed inset-0 z-10" 
                    onClick={() => setShowDropdown(false)}
                  />
                  <ul className="absolute top-full left-0 mt-2 bg-black/95 backdrop-blur-md py-3 px-4 rounded-xl min-w-[250px] border border-[#D4AF37]/30 shadow-[0_10px_25px_rgba(0,0,0,0.5)] z-20 transform transition-all duration-300">
                    {/* Music Distribution */}
                    <li className="py-2 hover:translate-x-2 transition-all duration-300">
                      <NavLink
                        to={"/music-distribution"}
                        onClick={() => setShowDropdown(false)}
                        className="hover:text-[#D4AF37] transition-colors duration-300 flex items-center gap-3 p-2 rounded-lg hover:bg-[#D4AF37]/10"
                      >
                        <span className="w-2 h-2 rounded-full bg-[#D4AF37]/70"></span>
                        Music Distribution
                      </NavLink>
                    </li>

                    {/* Cover Song Licence */}
                    <li className="py-2 hover:translate-x-2 transition-all duration-300">
                      <NavLink
                        to={"/cover-song-copyright-licence"}
                        onClick={() => setShowDropdown(false)}
                        className="hover:text-[#D4AF37] transition-colors duration-300 flex items-center gap-3 p-2 rounded-lg hover:bg-[#D4AF37]/10"
                      >
                        <span className="w-2 h-2 rounded-full bg-[#D4AF37]/70"></span>
                        Cover Song Licence
                      </NavLink>
                    </li>

                    {/* Church Licence */}
                    <li className="py-2 hover:translate-x-2 transition-all duration-300">
                      <NavLink
                        to={"/church-copyright-licence"}
                        onClick={() => setShowDropdown(false)}
                        className="hover:text-[#D4AF37] transition-colors duration-300 flex items-center gap-3 p-2 rounded-lg hover:bg-[#D4AF37]/10"
                      >
                        <span className="w-2 h-2 rounded-full bg-[#D4AF37]/70"></span>
                        Church Licence
                      </NavLink>
                    </li>

                    {/* Music School */}
                    <li className="py-2 hover:translate-x-2 transition-all duration-300">
                      <NavLink
                        to={"/music-school"}
                        onClick={() => setShowDropdown(false)}
                        className="hover:text-[#D4AF37] transition-colors duration-300 flex items-center gap-3 p-2 rounded-lg hover:bg-[#D4AF37]/10"
                      >
                        <span className="w-2 h-2 rounded-full bg-[#D4AF37]/70"></span>
                        Music School
                      </NavLink>
                    </li>

                    {/* Create Song */}
                    <li className="py-2 hover:translate-x-2 transition-all duration-300">
                      <NavLink
                        to={"/create-song"}
                        onClick={() => setShowDropdown(false)}
                        className="hover:text-[#D4AF37] transition-colors duration-300 flex items-center gap-3 p-2 rounded-lg hover:bg-[#D4AF37]/10"
                      >
                        <span className="w-2 h-2 rounded-full bg-[#D4AF37]/70"></span>
                        Create Song
                      </NavLink>
                    </li>
                  </ul>
                </>
              )}
            </li>

            {/* Artist */}
            <li className="relative group">
              <NavLink
                to={"/artist"}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#D4AF37] font-semibold"
                    : "hover:text-[#D4AF37] transition-colors duration-300"
                }
              >
                Artist
              </NavLink>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
            </li>

            {/* Song */}
            <li className="relative group">
              <NavLink
                to={"/song"}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#D4AF37] font-semibold"
                    : "hover:text-[#D4AF37] transition-colors duration-300"
                }
              >
                Song
              </NavLink>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
            </li>

            {/* Organization */}
            <li className="relative group">
              <NavLink
                to={"/organization"}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#D4AF37] font-semibold"
                    : "hover:text-[#D4AF37] transition-colors duration-300"
                }
              >
                Organization
              </NavLink>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
            </li>

            {/* Contact */}
            <li className="relative group">
              <NavLink
                to={"/contact"}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#D4AF37] font-semibold"
                    : "hover:text-[#D4AF37] transition-colors duration-300"
                }
              >
                Contact
              </NavLink>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
            </li>
          </ul>

          {/* Enhanced Mobile Menu */}
          {showMenu && (
            <>
              {/* Mobile Menu Backdrop */}
              <div 
                className="xl:hidden fixed inset-0 bg-black/40 backdrop-blur-md z-40 transition-opacity duration-300"
                onClick={() => setShowMenu(false)}
              />
              
              <div className="xl:hidden fixed left-0 right-0 top-[72px] bg-black/95 backdrop-blur-md border-t border-[#D4AF37]/20 shadow-2xl z-50 max-h-[calc(100vh-72px)] overflow-y-auto">
                <div className="padding py-6 space-y-4">
                  {/* About */}
                  <div className="border-b border-[#D4AF37]/10 pb-3">
                    <NavLink
                      to={"/about"}
                      onClick={() => setShowMenu(false)}
                      className={({ isActive }) =>
                        `block py-2 px-3 rounded-lg transition-all duration-300 ${
                          isActive
                            ? "text-[#D4AF37] font-semibold bg-[#D4AF37]/10"
                            : "text-[#E6D28C] hover:text-[#D4AF37] hover:bg-[#D4AF37]/5 hover:translate-x-2"
                        }`
                      }
                    >
                      About
                    </NavLink>
                  </div>

                  {/* What We Provide - Mobile Dropdown */}
                  <div className="border-b border-[#D4AF37]/10 pb-3">
                    <button
                      onClick={() => setShowMobileDropdown(!showMobileDropdown)}
                      className="w-full flex items-center justify-between py-2 px-3 rounded-lg text-[#E6D28C] hover:text-[#D4AF37] hover:bg-[#D4AF37]/5 transition-all duration-300"
                    >
                      <NavLink
                        to={"/what-we-provide"}
                        className={({ isActive }) =>
                          isActive ? "text-[#D4AF37] font-semibold" : ""
                        }
                      >
                        What We Provide
                      </NavLink>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        className={`transform transition-transform duration-300 ${
                          showMobileDropdown ? "rotate-180" : ""
                        }`}
                      >
                        <path fill="currentColor" d="m12 15l-5-5h10z" />
                      </svg>
                    </button>
                    
                    {/* Mobile Submenu */}
                    <div className={`overflow-hidden transition-all duration-300 ${
                      showMobileDropdown ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="ml-4 mt-2 space-y-2 border-l-2 border-[#D4AF37]/20 pl-4">
                        <NavLink
                          to={"/music-distribution"}
                          onClick={() => setShowMenu(false)}
                          className="block py-2 px-3 rounded-lg text-sm text-[#E6D28C] hover:text-[#D4AF37] hover:bg-[#D4AF37]/5 transition-all duration-300 hover:translate-x-1"
                        >
                          Music Distribution
                        </NavLink>
                        <NavLink
                          to={"/cover-song-copyright-licence"}
                          onClick={() => setShowMenu(false)}
                          className="block py-2 px-3 rounded-lg text-sm text-[#E6D28C] hover:text-[#D4AF37] hover:bg-[#D4AF37]/5 transition-all duration-300 hover:translate-x-1"
                        >
                          Cover Song Licence
                        </NavLink>
                        <NavLink
                          to={"/church-copyright-licence"}
                          onClick={() => setShowMenu(false)}
                          className="block py-2 px-3 rounded-lg text-sm text-[#E6D28C] hover:text-[#D4AF37] hover:bg-[#D4AF37]/5 transition-all duration-300 hover:translate-x-1"
                        >
                          Church Licence
                        </NavLink>
                        <NavLink
                          to={"/music-school"}
                          onClick={() => setShowMenu(false)}
                          className="block py-2 px-3 rounded-lg text-sm text-[#E6D28C] hover:text-[#D4AF37] hover:bg-[#D4AF37]/5 transition-all duration-300 hover:translate-x-1"
                        >
                          Music School
                        </NavLink>
                        <NavLink
                          to={"/create-song"}
                          onClick={() => setShowMenu(false)}
                          className="block py-2 px-3 rounded-lg text-sm text-[#E6D28C] hover:text-[#D4AF37] hover:bg-[#D4AF37]/5 transition-all duration-300 hover:translate-x-1"
                        >
                          Create Song
                        </NavLink>
                      </div>
                    </div>
                  </div>

                  {/* Artist */}
                  <div className="border-b border-[#D4AF37]/10 pb-3">
                    <NavLink
                      to={"/artist"}
                      onClick={() => setShowMenu(false)}
                      className={({ isActive }) =>
                        `block py-2 px-3 rounded-lg transition-all duration-300 ${
                          isActive
                            ? "text-[#D4AF37] font-semibold bg-[#D4AF37]/10"
                            : "text-[#E6D28C] hover:text-[#D4AF37] hover:bg-[#D4AF37]/5 hover:translate-x-2"
                        }`
                      }
                    >
                      Artist
                    </NavLink>
                  </div>

                  {/* Song */}
                  <div className="border-b border-[#D4AF37]/10 pb-3">
                    <NavLink
                      to={"/song"}
                      onClick={() => setShowMenu(false)}
                      className={({ isActive }) =>
                        `block py-2 px-3 rounded-lg transition-all duration-300 ${
                          isActive
                            ? "text-[#D4AF37] font-semibold bg-[#D4AF37]/10"
                            : "text-[#E6D28C] hover:text-[#D4AF37] hover:bg-[#D4AF37]/5 hover:translate-x-2"
                        }`
                      }
                    >
                      Song
                    </NavLink>
                  </div>

                  {/* Organization */}
                  <div className="border-b border-[#D4AF37]/10 pb-3">
                    <NavLink
                      to={"/organization"}
                      onClick={() => setShowMenu(false)}
                      className={({ isActive }) =>
                        `block py-2 px-3 rounded-lg transition-all duration-300 ${
                          isActive
                            ? "text-[#D4AF37] font-semibold bg-[#D4AF37]/10"
                            : "text-[#E6D28C] hover:text-[#D4AF37] hover:bg-[#D4AF37]/5 hover:translate-x-2"
                        }`
                      }
                    >
                      Organization
                    </NavLink>
                  </div>

                  {/* Contact */}
                  <div>
                    <NavLink
                      to={"/contact"}
                      onClick={() => setShowMenu(false)}
                      className={({ isActive }) =>
                        `block py-2 px-3 rounded-lg transition-all duration-300 ${
                          isActive
                            ? "text-[#D4AF37] font-semibold bg-[#D4AF37]/10"
                            : "text-[#E6D28C] hover:text-[#D4AF37] hover:bg-[#D4AF37]/5 hover:translate-x-2"
                        }`
                      }
                    >
                      Contact
                    </NavLink>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Enhanced Menu Icon */}
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="xl:hidden flex items-center justify-center w-10 h-10 rounded-lg text-[#E6D28C] hover:text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50"
            aria-label="Toggle navigation menu"
          >
            {showMenu ? (
              <X
                size={24}
                className="animate-pulse"
              />
            ) : (
              <Menu
                size={24}
                className="hover:scale-110 transition-transform duration-300"
              />
            )}
          </button>
        </div>
      </nav>
    </>
  );
}
