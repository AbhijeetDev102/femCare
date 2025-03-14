import React from "react";
import backgroundImage from "../assets/ipad.png"; 
import Footer from "./footer";
import Navbar from "./navbar";

const AppointmentForm = () => {
  return (
    <section
      className="relative bg-cover bg-center h-screen flex items-center justify-center px-4 sm:px-10"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      <div className="relative z-10 text-white text-center max-w-2xl">
        <h1 className="text-4xl font-bold mb-4">We care for you</h1>
        <p className="text-lg">
          Medical Services That You Can Trust. Providing exceptional healthcare
          solutions for your well-being.
        </p>
      </div>
      
      <div className="relative z-10 bg-white p-8 sm:p-12 rounded-lg shadow-2xl max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Make an Appointment</h2>
        <form>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input type="text" placeholder="Full Name" className="border border-gray-300 bg-gray-100 text-gray-800 p-3 rounded-lg w-full focus:ring-2 focus:ring-purple-500" />
            <input type="email" placeholder="Email Address" className="border border-gray-300 bg-gray-100 text-gray-800 p-3 rounded-lg w-full focus:ring-2 focus:ring-purple-500" />
            <input type="text" placeholder="Mobile Number" className="border border-gray-300 bg-gray-100 text-gray-800 p-3 rounded-lg w-full focus:ring-2 focus:ring-purple-500" />
            <select className="border border-gray-300 bg-gray-100 text-gray-800 p-3 rounded-lg w-full focus:ring-2 focus:ring-purple-500">
              <option value="">State</option>
              <option value="Delhi">Delhi</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Bangalore">Bangalore</option>
            </select>
          </div>
          <textarea placeholder="Enter Your Message" className="border border-gray-300 bg-gray-100 text-gray-800 p-3 rounded-lg w-full mt-4 focus:ring-2 focus:ring-purple-500"></textarea>
          <button className="bg-gradient-to-r from-purple-600 to-purple-500 text-white font-semibold py-3 px-6 w-full mt-6 rounded-lg hover:shadow-lg transition-transform transform hover:scale-105">
            SUBMIT
          </button>
        </form>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    {
      title: "Health Essentials",
      icon: "🏥",
      description:
        "Comprehensive health solutions tailored for your needs.",
      bgColor: "bg-gradient-to-r from-purple-300 to-purple-400 text-white",
    },
    {
      title: "Quality & Patient Safety",
      icon: "❤️",
      description:
        "Ensuring the highest standards in patient care and safety.",
      bgColor: "bg-gradient-to-r from-gray-300 to-gray-400 text-black",
    },
    {
      title: "Seamless Accessibility",
      icon: "🌍",
      description:
        "Reliable healthcare services with enhanced accessibility.",
      bgColor: "bg-gradient-to-r from-teal-500 to-teal-600 text-white",
    },
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6 p-10">
      {features.map((feature, index) => (
        <div
          key={index}
          className={`p-8 rounded-lg shadow-xl text-center ${feature.bgColor}`}
        >
          <span className="text-5xl">{feature.icon}</span>
          <h3 className="text-2xl font-semibold my-4">{feature.title}</h3>
          <p className="text-md font-light">{feature.description}</p>
        </div>
      ))}
    </section>
  );
};

const Appointment = () => {
  return (
    <div>
        <Navbar></Navbar>
      <AppointmentForm />
      <Features />'
    <Footer></Footer>
    </div>
  );
};

export default Appointment;


