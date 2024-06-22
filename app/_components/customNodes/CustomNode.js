import { getIcon } from "@/app/utils/nodeTypes";
import React from "react";
import { Handle, Position } from "reactflow";

import "reactflow/dist/style.css";

const CustomNode = ({ data, type }) => {

  // getIcon function returns icon, label and color based on type of the node 
  const { icon, label, color } = getIcon({ type });

  const placeholderText =
    "Please click and write the intended text in the right pannel";

  return (
    <div className="px-2 shadow-md rounded-md bg-white border-2 border-white w-[200px] object-center ">
      <div className="flex items-center z-50">
        <div
          className={`rounded-full w-12 h-12 flex justify-center items-center   p-4 ${color} `}
        >
          {icon}
        </div>

        <div className="ml-2 text-black flex w-full flex-col items-between h-[70px] gap-1 ">
          <h1 className="text-start text-[12px] font-extrabold ">{label}</h1>
          {data.message == null || data.message === "" ? (
            <p className="text-[8px]  text-gray-400 ">{placeholderText}</p>
          ) : (
            <h1 className="text-[8px] line-clamp-3 ">{data.message}</h1>
          )}
        </div>
      </div>

      <Handle
        type="target"
        position={Position.Left}
        className="!h-[40px] !rounded-none !bg-cyan-600"
      />

      <Handle
        type="source"
        position={Position.Right}
        className="!h-[40px] !rounded-none !bg-cyan-600"
      />
    </div>
  );
};

export default CustomNode;
