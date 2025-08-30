import React from "react";
import { ragna3 } from "../image/image";

const Details = () => {
  return (
    <div className="flex justify-center mt-20">
      <div className="flex items-center flex-col">
        <img
          src={ragna3}
          alt="logo3"
          className="h-72 w-auto bg-white object-contain hover:scale-105 ease-in duration-300 shadow-lg rounded-full"
        />
        <h1 className="font-bold text-3xl text-center mt-2">Profile</h1>
        <div className="mt-4 flex justify-center flex-wrap">
          <button className="border bg-yellow-300 rounded-full p-2 m-2 text-center w-48 text-2xl font-semibold font-mono hover:bg-yellow-600 hover:scale-105 transition-all duration-300">
            Create
          </button>
          <button className="border bg-yellow-300 rounded-full p-2 m-2 text-center w-48 text-2xl font-semibold font-mono hover:bg-yellow-600 hover:scale-105 transition-all duration-300">
            Build
          </button>
          <button className="border bg-yellow-300 rounded-full p-2 m-2 text-center w-48 text-2xl font-semibold font-mono hover:bg-yellow-600 hover:scale-105 transition-all duration-300">
            Stats
          </button>
        </div>

        <div className="mt-10 flex justify-center flex-col">
          <textarea
            rows={10}
            cols={50}
            
            className="border border-gray-300 rounded-lg p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-400 transition w-full resize-none opacity-80"
            placeholder="About. . ."
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default Details;
