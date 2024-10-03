import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "reactstrap";
import logo from "./Imgs/logo.png";
import { Menu } from "lucide-react";

export default function Header() {
  const navigate = useNavigate();
  const [showLinks, setShowLinks] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
    setShowLogin(false); 
  };

  const hideMenu = () => {
    setShowLinks(false);
  };

  const showLoginHandler = () => {
    setShowLinks(false);
  };

  return (
    <header className="bg-green-900 px-4 md:px-20 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-3">
        <div className="flex items-center">
          <img src={logo} alt="Hotel Logo" className="h-12 md:h-16 lg:h-20" />
        </div>
        <div className="flex items-center space-x-4 md:space-x-6">
          <Button
            className="border text-lg  h-8 md:h-12 w-10 md:w-14 sm:w-12  text-white md:hidden"
            onClick={toggleLinks}
          >
            <Menu className="h-6 w-10" />
          </Button>

          <nav
            className={`fixed inset-0 top-16 bg-green-900 md:relative md:flex md:space-x-10 md:bg-transparent md:top-0 md:inset-auto ${
              showLinks ? "block" : "hidden"
            } md:block`}
          >
            <div className="flex flex-col md:flex-row  space-y-3 md:space-y-0 md:space-x-6 p-4 md:p-0">
              <NavLink
                to="/"
                className="text-white font-serif"
                onClick={hideMenu}
              >
                HOME
              </NavLink>
              <NavLink
                to="/about"
                className="text-white font-serif"
                onClick={hideMenu}
              >
                ABOUT
              </NavLink>
              <NavLink
                to="/gallery"
                className="text-white font-serif"
                onClick={hideMenu}
              >
                GALLERY
              </NavLink>
              <NavLink
                to="/room"
                className="text-white font-serif"
                onClick={hideMenu}
              >
                ROOM
              </NavLink>
              <NavLink
                to="/contact"
                className="text-white font-serif"
                onClick={hideMenu}
              >
                CONTACT
              </NavLink>
              <NavLink
                to="/userinfo"
                className="text-white font-serif"
                onClick={hideMenu}
              >
                USER BOOKING INFO
              </NavLink>
              <NavLink
                to="/userRegister"
                className="text-white font-serif"
                onClick={hideMenu}
              >
                USER REGISTER INFO
              </NavLink>
            </div>
          </nav>
          <div className="flex items-center space-x-4">
            <Button
              className="border h-8 md:h-12 w-20 md:w-32 text-sm md:text-lg text-white"
              onClick={() => navigate("/booking")}
            >
              Booking
            </Button>
            <div className="relative">
              <Button
                className="border h-8 md:h-12 w-12 md:w-16 sm:w-14 text-sm sm:text-lg md:text-xl text-white"
                onClick={showLoginHandler}
              >
                Login
              </Button>
              {showLogin && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
                  <NavLink
                    to="/register"
                    className="block text-center font-serif text-xl text-black px-4 py-2 mb-1 hover:bg-gray-100 transition-all"
                    onClick={showLoginHandler}
                  >
                    Register
                  </NavLink>
                  <NavLink
                    to="/login"
                    className="block text-center text-black text-xl font-serif px-4 py-2 hover:bg-gray-100 transition-all"
                    onClick={showLoginHandler}
                  >
                    Login
                  </NavLink>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
