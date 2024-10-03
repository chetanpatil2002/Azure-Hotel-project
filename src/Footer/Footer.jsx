import React from 'react';
import logo1 from "./footer img/logo.png";
import logo2 from "./footer img/Link.png";
import logo3 from "./footer img/Link-1.png";
import logo4 from "./footer img/Link-2.png";
import logo5 from "./footer img/Link-3.png";

export default function Footer() {
  return (
    <footer className="bg-black w-full h-auto opacity-90 py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* ================ Contacts ======================  */}
        <div className=" sm:pl-30 md:pl-40">
          <p className="text-yellow-700 text-xl font-serif">Explore</p>
          <ul className="pt-5 font-light">
            <li className="text-sm text-white mb-5">Home</li>
            <li className="text-sm text-white mb-5">About</li>
            <li className="text-sm text-white mb-5">Rooms & Suites</li>
            <li className="text-sm text-white mb-5">Restaurant</li>
            <li className="text-sm text-white mb-5">Gallery</li>
            <li className="text-sm text-white mb-5">Contact</li>
          </ul>
        </div>
        {/* ====================== Social ==================== */}
        <div className=" mt-2 md:mt-10">
          <img src={logo1} alt="Logo" className="mx-auto mb-4 h-16" />
          <p className="text-gray-400 font-light text-center px-4  mb-4">
            Enjoy unparalleled comfort and personalized service tailored to your needs
          </p>
          <p className="text-white text-center">Follow On Social</p>
          <div className="flex justify-center mt-4 align-items-center gap-3">
            <img src={logo2} alt="Social Icon 1" />
            <img src={logo3} alt="Social Icon 2" />
            <img src={logo4} alt="Social Icon 3" />
            <img src={logo5} alt="Social Icon 4" />
          </div>
        </div>
        {/*  ======================== Contact Info ============== */}
        <div className="text-white p-5 md:ml-12">
          <p className="text-lg font-semibold mb-2 md:mb-4">Contact Information</p>
          <p className="font-light font-serif">Location</p>
          <a href="#" className="text-gray-500">
            123/4, Paradise Lane, Sector 24, DLF Phase 3, Gurgaon, Haryana - 12200
          </a>
          <p className="mt-3 md:mt-7">Email</p>
          <p className="mb-2 md:mb-5 text-gray-500">contactazurepalace.com</p>
          <p>Phone</p>
          <p className="text-gray-500">(414) 687 - 5892</p>
        </div>
      </div>
      <div className="px-7 md:px-40 mt-7 md:mt-14">
        <hr className="h-0 bg-gray-500" />
      </div>
    </footer>
  );
}
