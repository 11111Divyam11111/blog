"use client"
import { BiDislike, BiSolidLike, BiLike, BiSolidDislike } from "react-icons/bi";
import { useState } from "react";


export const LikeDislike = () => {
  const [selected, setSelected] = useState(null);

  const handleLike = () => {
    setSelected("like");
  };

  const handleDislike = () => {
    setSelected("dislike");
  };


  return (
    <div className="flex flex-row gap-1 text-sm absolute mb-0 ">
      <button
        className={`text-center justify-items-center absolute mb-0 ${
          selected === "like" ? "text-gray-400" : ""
        }`}
        onClick={handleLike}
      >
        {selected !== "like" ? <BiLike width={60} /> : <BiSolidLike width={50} style={{ color: 'blue' }} />}
      </button>
      <button
        className={`text-center justify-items-center absolute mb-0 ml-7 ${
          selected === "dislike" ? "text-gray-400" : ""
        }`}
        onClick={handleDislike}
      >
        {selected !== "dislike" ? <BiDislike width={60} /> : <BiSolidDislike width={50} style={{ color: 'red' }} />}
      </button>
    </div>
  );
};
