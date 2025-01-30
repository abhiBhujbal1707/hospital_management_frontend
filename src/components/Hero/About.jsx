import React from "react";

const AboutPage = () => {
  return (
    <div id="about-section" className=" bg-white  p-6">
      <div className="w-full max-w-screen-xl mx-auto bg-white  p-10 transition-transform transform">
        <h1 className="text-5xl font-extrabold text-center text-blue-700 mb-6">
          About <span className="text-indigo-600">Indira Hospital</span>
        </h1>

        <p className="text-gray-700 text-lg text-center mb-6">
          Welcome to <strong>Indira Hospital</strong>, where compassionate care meets 
          cutting-edge technology. We are dedicated to offering world-class healthcare services 
          to ensure the well-being of every patient.
        </p>

        <div className="border-t border-gray-300 my-6"></div>

        <h2 className="text-3xl font-semibold text-gray-900 mt-6 text-center">
          Our Mission
        </h2>
        <p className="text-gray-700 text-center mt-2">
          Providing high-quality medical care with compassion, accessibility, and innovation.
        </p>

        <h2 className="text-3xl font-semibold text-gray-900 mt-6 text-center">
          Our Vision
        </h2>
        <p className="text-gray-700 text-center mt-2">
          Leading the healthcare industry with pioneering treatments and patient-centric care.
        </p>

        <h2 className="text-3xl font-semibold text-gray-900 mt-6 text-center">
          Why Choose Us?
        </h2>
        <ul className="list-none mt-4 text-gray-700 space-y-2 text-center">
          <li className="bg-blue-100 py-2 px-4 rounded-lg shadow-md">
            ✅ Experienced & skilled medical professionals
          </li>
          <li className="bg-blue-100 py-2 px-4 rounded-lg shadow-md">
            ✅ Advanced medical technology & infrastructure
          </li>
          <li className="bg-blue-100 py-2 px-4 rounded-lg shadow-md">
            ✅ Personalized & patient-centric approach
          </li>
          <li className="bg-blue-100 py-2 px-4 rounded-lg shadow-md">
            ✅ 24/7 emergency & critical care services
          </li>
        </ul>

        <div className="border-t border-gray-300 my-6"></div>

        <h2 className="text-3xl font-semibold text-gray-900 text-center">
          Contact Us
        </h2>
        <p className="text-gray-700 text-center mt-2">
          📍 <strong>Address:</strong> Balewadi, Pune, India <br />
          📞 <strong>Phone:</strong> +91 9404016761<br />
          ✉️ <strong>Email:</strong> indira@gmail.com
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
