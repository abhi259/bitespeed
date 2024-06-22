"use client";

import useReactFlowStore from "@/zustand_store/reactflow_store";
import React from "react";
import { useShallow } from "zustand/react/shallow";
import { showErrorToast, showSuccessToast } from "../utils/toastMessages";

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
});

const Navbar = () => {
  const { nodes, edges } = useReactFlowStore(useShallow(selector));

  const handleSave = () => {

    // this might be wrong but if edges.length is >= nodes.length-1 that means all the nodes have been connected to atleast one other node. 
    if (nodes.length > 0 && edges.length >= nodes.length - 1) {
      showSuccessToast("Saved Successfully");
    } else {
      showErrorToast("Cannot save the flow");
    }
  };

  return (
    <div className="flex flex-row-reverse justify-start py-2 items-center bg-[#10273b] border-b-[1px]   ">
      <button
        onClick={handleSave}
        className="bg-cyan-500 hover:bg-cyan-600 rounded-full  overflow-hidden font-bold text-xs px-7 py-2 mr-[70px] transition duration-300 hover:scale-110 "
      >
        Save Changes
      </button>
    </div>
  );
};

export default Navbar;
