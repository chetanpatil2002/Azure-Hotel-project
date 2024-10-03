import React from "react";
import imgs1 from "./Frame 5.png";
import imgs2 from "./Rectangle 4506.png";
import imgs3 from "./About Us/1.jpg.png";
import imgs4 from "./About Us/2.jpg.png";
import imgs5 from "./About Us/3.jpg.png";
import imgs6 from "./About Us/4.jpg.png";
import imgs7 from "./About Us/5.jpg.png";
import imgs8 from "./About Us/6.jpg (1).png";
import imgs9 from "./About Us/7.jpg.png";
import imgs10 from "./About Us/8.jpg.png";

import { Button, Rating } from "flowbite-react";

export default function About() {
  return (
    <div className="bg-slate-50">
      <div>
        <img
          src={imgs1}
          alt=""
          className="w-full h-auto shadow-black"
        />
      </div>
      <div className="px-4 md:px-20 flex flex-col md:flex-row gap-8 md:gap-20 mt-12 md:mt-24">
        <div className="flex-shrink-0">
          <img
            src={imgs2}
            alt=""
            className="w-full h-auto rounded-md"
          />
        </div>
        <div className="md:pt-28">
          <p className="text-xl md:text-3xl font-serif font-light text-yellow-600">
            LUXURY HOTEL AND RESORT
          </p>
          <p className="pt-4 md:pt-8 text-3xl md:text-5xl font-serif leading-tight">
            EXPERIENCE THE ULTIMATE IN LUXURY
          </p>
          <p className="pt-4 text-lg md:text-2xl font-serif">
            Discover a sanctuary of elegance and tranquility at Sapphire Oasis,
            where every detail is crafted to create an unforgettable experience.
            Our luxury hotel blends modern sophistication with warm hospitality,
            offering exquisite accommodations and world-class amenities in the
            heart of Gurgaon. Whether you're here for business or leisure, enjoy
            unparalleled comfort and personalized service tailored to your
            needs.
          </p>
          <div className="mt-8 md:mt-10 border-2 border-transparent max-w-lg p-4 rounded-md bg-red-100">
            <p className="text-xl md:text-2xl">
              123/4, Paradise Lane, Sector 24, DLF Phase 3, Gurgaon, Haryana -
              122002
            </p>
          </div>
        </div>
      </div>

      {/* ============  Expert Team =====================  */}
      <div className="py-12 md:py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-serif mb-4 md:mb-6">MEET OUR EXPERT TEAM</h2>
          <p className="text-gray-500 text-lg md:text-3xl mb-8 md:mb-12">
            Our team comprises industry leaders and innovators dedicated to
            ensuring your experience at Sapphire Oasis is nothing short of
            extraordinary.
          </p>
          {/* Team Members Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Team members here */}
            {[{ img: imgs3, name: "Alisha Scoff", role: "Owner" },
              { img: imgs4, name: "Tomas Finn", role: "Manager" },
              { img: imgs5, name: "Alfred Gun", role: "Front Office" },
              { img: imgs6, name: "Katty Olson", role: "Supervisor" },
              { img: imgs7, name: "Tiffany Enifer", role: "Front Office" },
              { img: imgs8, name: "Arnold Taylor", role: "Master Chef" },
              { img: imgs9, name: "Megan Black", role: "Room Cleaner" },
              { img: imgs10, name: "Denys Walker", role: "Chef" }]
              .map((e, i) => (
                <div key={i} className="p-4 bg-white rounded-lg shadow-lg">
                  <div className="rounded-lg overflow-hidden">
                    <img
                      src={e.img}
                      // alt={e.name}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mt-4">{e.name}</h3>
                  <p className="text-gray-500">{e.role}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
