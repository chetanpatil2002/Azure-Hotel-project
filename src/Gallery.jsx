import React from "react";
import imgs1 from "./Room Details/Gallery/Frame 88.png";
import imgs2 from "./Room Details/Gallery/Rectangle 4493.png";
import imgs3 from "./Room Details/Gallery/Rectangle 4494.png";
import imgs4 from "./Room Details/Gallery/Rectangle 4495.png";
import imgs5 from "./Room Details/Gallery/Rectangle 4496.png";
import imgs6 from "./Room Details/Gallery/Rectangle 4497.png";
import imgs7 from "./Room Details/Gallery/Rectangle 4498.png";
import imgs8 from "./Room Details/Gallery/Rectangle 4499.png";
import imgs9 from "./Room Details/Gallery/Rectangle 4500.png";
import imgs10 from "./Room Details/Gallery/Rectangle 4501.png";
import imgs11 from "./Room Details/Gallery/Rectangle 4502.png";
import imgs12 from "./Room Details/Gallery/Rectangle 4503.png";
import imgs13 from "./Room Details/Gallery/Rectangle 4504.png";

export default function Gallery() {
  return (
    <div className="">
      {/* Header Section */}
      <div className="relative">
        <div className="relative z-0">
          <img src={imgs1} alt="Gallery Header" className="w-full h-auto" />
        </div>
        <div className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <p className="text-2xl md:text-5xl text-white font-serif">Gallery</p>
          <p className="text-sm md:text-2xl text-gray-300 tracking-widest mt-3 md:mt-5 font-serif">
            Explore the elegance and luxury of Sapphire Oasis through our stunning gallery
          </p>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4 md:px-10 lg:px-20 py-10 md:py-20 gap-4 md:gap-6">
        {[
          { imgs: imgs8 },
          { imgs: imgs3 },
          { imgs: imgs4 },
          { imgs: imgs12 },
          { imgs: imgs2 },
          { imgs: imgs6 },
          { imgs: imgs9 },
          { imgs: imgs11 },
          { imgs: imgs5 },
          { imgs: imgs7 },
          { imgs: imgs10 },
          { imgs: imgs13 },
         
        ].map((e, i) => {
          return (
            <div className="w-full h-auto" key={i}>
              <img src={e.imgs} alt="" className="w-full h-full object-cover rounded-lg" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
