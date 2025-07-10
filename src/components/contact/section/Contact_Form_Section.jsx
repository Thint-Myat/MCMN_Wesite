import React, { useState } from "react";

export default function Contact_Form_Section() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };
  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <div className="w-full lg:w-2/3 p-6 md:p-8 bg-[#111] rounded-lg shadow-[0_0_15px_rgba(230,210,140,0.15)] border border-[#E6D28C]/20 hover:shadow-[0_0_20px_rgba(230,210,140,0.3)] transition-all duration-500 transform hover:-translate-y-1">
        <h3 className="text-xl font-semibold mb-6 text-[#E6D28C] border-b border-[#E6D28C]/30 pb-2">
          Send Us a Message
        </h3>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="w-full md:w-1/2 relative">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                className="w-full p-3 rounded-md border border-[#E6D28C]/30 bg-black/50 text-[#E6D28C] placeholder-[#E6D28C]/50 focus:outline-none focus:ring-2 focus:ring-[#E6D28C]/50 focus:border-transparent transition-all duration-300"
              />
            </div>
            <div className="w-full md:w-1/2 relative">
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                className="w-full p-3 rounded-md border border-[#E6D28C]/30 bg-black/50 text-[#E6D28C] placeholder-[#E6D28C]/50 focus:outline-none focus:ring-2 focus:ring-[#E6D28C]/50 focus:border-transparent transition-all duration-300"
              />
            </div>
          </div>

          <div className="mb-4 relative">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full p-3 rounded-md border border-[#E6D28C]/30 bg-black/50 text-[#E6D28C] placeholder-[#E6D28C]/50 focus:outline-none focus:ring-2 focus:ring-[#E6D28C]/50 focus:border-transparent transition-all duration-300"
            />
          </div>

          <div className="mb-6 relative">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              rows="4"
              className="w-full p-3 rounded-md border border-[#E6D28C]/30 bg-black/50 text-[#E6D28C] placeholder-[#E6D28C]/50 focus:outline-none focus:ring-2 focus:ring-[#E6D28C]/50 focus:border-transparent transition-all duration-300 resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-[#E6D28C] to-[#D4AF37] text-black rounded-full text-base font-jetbrains font-bold hover:from-[#D4AF37] hover:to-[#E6D28C] transition-all duration-300 transform hover:scale-[1.02] hover:shadow-[0_0_15px_rgba(230,210,140,0.5)]"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
