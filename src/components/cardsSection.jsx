import React from "react";
import { FaCalendarCheck, FaPhoneAlt, FaUserMd } from "react-icons/fa";
import { MdMedicalServices } from "react-icons/md";
import { useNavigate } from "react-router-dom";

// Stylish Headline Component
const SectionHeadline = () => {
  return (
    <div className="text-center mb-12">
      {/* Main Heading with Gradient Text */}
      <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent animate-gradient">
        Our Services
      </h2>

      {/* Subtitle */}
      <p className="text-lg text-gray-600 mt-3">
        Quality healthcare services tailored to your needs
      </p>

      {/* Decorative Underline */}
      <div className="w-20 h-1.5 bg-teal-500 mx-auto mt-4 rounded-full animate-underline"></div>
    </div>
  );
};

// Card Component
const Card = ({ icon, title, description, buttonText, buttonColor, phone, onClick }) => {
  return (
    <div
      className="bg-white rounded-lg p-6 text-center flex flex-col items-center transition-all transform hover:-translate-y-2 hover:shadow-lg cursor-pointer border border-gray-200"
      onClick={onClick} // ✅ Click the entire card to navigate
    >
      <div className="text-teal-600 text-4xl mb-6">{icon}</div>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>
      <p className="text-gray-600 text-sm mb-6">{description}</p>
      {phone && (
        <p className="text-gray-800 font-semibold mb-4 flex items-center gap-2">
          <FaPhoneAlt className="text-red-500" /> {phone}
        </p>
      )}
      <button
        className={`text-white font-semibold py-2 px-6 rounded-full ${buttonColor} hover:opacity-90 transition-opacity`}
      >
        {buttonText}
      </button>
    </div>
  );
};

// Main Section Component
export default function CardsSection() {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
    window.scrollTo(0, 0); // ✅ Scrolls to the top of the page after navigation
  };

  return (
    <section className="pt-[2.8rem] pb-16 bg-gray-50"> {/* Reduced top padding to 70% */}
      <div className="container mx-auto px-6">
        {/* Stylish Headline */}
        <SectionHeadline />

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card
            icon={<FaCalendarCheck />}
            title="Online Appointment"
            description="Easily book your medical appointments online."
            buttonText="Schedule Now"
            buttonColor="bg-teal-600"
            onClick={() => handleNavigate("/appointment")} // ✅ Scrolls to top after navigation
          />
          <Card
            icon={<MdMedicalServices />}
            title="Emergency Case"
            description="Malesuada ultricies curabitur."
            phone="+48 102 103 104"
            buttonText="Contact Us"
            buttonColor="bg-cyan-600"
          />
          <Card
            icon={<FaUserMd />}
            title="Our Doctors"
            description="Meet our highly qualified and experienced doctors."
            buttonText="Meet the Team"
            buttonColor="bg-cyan-400"
          />
        </div>
      </div>
    </section>
  );
}