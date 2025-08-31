import React from "react";
import { ragna2 } from "../image/image";

const StatsPage = () => {
  return (
    <div className="mt-20 p-4">
      <div className="flex justify-center items-center flex-col ">
        <img
          src={ragna2}
          alt="logo2"
          className="h-72 w-auto bg-white object-contain hover:scale-105 ease-in duration-300 shadow-lg rounded-full"
        />
        <h1 className="font-mono font-bold mt-5 text-3xl">Novice</h1>
        <p className="font-semibold font-mono text-sm">
          Level 1{" "}
          <span className="underline hover:text-blue-500 transition duration-300 cursor-pointer">
            {" "}
            Novice{" "}
          </span>
        </p>

        <div className="flex justify-center items-center mt-10 gap-6 flex-wrap font-mono">
          <div className="bg-yellow-200 p-2 rounded-full w-24 text-center cursor-pointer">
            Stats
          </div>
          <div className="p-2 rounded-full w-24 text-center cursor-pointer hover:bg-yellow-200 transition-colors">
            Skill
          </div>
          <div className="p-2 rounded-full w-24 text-center cursor-pointer hover:bg-yellow-200 transition-colors">
            Equipment
          </div>
          <div className="p-2 rounded-full w-24 text-center cursor-pointer hover:bg-yellow-200 transition-colors">
            Summary
          </div>
        </div>

        <hr className="my-12 border-t-2 border-gray-600 w-2/4 mx-auto" />
      </div>
      <div className="flex flex-col gap-10 text-start ml-[25%] text-lg font-semibold">
        <div className="flex gap-5 items-center">
          <p className="w-10">STR</p>
          <div className="bg-white w-2/4 h-5 rounded relative"></div>
        <div className="ml-[60px] absolute h-5 bg-yellow-300 rounded w-1/4"></div>
        </div>
        <div className="flex gap-5 items-center">
          <p className="w-10">AGI</p>
          <div className="bg-white w-2/4 h-5 rounded relative"></div>
          <div className="ml-[60px] absolute h-5 bg-yellow-300 rounded w-1/4"></div>
        </div>
        <div className="flex gap-5 items-center">
          <p className="w-10">VIT</p>
          <div className="bg-white w-2/4 h-5 rounded relative"></div>
          <div className="ml-[60px] absolute h-5 bg-yellow-300 rounded w-1/4"></div>
        </div>
        <div className="flex gap-5 items-center">
          <p className="w-10">INT</p>
          <div className="bg-white w-2/4 h-5 rounded relative"></div>
          <div className="ml-[60px] absolute h-5 bg-yellow-300 rounded w-1/4"></div>
        </div>
        <div className="flex gap-5 items-center">
          <p className="w-10">DEX</p>
          <div className="bg-white w-2/4 h-5 rounded relative"></div>
          <div className="ml-[60px] absolute h-5 bg-yellow-300 rounded w-1/4"></div>
        </div>
        <div className="flex gap-5 items-center">
          <p className="w-10">LUK</p>
          <div className="bg-white w-2/4 h-5 rounded relative"></div>
          <div className="ml-[60px] absolute h-5 bg-yellow-300 rounded w-1/4"></div>
        </div>
      </div>
    </div>
  );
};

export default StatsPage;
