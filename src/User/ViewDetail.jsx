import React from "react";
import imgs1 from "../Room Details/Room Details/Frame 90.png";
import imgs2 from "../Room Details/Room Details/image 13.png";
import {
  BedDouble,
  Dumbbell,
  UserRound,
  Utensils,
  Waves,
  Wifi,
} from "lucide-react";
import {
  HiMiniArrowRightEndOnRectangle,
  HiMiniArrowRightStartOnRectangle,
} from "react-icons/hi2";
import { CiDumbbell } from "react-icons/ci";

export default function ViewDetail() {
  return (
    <div>
      {/* Banner Section */}
      <div className="relative">
        <div className="relative z-0">
          <img src={imgs1} alt="Room Banner" className="w-full" />
        </div>
        <div className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4">
          <p className="text-2xl md:text-5xl text-white text-center font-serif">
            Room Details
          </p>
          <p className="text-xs md:text-2xl text-gray-300 text-center font-serif leading-4 md:leading-8 mt-2 md:mt-5 tracking-widest">
            Indulge in the ultimate blend of elegance and comfort in our
            meticulously designed rooms. Choose your room today.
          </p>
        </div>
      </div>

      {/* Room Image Section */}
      <div className="px-4 md:px-20 py-10 md:py-20">
        <img src={imgs2} alt="Room Detail" className="w-full" />
      </div>

      {/* Room Description Section */}
      <div className="px-4 md:px-20 py-10 md:py-20 flex flex-col md:flex-row gap-14">
        <div>
          <p className="text-2xl md:text-4xl text-yellow-800 font-serif mb-4 md:mb-6">
            Luxury Room
          </p>
          <p className="text-3xl md:text-5xl font-serif mb-6 md:mb-10">
            Double Suite Room
          </p>
          <p className="text-lg md:text-3xl text-gray-700 mb-6 md:mb-10 max-w-6xl">
            Our Double Suite Room offers a spacious and luxurious retreat for
            families, comfortably accommodating up to five guests. This
            elegantly designed 250-square foot room is equipped with two
            queen-sized beds and a cozy sofa bed, ensuring a restful night's
            sleep for everyone. Enjoy modern decor and soothing color tones that
            create a relaxing atmosphere.
          </p>
          <p className="text-lg md:text-3xl text-gray-700 mb-6 md:mb-10 max-w-6xl">
            The room features a private bathroom with a bathtub and shower,
            complimentary toiletries, and plush bathrobes. Stay entertained with
            a large flat-screen TV, and take advantage of the free high-speed
            Wi-Fi to keep you connected throughout your stay.
          </p>
          <p className="text-lg md:text-3xl text-gray-700 mb-8 md:mb-12 max-w-6xl">
            For your convenience, the room includes a minibar, a coffee and tea
            maker, and ample closet space. Our Deluxe Family Room provides the
            perfect blend of comfort and style for a memorable family getaway.
          </p>

          {/* Check In / Check Out Section */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col md:flex-row justify-between">
              <div className="flex items-center gap-2 mb-4 md:mb-0">
                <HiMiniArrowRightEndOnRectangle className="h-8 md:h-12 w-8 md:w-12" />
                <p className="text-2xl md:text-4xl font-serif">Check In</p>
              </div>
              <div className="flex items-center gap-2">
                <HiMiniArrowRightStartOnRectangle className="h-8 md:h-12 w-8 md:w-12" />
                <p className="text-2xl md:text-4xl font-serif">Check Out</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between gap-4">
              <div>
                <p className="text-lg md:text-3xl font-serif text-gray-700 mb-2 md:mb-5">
                  9:00 AM - anytime
                </p>
                <p className="text-lg md:text-3xl text-gray-700 font-serif">
                  Early check-in is subject to availability
                </p>
              </div>
              <div>
                <p className="text-lg md:text-3xl font-serif text-gray-700 mb-2 md:mb-5">
                  Before noon
                </p>
                <p className="text-lg md:text-3xl text-gray-700 font-serif">
                  Check-out from 9:00 AM - anytime
                </p>
              </div>
            </div>
          </div>

          {/* House Rules Section */}
          <div className="mt-10 max-w-6xl">
            <p className="text-2xl md:text-4xl font-serif mb-4 md:mb-5">
              House Rules
            </p>
            <p className="text-lg md:text-3xl text-gray-700 font-serif mb-2">
              • Respect the quiet hours between 10 PM and 7 AM to ensure a
              peaceful stay for all guests.
            </p>
            <p className="text-lg md:text-3xl text-gray-700 font-serif mb-2">
              • Pets are welcome with prior arrangement; please contact the
              front desk for more information.
            </p>
            <p className="text-lg md:text-3xl text-gray-700 font-serif mb-2">
              • Please report any damage or maintenance issues to the front desk
              immediately.
            </p>
            <p className="text-lg md:text-3xl text-gray-700 font-serif">
              • Guests are responsible for securing their personal belongings;
              safes are provided in each room for your convenience.
            </p>
          </div>
        </div>

        {/* Amenities Section */}
        <div className="py-10 md:py-32">
          <p className="text-2xl md:text-4xl font-serif mb-10 md:mb-20">
            Amenities
          </p>
          <div className="">
            <div className="flex gap-5 mb-6 md:mb-8">
              <span>
                <UserRound className="h-8 md:h-10 w-8 md:w-10 text-yellow-700" />
              </span>
              <p className="text-lg md:text-3xl font-serif">2-5 Person</p>
            </div>
            <hr className="h-1 bg-yellow-600 w-full mb-5 md:mb-7" />

            <div className="flex gap-5 mb-6 md:mb-8">
              <span>
                <Wifi className="h-8 md:h-10 w-8 md:w-10 text-yellow-700" />
              </span>
              <p className="text-lg md:text-3xl font-serif">Wi-Fi</p>
            </div>
            <hr className="h-1 bg-yellow-600 w-full mb-5 md:mb-7" />

            <div className="flex gap-5 mb-6 md:mb-8">
              <span>
                <Waves className="h-8 md:h-10 w-8 md:w-10 text-yellow-700" />
              </span>
              <p className="text-lg md:text-3xl font-serif">Swimming Pool</p>
            </div>
            <hr className="h-1 bg-yellow-600 w-full mb-5 md:mb-7" />

            <div className="flex gap-5 mb-6 md:mb-8">
              <span>
                <Utensils className="h-8 md:h-10 w-8 md:w-10 text-yellow-700" />
              </span>
              <p className="text-lg md:text-3xl font-serif">
                Complimentary Breakfast
              </p>
            </div>
            <hr className="h-1 bg-yellow-600 w-full mb-5 md:mb-7" />

            <div className="flex gap-5 mb-6 md:mb-8">
              <span>
                <BedDouble className="h-8 md:h-10 w-8 md:w-10 text-yellow-700" />
              </span>
              <p className="text-lg md:text-3xl font-serif">
                250 SQFT of Living Space
              </p>
            </div>
            <hr className="h-1 bg-yellow-600 w-full mb-5 md:mb-7" />

            <div className="flex gap-5">
              <span>
                <CiDumbbell className="h-8 md:h-10 w-8 md:w-10 text-yellow-700" />
              </span>
              <p className="text-lg md:text-3xl font-serif">Gym Facilities</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
