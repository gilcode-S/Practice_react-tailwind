import React from "react";
import { ragna2, ragna3, ragna5, ragna6 } from "../image/image";

const Hero = () => {
  return (
    <div className="mt-10" >
      <h1 className="text-4xl font-mono font-semibold text-center">
        Explore Classes
      </h1>

      <div className="flex flex-wrap md:gap-2 items-center justify-evenly mt-20">
        {[ragna2, ragna3, ragna5, ragna6].map((img, i) => (
          <div key={i} className="flex justify-center">
            <img
              src={img}
              alt={`ragna-${i}`}
              className="h-80 w-auto bg-white object-contain hover:scale-105 ease-in duration-300 shadow-lg rounded-full"
            />
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center mt-16">
        <button className="border bg-yellow-300 rounded-full p-2 m-2 text-center w-48 text-2xl font-semibold font-mono hover:bg-yellow-600 hover:scale-105 transition-all duration-300 ">
          Build
        </button>
      </div>
    </div>
  );
};

export default Hero;
