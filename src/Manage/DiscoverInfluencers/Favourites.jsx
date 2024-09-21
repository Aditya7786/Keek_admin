import React, { useState, useEffect } from "react";
import { GoKebabHorizontal } from "react-icons/go";
import { FaHeart, FaPlus } from "react-icons/fa6";

const Favourites = () => {
  const savedList = [
    { name: "Work", add: <FaPlus /> },
    { name: "Personal", add: <FaPlus /> },
  ];

  const [progress, setProgress] = useState(100);
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev > 0 ? prev - 1 : 0));
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute top-12 right-0 flex flex-col gap-3 shrink-0 w-[300px] rounded-[10px] bg-white p-4 font-semibold shadow-[2px_4px_14px_2px_rgba(0,0,0,0.25)]">
      <div className="flex w-full px-3 py-[10px] items-center justify-between rounded-[10px] border border-[#777]">
        <span>Favourites</span>
        <span className="mt-1 scale-150 text-red-600" aria-label="Favorites">
          <FaHeart />
        </span>
      </div>

      <div className="text-sm">{/* Add dynamic content here if needed */}</div>

      <div className="flex justify-between items-center text-sm">
        <span>Saved List</span>
        <button className="text-[#06F]" aria-label="Create New List">
          New List
        </button>
      </div>

      {/* Sample List Items */}
      {savedList?.map((item, index) => (
        <div
          key={index}
          className="flex w-full px-3 py-[10px] items-center justify-between rounded-[10px] border border-[#777]"
        >
          <span className="flex items-center gap-1">
            {item.name}
            <GoKebabHorizontal
              className="text-[#8E9090] rotate-90"
              aria-hidden="true"
            />
          </span>
          <span className="scale-150">{item.add}</span>
        </div>
      ))}

      <div className="w-full h-2 bg-gray-200 rounded-full mt-2">
        <div
          className="h-2 bg-blue-600 rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Favourites;
