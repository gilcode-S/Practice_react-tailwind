import React from "react";

const NextPage = () => {
  return (
    <div>
      <div className="mt-20  p-4">
        <h1 className="text-5xl font-bold font-mono text-center">
          Optimize Your <br />
          Ragnarok Build
        </h1>
        <p className="text-base font-semibold text-center mt-4">
          Optimize Your Ragnarok build online character build,
          <br /> for both free to play(f2p) and pay to win (p2w){" "}
        </p>
        <div className="flex justify-center mt-10 flex-wrap">
          <button className="border bg-yellow-500 rounded-2xl p-2 m-2 text-center w-52 text-lg font-semibold font-mono hover:bg-white hover:scale-105 transition-all duration-300">
            Start New Build
          </button>

          <button className="border bg-yellow-300 rounded-2xl p-3 m-2 text-center w-52 text-lg font-semibold font-mono hover:bg-white hover:scale-105 transition-all duration-300">
            Load Saved Build
          </button>
        </div>

        <div className="mt-20">
            <p className="flex justify-center items-center font-semibold font-mono text-xl">Features Builds</p>
            <div className="flex flex-wrap justify-center items-center mt-10 gap-10">
                <div className="h-60 w-72 bg-red-500" ></div>
                <div className="h-60 w-44 bg-green-500"></div>
                <div className="h-60 w-44 bg-blue-500"></div>
                <div className="h-60 w-44 bg-orange-500"></div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default NextPage;
