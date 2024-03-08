"use client";

import React from 'react';

const HomePage = () => {
  return (
    <div className="flex flex-wrap -mx-3 h-full">
      <div className="w-full md:w-1/6 px-3 mb-6 md:mb-0">
        <div className="p-6 border border-gray-200 rounded-lg">
          Coluna 1
        </div>
      </div>
      <div className="w-full md:w-5/6 px-3 mb-6 md:mb-0">
        <div className="p-6 border border-gray-200 rounded-lg">
          Coluna 2
        </div>
      </div>
    </div>
  );
};

export default HomePage;