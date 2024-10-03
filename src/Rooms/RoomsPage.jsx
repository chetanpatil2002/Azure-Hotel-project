import React from "react";
import imgs1 from "./Room and Suite Images/Frame 87.png";
import imgs2 from "./Room and Suite Images/image 4.png";
import imgs3 from "./Room and Suite Images/image 5.png";
import imgs4 from "./Room and Suite Images/image 6.png";
import imgs5 from "./Room and Suite Images/image 7.png";
import imgs6 from "./Room and Suite Images/image 8.png";
import imgs7 from "./Room and Suite Images/image 9.png";
import imgs8 from "./Room and Suite Images/image 10.png";
import imgs9 from "./Room and Suite Images/image 11.png";
import imgs10 from "./Room and Suite Images/image 12.png";
import { Button, Rating } from "flowbite-react";
import { BedDouble, MoveRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function RoomsPage() {
  const navigate = useNavigate()
  return (
    <div className="bg-slate-50">
      <div className="relative">
        <div className="relative z-0">
          <img src={imgs1} alt="Room Banner" className="w-full h-auto object-cover" />
        </div>
        <div className="absolute flex flex-col justify-center items-center w-full h-full z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <p className="text-3xl md:text-5xl text-center text-white font-serif">Rooms</p>
          <p className="text-md md:text-2xl text-center text-gray-300 font-serif mt-2 md:mt-6 leading-6 md:leading-10">
            Indulge in the ultimate blend of elegance and comfort in our meticulously designed rooms. <br />
            Choose your room today.
          </p>
        </div>
      </div>
      <div className="mt-12 md:mt-20">
        <p className="text-3xl md:text-5xl font-serif text-center">Azure’s Rooms & Suites</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16 px-4 md:px-20 py-12 md:py-20">
          {[
            { img: imgs2, room: "Double Suite Room" },
            { img: imgs3, room: "Delux Family Room" },
            { img: imgs4, room: "Superior Bed Room" },
            { img: imgs5, room: "Junior Suit Room" },
            { img: imgs6, room: "Beautiful Family Room" },
            { img: imgs7, room: "Family Suit Room" },
            { img: imgs8, room: "Double Suite Room" },
            { img: imgs9, room: "Double Suite Room" },
            { img: imgs10, room: "Double Suite Room" },
          ].map((e, i) => {
            return (
              <div className="border-2 max-w-full" key={i}>
                <div className="group relative overflow-hidden">
                  <div>
                    <img
                      src={e.img}
                      alt={`Image of ${e.room}`}
                      className="object-cover transition-transform duration-1000 ease-in-out transform group-hover:scale-125 w-full h-64"
                    />
                    <div className="absolute top-0 right-0 bg-green-950 m-4 py-2 md:py-4 px-3 md:px-5 text-white text-xs md:text-sm">
                      ₹4000 | Night
                    </div>
                    <div>
                      <Button className="absolute flex items-center border-none text-md md:text-xl rounded-none gap-1  h-10  md:h-12 w-32 md:w-40 bottom-0 left-0 bg-yellow-600 text-white px-1 md:px-3 "
                        onClick={() => navigate("/viewDetails")}
                        >
                        View Details <MoveRight />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="p-4 md:p-8">
                  <p className="text-lg md:text-2xl text-yellow-900">Luxury Room</p>
                  <p className="text-xl md:text-4xl font-serif pt-2 md:pt-4">{e.room}</p>

                  <div className="flex items-center text-gray-700 bg-gray-50 pt-4 md:pt-8">
                    <span className="text-gray-700 text-lg font-medium mr-4">
                      <BedDouble className="w-6 h-6 md:w-10 md:h-10 mr-2 text-gray-600" />
                    </span>
                    <p className="text-lg md:text-2xl font-serif text-gray-600 mr-12 md:mr-24">
                      2 King Bed
                    </p>
                    <Rating>
                      <Rating.Star className="h-6 w-6 md:h-8 md:w-8 text-yellow-700" />
                      <Rating.Star className="h-6 w-6 md:h-8 md:w-8 text-yellow-700" />
                      <Rating.Star className="h-6 w-6 md:h-8 md:w-8 text-yellow-700" />
                      <Rating.Star className="h-6 w-6 md:h-8 md:w-8 text-yellow-700" />
                      <Rating.Star className="h-6 w-6 md:h-8 md:w-8 text-yellow-700" />
                    </Rating>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
