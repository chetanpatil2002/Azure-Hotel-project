import { Rating } from "flowbite-react";
import {
  BarChart,
  BedDouble,
  KeySquare,
  MoveLeft,
  MoveRight,
  PowerOff,
  Star,
  Tally1,
  Utensils,
  Waves,
  Wifi,
} from "lucide-react";
import React from "react";
import { Button } from "reactstrap";
import imgs1 from "./Home images/home 1.png";
import imgs2 from "./Home images/single-gallery-image-1.jpg.png";
import imgs3 from "./Home images/image 1.png";
import imgs4 from "./Home images/image 2.png";
import imgs5 from "./Home images/image 3.png";
import imgs6 from "./Home images/Rectangle 5.png";
import imgs7 from "./Home images/Rectangle 11.png";
import imgs8 from "./Home images/Rectangle 12.png";
import imgs10 from "./Home images/Rectangle 14.png";
import imgs11 from "./Home images/Rectangle 15.png";
import imgs12 from "./Home images/Rectangle 16.png";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="relative">
      <div className="relative z-0 ">
        <img
          src={imgs1}
          alt=""
          srcset=""
          className="w-full h-auto shadow-black"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center p-4 md:p-8 sm:p-6 w-full h-full bg-black bg-opacity-40  z-10  text-center ">
          <Rating className=" flex justify-center ">
            <Rating.Star color="gold" className="h-6 w-6 sm:h-8 sm:w-8 " />
            <Rating.Star color="gold" className="h-6 w-6 sm:h-8 sm:w-8" />
            <Rating.Star color="gold" className="h-6 w-6 sm:h-8 sm:w-8" />
            <Rating.Star color="gold" className="h-6 w-6 sm:h-8 sm:w-8" />
            <Rating.Star color="gold" className="h-6 w-6 sm:h-8 sm:w-8" />
          </Rating>
          <p className="text-white text-sm md:text-lg pt-2 sm:pt-4 md:pt-8 font-serif">
            LUXURY HOTEL AND RESORT
          </p>
          <p className="text-white text-lg sm:text-4xl md:text-5xl  font-serif mt-1 sm:mt-4 md:mt-8">
            THE BEST LUXURY HOTEL <br/> IN INDIA
          </p>
          <div>
            <Button
              className="border border-yellow-300 rounded-lg h-8 md:h-12 sm:h-14 md:w-44 sm:w-42 w-28 text-sm md:text-xl sm:text-lg bg-lime-900 hover:bg-slate-800 text-white mt-2 sm:mt-6 md:mt-8 "
              onClick={() => navigate("/about")}
            >
              Discover More
            </Button>
          </div>
        </div>
      </div>

      <div className="bg-gray-50">
        {/* ========================== Azure Refined  ===================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center pt-15 md:pt-32 px-6 md:px-20">
          {/* Text Content */}
          <div className="md:px-12 lg:px-20 pt-6 md:pt-9">
            <p className="tracking-widest text-yellow-900 text-center md:text-left text-sm md:text-base lg:text-lg">
              WELCOME TO ELEGANCE REDEFINED
            </p>
            <p className="text-2xl md:text-4xl lg:text-5xl font-serif mt-4 md:mt-6 leading-tight text-gray-900 text-center md:text-left">
              Discover the Art of Refined Living
            </p>
            <p className="mt-4 md:mt-6 text-sm md:text-lg font-bold text-center md:text-left">
              Experience Unmatched Comfort and Elegance. Your Sanctuary Awaits.
            </p>
            <p className="mt-4 md:mt-6 text-gray-900 text-center md:text-left text-sm md:text-base">
              Azure Palace offers a haven of tranquility and sophistication. Our
              luxurious accommodations, exceptional amenities, and personalized
              service ensure a stay that exceeds expectations. Immerse yourself
              in a world of elegance, where every detail is designed to elevate
              your experience.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center items-center mt-8 md:mt-0">
            <img
              src={imgs2}
              alt="Azure Palace"
              className="w-full h-auto max-w-md"
            />
          </div>
        </div>

        {/* =====================  Rooms =============== */}
        <div>
          <div className=" pt-14 md:pt-32">
            <p className="font-serif text-2xl md:text-5xl text-center">
              Azure’s Rooms & Suites
            </p>
            <p className="text-center font-serif pt-2 md:pt-4 tracking-wider">
              LUXURY HOTEL AND RESORT
            </p>
          </div>
          {/* ================= Rooms =============== */}
          <div className="px-4 sm:px-8 md:px-20 pt-12 md:pt-24">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16">
              {/* Room 1 */}
              <div className="border-2 rounded-lg overflow-hidden">
                <div className="group relative">
                  <img
                    src={imgs3}
                    alt="Luxury Room"
                    className="object-cover w-full h-64 sm:h-72 lg:h-80 transition-transform duration-1000 ease-in-out transform group-hover:scale-125"
                  />
                  <div className="absolute top-0 right-0 bg-green-950 m-4 py-2 px-3 text-white text-sm">
                    ₹4000 | Night
                  </div>
                  <div>
                    <Button
                      className="absolute flex items-center border-none text-lg md:text-xl gap-1 h-10 w-36 md:h-12 md:w-40 bottom-0 left-0 bg-yellow-600 text-white px-2 md:px-3 py-1"
                      onClick={() => navigate("/viewDetails")}
                    >
                      View Details <MoveRight />
                    </Button>
                  </div>
                </div>
                <div className="p-4 sm:p-6 md:p-8">
                  <p className="text-xl sm:text-2xl text-yellow-900">
                    Luxury Room
                  </p>
                  <p className="text-2xl sm:text-3xl md:text-4xl font-serif pt-2 md:pt-4">
                    Double Suite Room
                  </p>
                  <div className="flex items-center text-gray-700 bg-gray-50 pt-4 md:pt-8">
                    <span className="text-gray-700 text-lg font-medium mr-4">
                      <BedDouble className="w-8 h-8 md:w-10 md:h-10 mr-2 text-gray-600" />
                    </span>
                    <p className="text-lg sm:text-xl md:text-2xl font-serif text-gray-600 mr-16 sm:mr-24">
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

              {/* Room 2 */}
              <div className="border-2 rounded-lg overflow-hidden">
                <div className="group relative">
                  <img
                    src={imgs4}
                    alt="Luxury Room"
                    className="object-cover w-full h-64 sm:h-72 lg:h-80 transition-transform duration-1000 ease-in-out transform group-hover:scale-125"
                  />
                  <div className="absolute top-0 right-0 bg-green-950 m-4 py-2 px-3 text-white text-sm">
                    ₹4000 | Night
                  </div>
                  <div>
                    <Button
                      className="absolute flex items-center border-none text-lg md:text-xl gap-1 h-10 w-36 md:h-12 md:w-40 bottom-0 left-0 bg-yellow-600 text-white px-2 md:px-3 py-1"
                      onClick={() => navigate("/viewDetails")}
                    >
                      View Details <MoveRight />
                    </Button>
                  </div>
                </div>
                <div className="p-4 sm:p-6 md:p-8">
                  <p className="text-xl sm:text-2xl text-yellow-900">
                    Luxury Room
                  </p>
                  <p className="text-2xl sm:text-3xl md:text-4xl font-serif pt-2 md:pt-4">
                    Double Suite Room
                  </p>
                  <div className="flex items-center text-gray-700 bg-gray-50 pt-4 md:pt-8">
                    <span className="text-gray-700 text-lg font-medium mr-4">
                      <BedDouble className="w-8 h-8 md:w-10 md:h-10 mr-2 text-gray-600" />
                    </span>
                    <p className="text-lg sm:text-xl md:text-2xl font-serif text-gray-600 mr-16 sm:mr-24">
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

              {/* Room 3 */}
              <div className="border-2 rounded-lg overflow-hidden">
                <div className="group relative">
                  <img
                    src={imgs5}
                    alt="Luxury Room"
                    className="object-cover w-full h-64 sm:h-72 lg:h-80 transition-transform duration-1000 ease-in-out transform group-hover:scale-125"
                  />
                  <div className="absolute top-0 right-0 bg-green-950 m-4 py-2 px-3 text-white text-sm">
                    ₹4000 | Night
                  </div>
                  <div>
                    <Button
                      className="absolute flex items-center border-none text-lg md:text-xl gap-1 h-10 w-36 md:h-12 md:w-40 bottom-0 left-0 bg-yellow-600 text-white px-2 md:px-3 py-1"
                      onClick={() => navigate("/viewDetails")}
                    >
                      View Details <MoveRight />
                    </Button>
                  </div>
                </div>
                <div className="p-4 sm:p-6 md:p-8">
                  <p className="text-xl sm:text-2xl text-yellow-900">
                    Luxury Room
                  </p>
                  <p className="text-2xl sm:text-3xl md:text-4xl font-serif pt-2 md:pt-4">
                    Double Suite Room
                  </p>
                  <div className="flex items-center text-gray-700 bg-gray-50 pt-4 md:pt-8">
                    <span className="text-gray-700 text-lg font-medium mr-4">
                      <BedDouble className="w-8 h-8 md:w-10 md:h-10 mr-2 text-gray-600" />
                    </span>
                    <p className="text-lg sm:text-xl md:text-2xl font-serif text-gray-600 mr-16 sm:mr-24">
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
            </div>
          </div>

          {/* ================== Hotel Facilities =============  */}
          <div className="bg-black w-full h-auto opacity-[0.9] mt-14 md:mt-28 py-10 md:py-16 ">
            <div>
              <p className=" text-2xl md:text-5xl text-center text-white font-serif ">
                Hotel’s Facilities
              </p>
              <p className="text-center  sm:text-lg md:text-2xl pt-1 md:pt-3 font-serif  tracking-widest text-yellow-700">
                Experience Unmatched Comfort and Convenience
              </p>
            </div>
            {/* ================== boxes =============  */}
            <div className="pt-10 sm:pt-20 px-4 sm:px-8 md:px-20">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-8 md:gap-10">
                <div className="border rounded-lg border-yellow-800 p-6 sm:p-10">
                  <span className="text-yellow-900 flex justify-center ">
                    <BedDouble className="h-10 w-10 sm:h-12 sm:w-12" />
                  </span>
                  <p className="text-white text-center ">|</p>
                  <p className="text-center text-white text-xl sm:text-2xl pt-3 sm:pt-5 font-serif">
                    Room Services
                  </p>
                </div>

                <div className="border rounded-lg border-yellow-800 p-6 sm:p-10">
                  <span className="text-yellow-900 flex justify-center ">
                    <Wifi className="h-10 w-10 sm:h-12 sm:w-12" />
                  </span>
                  <p className="text-white text-center ">|</p>
                  <p className="text-center text-white text-xl sm:text-2xl pt-3 sm:pt-5 font-serif">
                    Wi-Fi
                  </p>
                </div>

                <div className="border rounded-lg border-yellow-800 p-6 sm:p-10">
                  <span className="text-yellow-900 flex justify-center ">
                    <KeySquare className="h-10 w-10 sm:h-12 sm:w-12" />
                  </span>
                  <p className="text-white text-center ">|</p>
                  <p className="text-center text-white text-xl sm:text-2xl pt-3 sm:pt-5 font-serif">
                    Smart Key
                  </p>
                </div>

                <div className="border rounded-lg border-yellow-800 p-6 sm:p-10">
                  <span className="text-yellow-900 flex justify-center ">
                    <Utensils className="h-10 w-10 sm:h-12 sm:w-12" />
                  </span>
                  <p className="text-white text-center ">|</p>
                  <p className="text-center text-white text-xl sm:text-2xl pt-3 sm:pt-5 font-serif">
                    Breakfast
                  </p>
                </div>

                <div className="border rounded-lg border-yellow-800 p-6 sm:p-10">
                  <span className="text-yellow-900 flex justify-center ">
                    <Waves className="h-10 w-10 sm:h-12 sm:w-12" />
                  </span>
                  <p className="text-white text-center ">|</p>
                  <p className="text-center text-white text-xl sm:text-2xl pt-3 sm:pt-5 font-serif">
                    Swimming Pool
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ================= Faciliteis =================== */}
          <div className=" pt-10 md:pt-20">
            <p className="text-center text-sm tracking-widest font-bold text-yellow-800">
              FACILITEIS
            </p>
            <p className="text-center text-2xl md:text-5xl font-serif pt-5 md:pt-10 leading-tight">
              ENJOY COMPLETE & BEST QUALITY FACILITIES
            </p>
          </div>

          {/* ========================== line =================== */}
          <div className=" px-7 md:px-20 pt-8 md:pt-16">
            <hr className="h-1 bg-black " />
          </div>
          {/* ==================== imgs & info ==================== */}

          {/* ================ info 1 ================== */}
          <div>
            <div className="flex flex-col md:flex-row items-center justify-center px-7 pt-7 md:px-20 md:pt-20 ">
              <div className="md:w-1/2">
                <img
                  src={imgs6}
                  alt=""
                  srcset=""
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="md:w-1/2  p-6  md:p-16">
                <p className=" text-4xl md:text-5xl font-serif text-yellow-600 pb-6 md:pb-12">01</p>
                <p className="md:text-4xl text-xl font-bold mb-2 pb-3 md:mb-4 md:pb-6">
                  Gourmet Dining Experience
                </p>
                <p className="md:text-2xl text-lg  font-serif leading-tight">
                  Indulge in a culinary journey at our exquisite cafe and
                  restaurant. Our chefs craft delectable dishes using the finest
                  ingredients, offering a fusion of international flavors and
                  local delicacies. Whether you're enjoying a leisurely
                  breakfast, a business lunch, or a romantic dinner, our dining
                  spaces provide the perfect ambiance for every occasion.
                </p>
              </div>
            </div>
            {/* =================== info2 ================ */}
            <div className=" px-7 md:px-20 p-6 md:p-16">
              <hr className="h-1 bg-gray-500 " />
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center px-7 pt-5 md:px-20  md:pt-20 ">
              <div className="md:w-1/2  p-6  md:p-16">
                <p className="text-4xl md:text-5xl font-serif text-yellow-600 pb-6 md:pb-12">02</p>
                <p className="md:text-4xl text-xl font-bold mb-2 pb-3 md:mb-4 md:pb-6">Relax and Unwind</p>
                <p className="md:text-2xl text-lg  font-serif leading-tight">
                  Dive into luxury at our stunning swimming pool. Surrounded by
                  lush greenery and elegant loungers, its the perfect place to
                  unwind and soak up the sun. Whether you're looking to swim
                  laps or simply relax with a refreshing cocktail, our poolside
                  service ensures a relaxing experience.
                </p>
              </div>
              <div className="md:w-1/2">
                <img
                  src={imgs7}
                  alt=""
                  srcset=""
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
            <div className="px-7 md:px-20 p-6  md:p-16">
              <hr className="h-1 bg-gray-500 " />
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center px-7 pt-7 md:px-20 md:pt-20 ">
              <div className="md:w-1/2">
                <img
                  src={imgs8}
                  alt=""
                  srcset=""
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="md:w-1/2 p-6  md:p-16">
                <p className="text-4xl md:text-5xl font-serif text-yellow-600 pb-6 md:pb-12">03</p>
                <p className="md:text-4xl text-xl font-bold mb-2 pb-3 md:mb-4 md:pb-6">
                  Stay Fit and Energized
                </p>
                <p className="md:text-2xl text-lg  font-serif leading-tight">
                  Maintain your fitness routine at our state of the-art fitness
                  center. Equipped with the latest exercise machines and free
                  weights, our gym offers a range of facilities to suit all your
                  workout needs. Our personal trainers are available to assist
                  you in achieving your fitness goals.
                </p>
              </div>
            </div>

            <div className="px-7 md:px-20 p-6  md:p-16">
              <hr className="h-1 bg-gray-500 " />
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center px-7 pt-5 md:px-20 md:pt-20 ">
              <div className="md:w-1/2  p-6  md:p-16">
                <p className="text-4xl md:text-5xl font-serif text-yellow-600 pb-6 md:pb-12">04</p>
                <p className="md:text-4xl text-xl font-bold mb-2 pb-3 md:mb-4 md:pb-6">
                  Rejuvenate Your Senses
                </p>
                <p className="md:text-2xl text-lg  font-serif leading-tight">
                  Escape to a world of tranquility at our luxurious spa. Indulge
                  in a range of treatments designed to relax, revitalize, and
                  rejuvenate your body and mind. Our skilled therapists offer
                  massages, facials, and holistic therapies in a serene and
                  calming environment.
                </p>
              </div>
              <div className="md:w-1/2">
                <img
                  src={imgs10}
                  alt=""
                  srcset=""
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
          <div className="px-7 md:px-20 p-6  md:p-16">
            <hr className="h-1 bg-gray-500 " />
          </div>

          {/* ================ Customer Testimonial ================  */}
          <div>
            <p className="text-5xl text-center font-serif pt-14 md:pt-24">
              Customer’s Testimonial
            </p>
            <div className="px-4 sm:px-8 md:px-20 py-8">
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 justify-center items-center">
                <div className="flex flex-col sm:flex-row p-5">
                  <img
                    src={imgs11}
                    alt=""
                    className="rounded-l-lg sm:w-1/3 md:w-auto"
                  />
                  <div className="border max-w-lg h-auto bg-white rounded-r-lg shadow-lg p-6 sm:p-10">
                    <p className="text-sm sm:text-sm text-gray-600">
                      May 8, 2020
                    </p>
                    <p className="text-xl sm:text-2xl text-gray-700 font-serif pt-3 sm:pt-5 font-bold">
                      Best experience I ever had
                    </p>
                    <p className="text-xs sm:text-sm pt-3 sm:pt-5">
                      I recently stayed at Milenia Luxury Hotel and had an
                      absolutely amazing experience. From the moment I arrived,
                      the staff was incredibly welcoming and attentive. My room
                      was luxurious, with a stunning view of the city. The
                      restaurant served delicious meals, and I loved spending
                      afternoons by the pool. I can't wait to return!
                    </p>
                    <Rating className="pt-2">
                      <Rating.Star className="h-6 sm:h-8 w-6 sm:w-8 text-yellow-700" />
                      <Rating.Star className="h-6 sm:h-8 w-6 sm:w-8 text-yellow-700" />
                      <Rating.Star className="h-6 sm:h-8 w-6 sm:w-8 text-yellow-700" />
                      <Rating.Star className="h-6 sm:h-8 w-6 sm:w-8 text-yellow-700" />
                      <Rating.Star className="h-6 sm:h-8 w-6 sm:w-8 text-yellow-700" />
                    </Rating>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row p-5">
                  <img
                    src={imgs12}
                    alt=""
                    className="rounded-l-lg sm:w-1/3 md:w-auto"
                  />
                  <div className="border max-w-lg h-auto bg-white rounded-r-lg shadow-lg p-6 sm:p-10">
                    <p className="text-sm sm:text-sm text-gray-600">
                      Feb 28, 2020
                    </p>
                    <p className="text-xl sm:text-2xl text-gray-700 font-serif pt-3 sm:pt-5 font-bold">
                      Best Hotel Ever
                    </p>
                    <p className="text-xs sm:text-sm pt-3 sm:pt-5">
                      The hotel exceeded my expectations in every way. The
                      fitness center was well equipped, and I appreciated the
                      personalized service from the concierge. The only downside
                      was that the breakfast buffet could have had a bit more
                      variety. Overall, a fantastic experience!
                    </p>
                    <Rating className="pt-2">
                      <Rating.Star className="h-6 sm:h-8 w-6 sm:w-8 text-yellow-700" />
                      <Rating.Star className="h-6 sm:h-8 w-6 sm:w-8 text-yellow-700" />
                      <Rating.Star className="h-6 sm:h-8 w-6 sm:w-8 text-yellow-700" />
                      <Rating.Star className="h-6 sm:h-8 w-6 sm:w-8 text-yellow-700" />
                      <Rating.Star className="h-6 sm:h-8 w-6 sm:w-8 text-yellow-700" />
                    </Rating>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
