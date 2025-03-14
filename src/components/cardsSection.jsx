import React from "react";
import { FaCalendarCheck, FaPhoneAlt, FaUserMd } from "react-icons/fa";
import { MdMedicalServices } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Card = ({ icon, title, description, buttonText, buttonColor, phone, onClick }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 text-center flex flex-col items-center transition-all transform hover:scale-105 cursor-pointer" 
         onClick={onClick}  // ✅ Click the entire card to navigate
    >
      <div className="text-teal-600 text-4xl mb-4">{icon}</div>
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      {phone && (
        <p className="text-gray-800 font-semibold mb-2 flex items-center gap-2">
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

export default function CardsSection() {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
    window.scrollTo(0, 0);  // ✅ Scrolls to the top of the page after navigation
  };

  return (
    <section className="py-12 bg-gray-100 flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full px-6">
        <Card
          icon={<FaCalendarCheck />}
          title="Online Appointment"
          description="Easily book your medical appointments online."
          buttonText="Schedule Now"
          buttonColor="bg-teal-600"
          onClick={() => handleNavigate("/appointment")}  // ✅ Scrolls to top after navigation
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
    </section>
  );
}


