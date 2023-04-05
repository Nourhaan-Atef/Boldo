import logo from "../assets/logo.svg";
import { NavLink } from "react-router-dom";
import menu from "../assets/menu.png";
import cancel from "../assets/cancel.png";

import { useState } from "react";
const Navbar = () => {
  const [showmenu, setShowMenu] = useState(false);
  return (
    <>
      <div className="py-5 flex  justify-between items-center lg:px-32 md:px-20 bg-darkBlue sm:gap-0 gap-5  px-10">
        <div className="flex items-center gap-3 text-4xl text-white ">
          <img src={logo} alt="Logo" className="w-6" />
          <p className=" font-Manrope font-extrabold">Boldo</p>
        </div>
        <div className="md:hidden">
          <img
            src={`${showmenu ? cancel : menu}`}
            alt="menu"
            className="w-8 text-white cursor-pointer"
            onClick={() => setShowMenu(!showmenu)}
          />
        </div>
        <ul className="hidden md:flex sm:flex-row flex-col sm:gap-2 gap-5 items-center  justify-between font-semibold font-OpenSans text-white">
          <NavLink
            to="/"
            className="cursor-pointer sm:px-8 px-6 py-1 border-2 border-transparent rounded-full hover:border-green "
          >
            Home
          </NavLink>
          <NavLink
            to="/Blog"
            className="cursor-pointer sm:px-8 px-6 py-1 border-2 border-transparent rounded-full hover:border-green "
          >
            Blog
          </NavLink>
          <NavLink
            to="/About"
            className="cursor-pointer sm:px-8 px-6 py-1 border-2 border-transparent rounded-full hover:border-green "
          >
            About
          </NavLink>
          <li className=" cursor-pointer text-green border-2 border-white rounded-full  sm:px-8 px-6 py-1">
            LogIn
          </li>
        </ul>
      </div>
      {showmenu ? (
        <div className="px-10 bg-darkBlue py-10 md:hidden">
          <ul className="flex flex-col gap-5 items-center  justify-between font-semibold font-OpenSans text-white border-2 border-white py-10  bg-darkBlue w-full rounded-3xl">
            <NavLink
              to="/"
              className="cursor-pointer sm:px-8 px-6 py-1 border-2 border-transparent rounded-full hover:border-green "
            >
              Home
            </NavLink>
            <NavLink
              to="/Blog"
              className="cursor-pointer sm:px-8 px-6 py-1 border-2 border-transparent rounded-full hover:border-green "
            >
              Blog
            </NavLink>
            <NavLink
              to="/About"
              className="cursor-pointer sm:px-8 px-6 py-1 border-2 border-transparent rounded-full hover:border-green "
            >
              About
            </NavLink>
            <li className=" cursor-pointer text-green border-2 border-white rounded-full  sm:px-8 px-6 py-1">
              LogIn
            </li>
          </ul>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Navbar;
