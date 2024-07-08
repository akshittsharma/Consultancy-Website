import React, { useState } from "react";

const Card = ({ title, image, description }) => {
  return (
    <>
      <div className="flex flex-col m-6 p-8 bg-white border shadow-xl  rounded-xl  w-[24rem] h-[24rem]">
        <img
          src={image}
          className="w-full h-[20rem] overflow-hidden rounded-xl"
        ></img>
        <p className="text-lg font-bold text-gray-800 dark:text-white">
          {title}
        </p>
        <div className="mt-1 text-gray-500 dark:text-neutral-400">
          {description}
        </div>
        <p className="cursor-pointer mt-2 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
          Read More
        </p>
      </div>
    </>
  );
};

export default Card;
