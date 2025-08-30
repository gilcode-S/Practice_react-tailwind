import React from "react";
import { raglogo } from "../image/image";
import { LogInIcon, UserCheckIcon } from "lucide-react";
const Header = () => {
  return (
    <header className="flex justify-between items-center px-8 py-4">
      <a href="/" className="flex items-center gap-4 hover:opacity-90 transition duration-300">
        <img src={raglogo} alt="logo" className="h-36 w-auto" />
        <span className="font-mono font-bold text-gray-800  md:text-lg">
          Ragnarok Classic Builder 
        </span>
      </a>

      <nav className=" text-xl font-mono space-x-6 ">
        <a
          href="#"
          className="hover:text-red-500 hover:underline transition duration-300 "
        >
          Home
        </a>
        <a
          href="#"
          className="hover:text-red-500 hover:underline transition duration-300"
        >
          About
        </a>
        <a
          href="#"
          className="hover:text-red-500 hover:underline transition duration-300"
        >
          <UserCheckIcon className="inline-block mr-2 h-5 w-5" />
        </a>
      </nav>
    </header>
  );
};

export default Header;
