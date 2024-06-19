import React from "react";
import { Handle, Position } from "reactflow";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
const PictureNode = ({ data }) => {
  return (
    <div
      className={`px-4 py-2 shadow-md rounded-md bg-white border-2 border-white min-w-[200px] `}
    >
      <div className="flex items-center z-50">
        <div className="rounded-full w-12 h-12 flex justify-center items-center bg-pink-600 p-4">
          <InsertPhotoIcon />
        </div>
        <div className="ml-2 text-black flex w-full justify-center">
          <h1>Picture</h1>
        </div>
      </div>

      <Handle
        type="target"
        position={Position.Left}
        className=" !-z-10 !w-[20px] !h-[40px] !rounded-none !bg-cyan-600"
      />
      <Handle
        type="source"
        position={Position.Right}
        className=" !-z-10 !w-[20px] !h-[40px] !rounded-none !bg-cyan-600"
      />
    </div>
  );
};

export default PictureNode;
