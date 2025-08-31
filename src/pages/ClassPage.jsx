import React from "react";

const ClassPage = () => {
  return (
    <div className="mt-20 p-4 text-center">
      {/* Class Selection */}
      <div className="flex-col justify-center items-center flex-wrap">
        <h1 className="text-2xl font-bold font-mono"> SELECT CLASS</h1>
        <button className="border bg-yellow-500 rounded-2xl p-2 m-2 text-center w-60 text-lg font-semibold font-mono hover:bg-white hover:scale-105 transition-all duration-300">
          Base Class Build
        </button>
        <button className="border bg-yellow-300 rounded-2xl p-2 m-2 text-center w-60 text-lg font-semibold font-mono hover:bg-white hover:scale-105 transition-all duration-300">
          Advance Class Build
        </button>
      </div>

      {/* Filter Style */}
      <div className="mt-10">
        <h1 className="text-xl font-semibold font-mono mb-4">Filter Style</h1>
        <div className="flex justify-center gap-16 items-center flex-wrap text-xl font-semibold">
          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              className="w-8 h-8 accent-yellow-500 cursor-pointer"
            />
            PVE
          </label>
          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              className="w-8 h-8 accent-yellow-500 cursor-pointer"
            />
            PVP
          </label>
          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              className="w-8 h-8 accent-yellow-500 cursor-pointer"
            />
            WOE
          </label>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-12 border-t-2 border-gray-400 w-2/4 mx-auto" />

      {/* Filter Player Type */}
      <div className="mt-10">
        <h1 className="text-xl font-semibold font-mono mb-4">Filter Player Type</h1>
        <div className="flex justify-center gap-16 items-center flex-wrap text-xl font-semibold">
          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              className="w-8 h-8 accent-yellow-500 cursor-pointer"
            />
            F2P
          </label>
          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              className="w-8 h-8 accent-yellow-500 cursor-pointer"
            />
            P2W
          </label>
        </div>
      </div>
      <button className="bg-yellow-300 rounded-full p-2 m-2 mt-10 w-32 hover:bg-white transition duration-300 hover:scale-105 font-semibold font-mono">Next</button>
    </div>
  );
};

export default ClassPage;
