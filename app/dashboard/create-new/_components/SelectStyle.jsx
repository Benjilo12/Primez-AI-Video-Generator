import Image from "next/image";
import React from "react";

function SelectStyle() {
  const styleOptions = [
    {
      id: 1,
      name: "Realistic",
      image: "/realistic.jpg",
    },
    {
      id: 2,
      name: "Cartoon",
      image: "/cartoon.png",
    },
    {
      id: 3,
      name: "Watercolor",
      image: "/watercolor.jpg",
    },
    {
      id: 4,
      name: "Comic",
      image: "/comic.jpg",
    },
  ];
  return (
    <div className="mt-5 flex flex-col gap-5">
      {" "}
      <h2 className="font-bold text-2xl text-blue-600 dark:text-lime-500">
        Style
      </h2>
      <p className="text-gray-700 dark:text-gray-300">
        Select the style of your video
      </p>
      <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6  mt-3">
        {styleOptions.map((item, index) => (
          <div
            key={index}
            className="relative cursor-pointer rounded-lg border-2 border-gray-300 dark:border-gray-600 hover:border-blue-400/60 hover:bg-blue-400/20 dark:hover:border-lime-300/20 dark:hover:bg-white/10"
          >
            <Image
              src={item.image}
              alt={item.name}
              width={600}
              height={338}
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
              quality={90}
              className="h-40 w-full rounded-lg object-cover"
            />
            <h2 className="absolute p-1 bg-black bottom-0 w-full dark:bg-gray-800 text-white text-center rounded-b-lg">
              {item.name}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SelectStyle;
