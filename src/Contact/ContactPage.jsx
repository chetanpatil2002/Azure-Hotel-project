import React, { useState } from "react";
import image1 from "./Frame 89.png";
import { Mail, MapPin, Phone } from "lucide-react";
import { toast } from "react-toastify";

export default function ContactPage() {
  let [user, setUser] = useState({
    name: "",
    email: "",
    writeMassage: "",
  });
  let [arr, setArr] = useState([]);
  console.log("🚀 ~ ContactPage ~ arr:", arr);

  const submitHandle = (e) => {
    e.preventDefault();
    setArr([...arr, user]);
    setUser({
      name: "",
      email: "",
      writeMassage: "",
    });
    toast.success("form Submit Successfully");
  };

  return (
    <div className="">
      <div className="relative">
        <div className="relative z-0">
          <img
            src={image1}
            alt="Contact"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute flex flex-col justify-center items-center z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-1 md:px-4">
          <p className="text-2xl sm:text-5xl text-white font-serif">
            Contact Us
          </p>
          <p className="text-xs sm:text-xl text-gray-300 leading-5 sm:leading-7 md:leading-8 mb-2 md:mb-5 mt-1 sm:mt-3 md:mt-2">
            Have a question or need assistance with your booking? Our dedicated
            team is available around the clock to provide you with prompt and
            friendly service.
          </p>
        </div>
      </div>

      {/* ================ contacts ================= */}
      <div className="flex flex-col justify-center lg:flex-row mb-4 py-6 md:py-12 px-6 sm:px-12 lg:px-20 space-y-6 lg:space-y-0 lg:space-x-12">
        <div className="px-4 lg:px-16">
          <p className="text-lg font-serif text-yellow-900">Contact Us</p>
          <p className="text-2xl font-serif mt-3">CONTACT WITH US</p>
          <div className="flex gap-3 p-4 items-center mt-2 lg:mt-10">
            <span className="text-yellow-800">
              <Mail />
            </span>
            <p className="text-lg sm:text-xl">contact@azurepalace.com</p>
          </div>
          <hr className="h-1 bg-black " />
          <div className="flex gap-3 p-4 items-center mt-8 lg:mt-10">
            <span className="text-yellow-800">
              <Phone />
            </span>
            <p className="text-lg sm:text-xl">(414) 687 - 5892</p>
          </div>
          <div className="flex gap-3 p-4 items-center mt-2 lg:mt-10">
            <span className="text-yellow-800">
              <MapPin />
            </span>
            <div className="text-lg sm:text-xl">
              <p>123/4, Paradise Lane, Sector 24, DLF Phase 3,</p>
              <p>Gurgaon, Haryana - 122002</p>
            </div>
          </div>
          <hr className="h-1 mt-3 bg-black font-light" />
        </div>

        {/* =================== Contact Form Section =================  */}
        <div className="max-w-lg mx-auto p-6 sm:p-8 bg-gray-900 rounded-lg">
          <h3 className="text-lg font-semibold text-white mb-6 text-center">
            GET IN TOUCH
          </h3>
          <form className="space-y-6" onSubmit={submitHandle}>
            <input
              type="text"
              value={user.name}
              placeholder="Your name"
              className="w-full p-3 sm:p-4 bg-gray-800 text-white placeholder-gray-500 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              onChange={(e) => setUser({ ...user, name: e.target.value })}
            />
            <input
              type="email"
              value={user.email}
              placeholder="E- Mail"
              className="w-full p-3 sm:p-4 bg-gray-800 text-white placeholder-gray-500 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
            <textarea
              placeholder="Write Message"
              rows="4"
              value={user.writeMassage}
              className="w-full p-3 sm:p-4 bg-gray-800 text-white placeholder-gray-500 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              onChange={(e) =>
                setUser({ ...user, writeMassage: e.target.value })
              }
            ></textarea>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
