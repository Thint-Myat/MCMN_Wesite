import React from "react";

const platforms = [
  {
    id: 1,
    name: "Spotify",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2.5em"
        height="2.5em"
        viewBox="0 0 24 24"
        className="text-[#1DB954] group-hover:text-[#1ED760] transition-colors duration-300"
      >
        <path
          fill="currentColor"
          d="M17.9 10.9C14.7 9 9.35 8.8 6.3 9.75c-.5.15-1-.15-1.15-.6c-.15-.5.15-1 .6-1.15c3.55-1.05 9.4-.85 13.1 1.35c.45.25.6.85.35 1.3c-.25.35-.85.5-1.3.25m-.1 2.8c-.25.35-.7.5-1.05.25c-2.7-1.65-6.8-2.15-9.95-1.15c-.4.1-.85-.1-.95-.5s.1-.85.5-.95c3.65-1.1 8.15-.55 11.25 1.35c.3.15.45.65.2 1m-1.2 2.75c-.2.3-.55.4-.85.2c-2.35-1.45-5.3-1.75-8.8-.95c-.35.1-.65-.15-.75-.45c-.1-.35.15-.65.45-.75c3.8-.85 7.1-.5 9.7 1.1c.35.15.4.55.25.85M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2"
        />
      </svg>
    ),
    description: "The world's most popular audio streaming platform",
  },
  {
    id: 2,
    name: "Apple Music",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2.5em"
        height="2.5em"
        viewBox="0 0 24 24"
        className="text-[#FA243C] group-hover:text-[#FF3B30] transition-colors duration-300"
      >
        <path
          fill="currentColor"
          d="M23.994 6.124a9.23 9.23 0 0 0-.24-2.19c-.317-1.31-1.062-2.31-2.18-3.043a5.022 5.022 0 0 0-1.877-.726a10.496 10.496 0 0 0-1.564-.15c-.04-.003-.083-.01-.124-.013H5.986c-.152.01-.303.017-.455.026c-.747.043-1.49.123-2.193.4c-1.336.53-2.3 1.452-2.865 2.78c-.192.448-.292.925-.363 1.408a10.61 10.61 0 0 0-.1 1.18c0 .032-.007.062-.01.093v12.223c.01.14.017.283.027.424c.05.815.154 1.624.497 2.373c.65 1.42 1.738 2.353 3.234 2.801c.42.127.856.187 1.293.228c.555.053 1.11.06 1.667.06h11.03a12.5 12.5 0 0 0 1.57-.084c.822-.1 1.593-.309 2.266-.844c1.357-1.08 2.109-2.37 2.116-4.077V8.513c0-.118-.01-.237-.012-.356zm-11.99 14.602c-.796 0-1.575-.044-2.352-.128c-.35-.038-.7-.085-1.046-.157c-1.124-.233-1.457-.492-1.463-1.482c-.004-.466-.004-.932-.004-1.398c0-.72.006-1.441.01-2.162c.002-.26.01-.526.018-.785c.028-.774.748-1.339 1.472-1.388c.94-.064 1.885-.066 2.826-.004c.74.048 1.465.61 1.488 1.414c.01.357.01.715.012 1.072c.004.783.004 1.566.004 2.35c0 .658-.004 1.316-.008 1.973c-.006.873-.336 1.387-1.202 1.578c-.238.053-.483.08-.726.107c-.345.036-.69.053-1.03.01zm8.882-6.804c-.024-.604-.056-1.208-.07-1.812c-.024-1.115-.03-2.23-.044-3.346c-.008-.478-.022-.956-.058-1.432c-.063-.856-.25-1.695-.644-2.45c-.636-1.23-1.624-2.008-2.958-2.33c-.67-.16-1.354-.205-2.042-.22c-1.1-.02-2.2-.017-3.3-.03c-.58-.006-1.162-.01-1.742-.03c-.74-.025-1.484-.047-2.22-.102c-1.218-.09-2.1-.67-2.59-1.747c-.275-.608-.415-1.25-.452-1.914c-.06-1.06-.035-2.123-.035-3.184c0-.76.01-1.52.014-2.279c.004-.777.01-1.554.012-2.33c0-.25-.004-.5-.014-.75c-.025-.487-.082-.97-.216-1.44c-.067-.24-.152-.47-.253-.7c-.1.23-.185.46-.253.7c-.134.47-.19.953-.217 1.44c-.01.25-.014.5-.014.75c.002.777.008 1.554.012 2.33c.004.76.014 1.52.014 2.28c0 1.06.025 2.122-.035 3.183c-.037.664-.177 1.306-.452 1.914c-.49 1.076-1.372 1.657-2.59 1.747c-.736.055-1.48.077-2.22.102c-.58.02-1.162.024-1.742.03c-1.1.013-2.2.01-3.3.03c-.688.015-1.372.06-2.042.22c-1.334.322-2.322 1.1-2.958 2.33c-.394.755-.58 1.594-.644 2.45c-.036.476-.05.954-.058 1.432c-.014 1.115-.02 2.23-.044 3.346c-.014.604-.046 1.208-.07 1.812c-.03.762-.06 1.525-.118 2.285c-.142 1.847-.893 3.304-2.524 4.298c-.652.396-1.364.665-2.114.837c-.05.012-.097.03-.147.044c.052.014.1.032.15.044c.75.172 1.462.44 2.114.837c1.63.994 2.382 2.45 2.524 4.298c.058.76.088 1.523.118 2.285c.024.604.056 1.208.07 1.812c.024 1.115.03 2.23.044 3.346c.008.478.022.956.058 1.432c.063.856.25 1.695.644 2.45c.636 1.23 1.624 2.008 2.958 2.33c.67.16 1.354.205 2.042.22c1.1.02 2.2.017 3.3.03c.58.006 1.162.01 1.742.03c.74.025 1.484.047 2.22.102c1.218.09 2.1.67 2.59 1.747c.275.608.415 1.25.452 1.914c.06 1.06.035 2.123.035 3.184c0 .76-.01 1.52-.014 2.279c-.004.777-.01 1.554-.012 2.33c0 .25.004.5.014.75c.025.487.082.97.216 1.44c.067.24.152.47.253.7c.1-.23.185-.46.253-.7c.134-.47.19-.953.217-1.44c.01-.25.014-.5.014-.75c-.002-.777-.008-1.554-.012-2.33c-.004-.76-.014-1.52-.014-2.28c0-1.06-.025-2.122.035-3.183c.037-.664.177-1.306.452-1.914c.49-1.076 1.372-1.657 2.59-1.747c.736-.055 1.48-.077 2.22-.102c.58-.02 1.162-.024 1.742-.03c1.1-.013 2.2-.01 3.3-.03c.688-.015 1.372-.06 2.042-.22c1.334-.322 2.322-1.1 2.958-2.33c.394-.755.58-1.594.644-2.45c.036-.476.05-.954.058-1.432c.014-1.115.02-2.23.044-3.346c.014-.604.046-1.208.07-1.812c.03-.762.06-1.525.118-2.285c.142-1.847.893-3.304 2.524-4.298c.652-.396 1.364-.665 2.114-.837c.05-.012.097-.03.147-.044c-.052-.014-.1-.032-.15-.044c-.75-.172-1.462-.44-2.114-.837c-1.63-.994-2.382-2.45-2.524-4.298c-.058-.76-.088-1.523-.118-2.285z"
        />
      </svg>
    ),
    description: "Apple's premium music streaming service",
  },
  {
    id: 3,
    name: "YouTube Music",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2.5em"
        height="2.5em"
        viewBox="0 0 24 24"
        className="text-[#FF0000] group-hover:text-[#FF3333] transition-colors duration-300"
      >
        <path
          fill="currentColor"
          d="m10 15l5.19-3L10 9zm11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73"
        />
      </svg>
    ),
    description: "YouTube's dedicated music streaming platform",
  },
  {
    id: 4,
    name: "Amazon Music",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2.5em"
        height="2.5em"
        viewBox="0 0 24 24"
        className="text-[#00A8E1] group-hover:text-[#00B9F2] transition-colors duration-300"
      >
        <path
          fill="currentColor"
          d="M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8s8-3.59 8-8s-3.59-8-8-8m0 14.5c-3.59 0-6.5-2.91-6.5-6.5S8.41 5.5 12 5.5s6.5 2.91 6.5 6.5s-2.91 6.5-6.5 6.5m0-11.5A5 5 0 0 0 7 12a5 5 0 0 0 5 5a5 5 0 0 0 5-5a5 5 0 0 0-5-5m0 8c-1.66 0-3-1.34-3-3s1.34-3 3-3s3 1.34 3 3s-1.34 3-3 3m-2.5-3c0 .83.42 1.57 1.06 2l-.6 1.04l1.72 1l.58-1c.11.01.23.02.35.02L13.2 14l1.72-1l-.6-1.04c.64-.44 1.06-1.17 1.06-2c0-1.38-1.12-2.5-2.5-2.5s-2.5 1.12-2.5 2.5z"
        />
      </svg>
    ),
    description: "Amazon's music streaming service",
  },
  {
    id: 5,
    name: "Deezer",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2.5em"
        height="2.5em"
        viewBox="0 0 24 24"
        className="text-[#00C7F2] group-hover:text-[#00D8FF] transition-colors duration-300"
      >
        <path
          fill="currentColor"
          d="M18.81 4.16v3.03H24V4.16m-5.19 3.58v3.03H24V7.74M18.81 11.32v3.03H24v-3.03m-5.19 3.58v3.03H24v-3.03m-5.19 3.58v3.03H24v-3.03M0 4.16v3.03h5.19V4.16m0 3.58v3.03h5.19V7.74M0 11.32v3.03h5.19v-3.03m0 3.58v3.03h5.19v-3.03m0 3.58v3.03h5.19v-3.03m5.19-14.32v3.03h5.19V4.16m-5.19 3.58v3.03h5.19V7.74m-5.19 3.58v3.03h5.19v-3.03m-5.19 3.58v3.03h5.19v-3.03m-5.19 3.58v3.03h5.19v-3.03"
        />
      </svg>
    ),
    description: "French online music streaming service",
  },
  {
    id: 6,
    name: "Tidal",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2.5em"
        height="2.5em"
        viewBox="0 0 24 24"
        className="text-[#000000] group-hover:text-[#333333] transition-colors duration-300"
      >
        <path
          fill="currentColor"
          d="M12.012 3.992L8.008 7.996L4.004 3.992L0 7.996l4.004 4.004l4.004-4.004l4.004 4.004l-4.004 4.004l4.004 4.004l4.004-4.004l4.004 4.004l4.004-4.004l-4.004-4.004l4.004-4.004l-4.004-4.004l-4.004 4.004z"
        />
      </svg>
    ),
    description: "High-fidelity music streaming platform",
  },
  {
    id: 7,
    name: "Pandora",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2.5em"
        height="2.5em"
        viewBox="0 0 24 24"
        className="text-[#00A0EE] group-hover:text-[#00B1FF] transition-colors duration-300"
      >
        <path
          fill="currentColor"
          d="M13.576 17.271l-5.11-2.787a3.67 3.67 0 0 1-1.852-4.508l2.354-6.962c.685-2.029 2.85-3.051 4.823-2.283l5.11 2.787a3.67 3.67 0 0 1 1.852 4.508l-2.354 6.962c-.686 2.029-2.85 3.052-4.823 2.283"
        />
      </svg>
    ),
    description: "Automated music recommendation service",
  },
  {
    id: 8,
    name: "SoundCloud",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2.5em"
        height="2.5em"
        viewBox="0 0 24 24"
        className="text-[#FF7700] group-hover:text-[#FF8800] transition-colors duration-300"
      >
        <path
          fill="currentColor"
          d="M11.56 8.87V17h8.76c1.85-.13 2.68-1.27 2.68-2.67c0-1.48-1.12-2.67-2.62-2.67c-.38 0-.7.08-1.03.22c-.25-2.84-2.66-5.07-5.56-5.07c-.75 0-1.5.17-2.23.5M8.92 17h1.14V9.49c-.32-.09-.64-.15-.99-.15c-.79 0-1.66.35-2.28.93c-.63.59-.99 1.43-.99 2.51V17h1.23v-4.22c0-.99.62-1.79 1.61-1.79c.4 0 .8.16 1.28.49zM5.5 17h1.23v-6.8c-.46-.39-1-.59-1.53-.59c-.21 0-.42.03-.63.08V17m-1.35 0h1.1v-7.06c-.51-.19-1-.27-1.5-.03V17m-2.4 0h1.05v-5.84c-.28.06-.57.17-.85.33V17M0 17h.85v-4.89c-.28.17-.56.38-.85.63z"
        />
      </svg>
    ),
    description: "Online audio distribution platform",
  },
];

export default function Platforms_Section() {
  return (
    <>
      <div className="mt-12 scroll-animate opacity-0 translate-y-10 transition-all duration-1000">
        <div className="bg-[#111] rounded-3xl border border-[#E6D28C]/10 shadow-[0_0_15px_rgba(230,210,140,0.1)] overflow-hidden p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] bg-clip-text text-transparent animate-gradient">
            Distribution Platforms
          </h2>
          <p className="text-[#E6D28C]/80 text-center max-w-3xl mx-auto mb-10 leading-relaxed">
            သင့်သီချင်းများကို အောက်ပါ Digital Music Platforms များပေါ်သို့ ဖြန့်ဖြူးပေးပါမည်
          </p>

          {/* Platforms Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {platforms.map((platform) => (
              <div
                key={platform.id}
                className="bg-black rounded-xl overflow-hidden border border-[#E6D28C]/20 hover:border-[#E6D28C]/50 hover:shadow-[0_0_15px_rgba(230,210,140,0.2)] transition-all duration-300 transform hover:-translate-y-1 p-6 group"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-[#E6D28C]/5 flex items-center justify-center group-hover:bg-[#E6D28C]/10 transition-all duration-300">
                    {platform.icon}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-[#E6D28C] text-center mb-2">
                  {platform.name}
                </h3>
                <p className="text-[#E6D28C]/70 text-center text-sm leading-relaxed">
                  {platform.description}
                </p>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-12 bg-black/50 rounded-xl p-6 border border-[#E6D28C]/20 max-w-3xl mx-auto">
            <h3 className="text-xl font-bold text-[#E6D28C] mb-4 text-center">
              150+ Platforms Worldwide
            </h3>
            <p className="text-[#E6D28C]/80 text-center">
              အထက်ပါ platforms များအပြင် နောက်ထပ် digital music platforms ပေါင်း ၁၅၀ ကျော်ပေါ်သို့ သင့်သီချင်းများကို ဖြန့်ဖြူးပေးပါမည်
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
