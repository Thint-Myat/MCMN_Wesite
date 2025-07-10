import React, { useState } from "react";
// modal
import Instructors_Modal from "../modal/Instructors_Modal";
// images
import Phyo_Titus from "../../../assets/music-school/instructors/Phyo_Titus.jpg";
import Simon_Wah from "../../../assets/music-school/instructors/Simon_Wah.jpg";
import Shalom from "../../../assets/music-school/instructors/Shalom.jpg";
import M_Zaw_Rain from "../../../assets/music-school/instructors/M_Zaw_Rain.jpg";
import Htoo_Lay from "../../../assets/music-school/instructors/Htoo_Lay.jpg";
import Phillip from "../../../assets/music-school/instructors/Phillip.jpg";
import Yang_Man_Man from "../../../assets/music-school/instructors/Yang_Man_Man.jpg";
import June_Nine from "../../../assets/music-school/instructors/June_Nine.jpg";
import Purity from "../../../assets/music-school/instructors/Purity.jpg";
import Samson from "../../../assets/music-school/instructors/Samson.jpg";
import John_Thang_Lian from "../../../assets/music-school/instructors/John_Thang_Lian.jpg";
import Patrick from "../../../assets/music-school/instructors/Patrick.jpg";
import Victor_and_Eh_Nyaw from "../../../assets/music-school/instructors/Victor_&_Eh_Nyaw.jpg";

const instructors = [
  // Phyo Titus
  {
    id: 1,
    name: "Phyo Titus",
    title: "Bass Instructor",
    bio: "15+ years of experience teaching classical and contemporary piano techniques.",
    classes: [
      {
        id: 1,
        name: "Bass Class",
        class: "On-Site Class",
        schedule: [
          {
            day: "Monday",
            time: "5:00 PM - 6:00 PM",
          },
          {
            day: "Tuesday",
            time: "5:00 PM - 6:00 PM",
          },
          {
            day: "Thursday",
            time: "5:00 PM - 6:00 PM",
          },
          {
            day: "Friday",
            time: "5:00 PM - 6:00 PM",
          },
        ],
      },
    ],
    image: Phyo_Titus,
  },
  // Simon Wah
  {
    id: 2,
    name: "Simon Wah",
    title: "Drum Instructor",
    bio: "Professional vocalist with expertise in multiple genres and vocal techniques.",
    classes: [
      {
        id: 1,
        name: "Drum Class",
        class: "On-Site Class",
        schedule: [
          {
            day: "Tuesday",
            time: [
              {
                time_1: "1:00 PM - 2:00 PM",
              },
              {
                time_2: "2:00 PM - 3:00 PM",
              },
            ],
          },
          {
            day: "Saturday",
            time: [
              {
                time_1: "11:00 AM - 12:00 PM",
              },
              {
                time_2: "12:00 PM - 1:00 PM",
              },
            ],
          },
        ],
      },
    ],
    image: Simon_Wah,
  },
  // Shalom
  {
    id: 3,
    name: "Shalom",
    title: "Piano Instructor",
    classes: [
      {
        id: 1,
        name: "Piano Class",
        class: "On-Site Class",
        schedule: [
          {
            day: "Tuesday",
            time: [
              {
                time_1: "5:00 PM - 6:00 PM",
              },
              {
                time_2: "6:00 PM - 7:00 PM",
              },
            ],
          },
          {
            day: "Wednesday",
            time: [
              {
                time_1: "5:00 PM - 6:00 PM",
              },
              {
                time_2: "6:00 PM - 7:00 PM",
              },
            ],
          },
          {
            day: "Friday",
            time: [
              {
                time_1: "5:00 PM - 6:00 PM",
              },
              {
                time_2: "6:00 PM - 7:00 PM",
              },
            ],
          },
          {
            day: "Saturday",
            time: [
              {
                time_1: "9:00 AM - 10:00 AM",
              },
              {
                time_2: "10:00 AM - 11:00 AM",
              },
            ],
          },
        ],
      },
    ],
    image: Shalom,
  },
  // M Zaw Rain
  {
    id: 4,
    name: "M Zaw Rain",
    title: "Vocal Instructor",
    bio: "Versatile guitarist specializing in acoustic, electric, and bass guitar instruction.",
    classes: [
      {
        id: 1,
        name: "Vocal Class",
        class: "On-Site Class",
        schedule: [
          {
            day: "Monday",
            time: [
              {
                time_1: "9:00 AM - 10:00 AM",
              },
              {
                time_2: "10:00 AM - 11:00 AM",
              },
              {
                time_3: "1:00 PM - 2:00 PM",
              },
              {
                time_4: "2:00 PM - 3:00 PM",
              },
            ],
          },
          {
            day: "Friday",
            time: [
              {
                time_1: "9:00 AM - 10:00 AM",
              },
              {
                time_2: "10:00 AM - 11:00 AM",
              },
            ],
          },
          {
            day: "Saturday",
            time: [
              {
                time_1: "9:00 AM - 10:00 AM",
              },
              {
                time_2: "10:00 AM - 11:00 AM",
              },
            ],
          },
        ],
      },
    ],
    image: M_Zaw_Rain,
  },
  // Htoo Lay
  {
    id: 5,
    name: "Htoo Lay",
    title: "Violin Instructor",
    bio: "Classically trained violinist with experience teaching students of all ages and levels.",
    classes: [
      {
        id: 1,
        name: "Violin Class",
        class: "On-Site Class",
        schedule: [
          {
            day: "Monday",
            time: [
              {
                time_1: "11:00 AM - 12:00 PM",
              },
              {
                time_2: "1:00 PM - 2:00 PM",
              },
            ],
          },
          {
            day: "Wednesday",
            time: [
              {
                time_1: "11:00 AM - 12:00 PM",
              },
              {
                time_2: "1:00 PM - 2:00 PM",
              },
            ],
          },
        ],
      },
    ],
    image: Htoo_Lay,
  },
  // Phillip
  {
    id: 6,
    name: "Phillip",
    title: "Acoustic Guitar & Electric Guitar & Ukulele Instructor",
    classes: [
      {
        id: 1,
        name: "Acoustic Guitar",
        class: "On-Site Class",
        schedule: [
          {
            day: "Monday",
            time: "9:00 AM - 10:00 AM",
          },
          {
            day: "Wednesday",
            time: "9:00 AM - 10:00 AM",
          },
        ],
      },
      {
        id: 2,
        name: "Ukulele",
        class: "On-Site Class",
        schedule: [
          {
            day: "Monday",
            time: "11:00 AM - 12:00 PM",
          },
          {
            day: "Wednesday",
            time: "11:00 AM - 12:00 PM",
          },
        ],
      },
      {
        id: 3,
        name: "Electric Guitar",
        class: "On-Site Class",
        schedule: [
          {
            day: "Monday",
            time: "1:00 PM - 2:00 PM",
          },
          {
            day: "Wednesday",
            time: "1:00 PM - 2:00 PM",
          },
        ],
      },
    ],
    image: Phillip,
  },
  // Yang Man Man
  {
    id: 7,
    name: "Yang Man Man",
    title: "Piano & Music Theory Instructor",
    classes: [
      {
        id: 1,
        name: "Piano Class",
        class: "On-Site Class",
        schedule: [
          {
            day: "Monday",
            time: "4:00 PM - 5:00 PM",
          },
          {
            day: "Tuesday",
            time: "10:00 AM - 11:00 AM",
          },
          {
            day: "Wednesday",
            time: [
              {
                time_1: "10:00 AM - 11:00 AM",
              },
              {
                time_2: "4:00 PM - 5:00 PM",
              },
            ],
          },
        ],
      },
      {
        id: 2,
        name: "Music Theory",
        class: "On-Site Class",
        schedule: [
          {
            day: "Thursday",
            time: "10:00 AM - 11:00 AM",
          },
          {
            day: "Friday",
            time: "10:00 AM - 11:00 AM",
          },
        ],
      },
      {
        id: 3,
        name: "Music Theory",
        class: "Online Class",
        schedule: [
          {
            day: "Monday",
            time: "11:00 AM - 12:00 PM",
          },
          {
            day: "Wednesday",
            time: "8:00 PM - 9:00 PM",
          },
        ],
      },
    ],
    image: Yang_Man_Man,
  },
  // June Nine
  {
    id: 8,
    name: "June Nine",
    title: "Violin Instructor",
    classes: [
      {
        id: 1,
        name: "Violin Class",
        class: "Online Class",
        schedule: [
          {
            day: "Monday",
            time: [
              {
                time_1: "9:30 AM - 10:30 AM",
              },
              {
                time_2: "4:30 PM - 5:30 PM",
              },
            ],
          },
          {
            day: "Thursday",
            time: [
              {
                time_1: "9:30 AM - 10:30 AM",
              },
              {
                time_2: "4:30 PM - 5:30 PM",
              },
            ],
          },
        ],
      },
    ],
    image: June_Nine,
  },
  // Purity
  {
    id: 9,
    name: "Purity",
    title: "Vocal Instructor",
    classes: [
      {
        id: 1,
        name: "Vocal Class",
        class: "Online Class",
        schedule: [
          {
            day: "Tuesday ( Vocal Basic )",
            time: [
              {
                time_1: "10:00 AM - 12:00 PM",
              },
              {
                time_2: "6:00 PM - 8:00 PM",
              },
            ],
          },
          {
            day: "Thursday ( Vocal Basic )",
            time: [
              {
                time_1: "10:00 AM - 12:00 PM",
              },
              {
                time_2: "6:00 PM - 8:00 PM",
              },
            ],
          },
          {
            day: "Friday ( Vocal Harmony )",
            time: "6:00 PM - 8:00 PM",
          },
        ],
      },
    ],
    image: Purity,
  },
  // Samson
  {
    id: 10,
    name: "Samson",
    title: "Acoustic Guitar Instructor",
    classes: [
      {
        id: 1,
        name: "Acoustic Guitar",
        class: "Online Class",
        schedule: [
          {
            day: "Tuesday",
            time: [
              {
                time_1: "9:00 AM - 10:00 AM",
              },
              {
                time_2: "5:00 PM - 6:00 PM",
              },
            ],
          },
          {
            day: "Wednesday",
            time: "9:00 AM - 10:00 AM",
          },
          {
            day: "Thursday",
            time: "5:00 PM - 6:00 PM",
          },
        ],
      },
    ],
    image: Samson,
  },
  // John Thang Lian
  {
    id: 11,
    name: "John Thang Lian",
    title: "Ukulele Instructor",
    classes: [
      {
        id: 1,
        name: "Ukulele Class",
        class: "Online Class",
        schedule: [
          {
            day: "Monday",
            time: "7:00 PM - 8:00 PM",
          },
          {
            day: "Thursday",
            time: "7:00 PM - 8:00 PM",
          },
        ],
      },
    ],
    image: John_Thang_Lian,
  },
  // Patrick
  {
    id: 12,
    name: "Patrick",
    title: "Bass Instructor",
    classes: [
      {
        id: 1,
        name: "Bass Class",
        class: "Online Class",
        schedule: [
          {
            day: "Monday",
            time: "7:00 PM - 8:00 PM",
          },
          {
            day: "Wednesday",
            time: "7:00 PM - 8:00 PM",
          },
        ],
      },
    ],
    image: Patrick,
  },
  // Victor & Eh Nyaw
  {
    id: 13,
    name: "Victor & Eh Nyaw",
    title: "Piano Instructor",
    classes: [
      {
        id: 1,
        name: "Piano Class",
        class: "Online Class",
        schedule: [
          {
            day: "Tuesday",
            time: [
              {
                time_1: "5:00 PM - 6:00 PM",
              },
              {
                time_2: "6:00 PM - 7:00 PM",
              },
            ],
          },
          {
            day: "Wednesday",
            time: [
              {
                time_1: "7:00 AM - 8:00 AM",
              },
              {
                time_2: "9:00 AM - 10:00 AM",
              },
              {
                time_3: "5:00 PM - 6:00 PM",
              },
              {
                time_4: "6:00 PM - 7:00 PM",
              },
            ],
          },
          {
            day: "Friday",
            time: [
              {
                time_1: "7:00 AM - 8:00 AM",
              },
              {
                time_2: "9:00 AM - 10:00 AM",
              },
            ],
          },
        ],
      },
    ],
    image: Victor_and_Eh_Nyaw,
  },
];

export default function Our_Instructors_Section() {
  const [selectedInstructor, setSelectedInstructor] = useState(null);

  const handleInstructorClick = (instructor) => {
    setSelectedInstructor(instructor);
  };

  return (
    <>
      <div className="scroll-animate opacity-0 translate-y-10">
        <div className="bg-gradient-to-b from-[#1A2151] via-[#1A2151] to-[#141937] rounded-3xl p-5 sm:p-8 border border-[#E6D28C]/20 shadow-[0_0_10px_rgba(230,210,140,0.15)] transition-all duration-500">
          <div className="border-[#E6D28C] border-t-2">
            {/* Hero Section */}
            <div className="m-5 flex flex-col items-center text-center">
              <p className="text-[#E6D28C] font-jetbrains tracking-wider drop-shadow-md">
                MEET OUR TEAM
              </p>
              <h1 className="text-white text-2xl sm:text-3xl pt-2 font-jetbrains font-bold bg-gradient-to-r from-[#E6D28C] to-[#F0E6B8] bg-clip-text text-transparent drop-shadow-lg">
                Learn from the best musicians in Myanmar
              </h1>
              <p className="text-gray-300 mt-3 max-w-3xl font-jetbrains">
                Our instructors are accomplished musicians with years of
                performance and teaching experience. They are passionate about
                sharing their knowledge and helping students achieve their
                musical goals.
              </p>
            </div>

            {/* Instructors */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
              {instructors.length &&
                instructors.map((instructor, index) => (
                  <div
                    key={index}
                    onClick={() => handleInstructorClick(instructor)}
                    className="bg-gradient-to-b from-[#1A2151] to-[#141937] rounded-3xl p-6 flex flex-col items-center text-center group hover:scale-105 transition-all duration-300 border border-[#E6D28C]/20 hover:border-[#E6D28C]/50 hover:shadow-lg hover:shadow-[#E6D28C]/10 cursor-pointer"
                  >
                    {/* Profie Picture */}
                    <div className="w-32 h-32 rounded-full bg-gradient-to-r from-[#E6D28C] to-[#F0E6B8] p-1 mb-4">
                      <div className="w-full h-full rounded-full bg-[#1A2151] flex items-center justify-center overflow-hidden">
                        {instructor.image ? (
                          <img
                            src={instructor.image}
                            alt={instructor.name || "Instructor"}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-16 w-16 text-[#E6D28C]"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4" />
                          </svg>
                        )}
                      </div>
                    </div>
                    {/* Name */}
                    <h1 className="text-white text-xl font-jetbrains font-semibold group-hover:text-[#E6D28C] transition-colors duration-300">
                      {instructor.name}
                    </h1>
                    {/* Title */}
                    <p className="text-[#E6D28C] mt-1 font-jetbrains text-sm">
                      {instructor.title}
                    </p>
                    {/* Bio */}
                    <p className="text-gray-300 mt-3 font-jetbrains text-sm">
                      {instructor.bio}
                    </p>
                    {/* Social Media */}
                    <div className="flex space-x-3 mt-4">
                      <button className="text-[#E6D28C] hover:text-white transition-colors duration-300">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                        </svg>
                      </button>
                      <button className="text-[#E6D28C] hover:text-white transition-colors duration-300">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                        </svg>
                      </button>
                      <button className="text-[#E6D28C] hover:text-white transition-colors duration-300">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
            </div>

            {/* View All Instructors Button */}
            {/* <div className="flex justify-center mt-8 mb-4">
              <button className="bg-gradient-to-r from-[#E6D28C] to-[#F0E6B8] text-[#1A2151] rounded-full px-6 py-2 font-jetbrains font-semibold hover:shadow-lg hover:shadow-[#E6D28C]/20 hover:translate-y-[-2px] transition-all duration-300">
                View All Instructors
              </button>
            </div> */}
          </div>
        </div>
      </div>

      {/* Instructors Modal - only render when an instructor is selected */}
      {selectedInstructor && (
        <Instructors_Modal
          selectedInstructor={selectedInstructor}
          closeModal={() => setSelectedInstructor(null)}
        />
      )}
    </>
  );
}
