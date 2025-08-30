import React from "react";
import { ragna1 } from "../image/image";
import Hero from "../components/Hero";


const Home = () => {
  return (
    <>
      <div className="flex justify-evenly items-center p-4 mt-1 flex-wrap gap-4">
        <h1 className="text-5xl font-bold font-mono">
          Optimize Your, <br />
          Ragnarok Build
        </h1>
        <div className="relative flex flex-col items-center hover:scale-110 ease-in duration-300 shadow-lg backdrop:filter backdrop-blur-sm rounded-full">
          <img src={ragna1} alt="ragna1" />
          <div className="absolute bottom-0 h-6 bg-red-400 rounded-full blur-md opacity-70"></div>
        </div>
      </div>
      <Hero />
  
    </>
  );
};

export default Home;
