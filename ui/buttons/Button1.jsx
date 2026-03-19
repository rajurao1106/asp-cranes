import React from "react";

export default function Button1({button1}) {
  return (
    <div>
      <button className="flex items-center duration-200 pl-8 bg-red-500 justify-between border overflow-hidden border-gray-800 rounded-sm font-semibold text-white hover:text-black w-fit hover:bg-white  transition group">
        {button1}
        <p className="pb-2 px-4 ml-8 duration-200 text-4xl flex items-center justify-center bg-white text-black group-hover:bg-black group-hover:text-white transition">
          »
        </p>
      </button>
    </div>
  );
}
