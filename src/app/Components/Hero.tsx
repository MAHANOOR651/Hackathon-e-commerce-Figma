
import React from "react";


const Hero = () => {
  return (
    <section className="bg-gray-100 py-16 px-6 flex flex-col md:flex-row items-center justify-between">
      
      <div className="max-w-lg space-y-6">
        <p className="text-sm text-gray-500 uppercase">Welcome to Chairy</p>
        <h1 className="text-4xl font-bold text-gray-800">
          Best Furniture Collection For Your Interior.
        </h1>
        <button className="px-6 py-3 bg-teal-500 text-white rounded-md shadow-md hover:bg-teal-600">
          Shop Now
        </button>
      </div>

      
      <div className="relative mt-8 md:mt-0">
        <img
          src="/chair.png"
          alt="chair"
          className="w-[300px] h-[300px] object-contain"
        />
        
        <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs px-2 py-1 rounded">
          
        </div>
        <div className="absolute bottom-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
