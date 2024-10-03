import React, { useEffect, useState } from "react";
import ReactSelect from "react-select";
import { toast } from "react-toastify";

const Option = [
  { value: "Double Suite Room", label: "Double Suite Room" },
  { value: "Delux Family Room", label: "Delux Family Room" },
  { value: "Superior Bed Room", label: "Superior Bed Room" },
  { value: "Junior Suit Room", label: "Junior Suit Room" },
  { value: "Beautiful Family Room", label: "Beautiful Family Room" },
  { value: "Family Suit Room", label: "Family Suit Room" },
];

export default function BookingPage() {
  let [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    roomType: "",
    guest: "",
    arivvalDate: "",
    arivvalTime: "",
    departureDate: "",
    specialRequst: "",
  });
  let [userArr, setUserArr] = useState([]);
  let [index, setIndex] = useState(null);
  // toast.success("form is filled Successfully")

  console.log("🚀 ~ BookingPage ~ userArr:", userArr);

  useEffect(() => {
    const data = localStorage.getItem("users");
    if (data) {
      setUserArr(JSON.parse(data));
    }
  }, []);
  const submitHandler = (e) => {
    e.preventDefault();
    if (user.firstName !== "" && user.lastName !== "" && user.email !== "" && user.roomType !== "" && user.guest !== "" && user.arivvalDate !== "" && user.arivvalTime !== "" && user.departureDate !== "" && user.specialRequst !== "") {
      setUser({
        firstName: "",
        lastName: "",
        email: "",
        roomType: "",
        guest: "",
        arivvalDate: "",
        arivvalTime: "",
        departureDate: "",
        specialRequst: "",
      });
      setUserArr([...userArr, user]);

      localStorage.setItem("users", JSON.stringify([...userArr, user]));
    } else {
      alert("Fill the form");
    }
  };

  const editHandler = (value, index) => {
    setUser(value);
    setIndex(index);
  };
  return (
    <div className="py-20">
      <form action="" onSubmit={submitHandler}>
        <div className="max-w-2xl mx-auto border border-yellow-600 p-10 bg-white rounded-lg shadow-lg  ">
          <h1 className="text-3xl font-bold text-center mb-4">Hotel Booking</h1>
          <p className="text-center text-gray-600 mb-8">
            Experience Something New Every Moment
          </p>
          <hr className="h-1 bg-black mb-4 bg-light" />
          <div className="mb-4">
            <label className="block text-lg font-medium text-gray-700 mb-1">
              Name
            </label>
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="First name"
                value={user.firstName}
                className="w-1/2 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) =>
                  setUser({ ...user, firstName: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Last name"
                value={user.lastName}
                className="w-1/2 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => setUser({ ...user, lastName: e.target.value })}
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-lg font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Email"
              value={user.email}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </div>

          <div className="mb-4">
            <label className="block text-lg font-medium text-gray-700 mb-1">
              Room Type
            </label>
            <ReactSelect
              className="w-full"
              options={Option}
              value={{ value: user.roomType, label: user.roomType }}
              onChange={(e) => setUser({ ...user, roomType: e.value })}
            />
          </div>

          <div className="mb-4">
            <label className="block text-lg font-medium text-gray-700 mb-1">
              Number of Guests
            </label>
            <input
              type="number"
              placeholder="Number of Guests"
              value={user.guest}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setUser({ ...user, guest: e.target.value })}
            />
          </div>

          <div className="mb-4">
            <label className="block text-lg font-medium text-gray-700 mb-1">
              Arrival Date & Time
            </label>
            <div className="flex space-x-4">
              <input
                type="date"
                value={user.arivvalDate}
                className="w-1/2 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) =>
                  setUser({ ...user, arivvalDate: e.target.value })
                }
              />
              <input
                type="time"
                value={user.arivvalTime}
                className="w-1/2 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) =>
                  setUser({ ...user, arivvalTime: e.target.value })
                }
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-lg font-medium text-gray-700 mb-1">
              Departure Date
            </label>
            <input
              type="date"
              value={user.departureDate}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) =>
                setUser({ ...user, departureDate: e.target.value })
              }
            />
          </div>

          <div className="mb-4">
            <label className="block text-lg font-medium text-gray-700 mb-1">
              Special Request
            </label>
            <textarea
              placeholder="Any special request"
              value={user.specialRequst}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) =>
                setUser({ ...user, specialRequst: e.target.value })
              }
            ></textarea>
          </div>

          <button
            className="w-full bg-green-900 text-xl text-white p-2 rounded-md hover:bg-green-700 transition duration-200"
            type="submit"
          >
            Submit
          </button>
          <button
            className="w-full bg-yellow-900 text-xl mt-4 text-white p-2 rounded-md hover:bg-yellow-700 transition duration-200"
            onClick={() => editHandler(e, i)}
          >
            Edit
          </button>
        </div>
      </form>
    </div>
  );
}
