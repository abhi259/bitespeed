import React from "react";

const Navbar = () => {
  return (
    <div className="flex flex-row-reverse justify-around py-2 items-center">
      <button className="bg-white rounded-md border-4 overflow-hidden border-[#316b92] text-[#3c80ff] font-bold text-xs px-7 py-2 ">
        Save Changes
      </button>
      <button draggable className="bg-red-300 rounded-md overflow-hidden  text-black font-bold text-xs px-5 py-2">
        Cannot save flow
      </button>
      <h1></h1>
    </div>
  );
};

export default Navbar;
