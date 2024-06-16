"use client";

import React from "react";

import "reactflow/dist/style.css";
import NodesPanel from "./_components/NodesPanel";
import ReactFlow from "./_components/ReactFlowMain";
import ReactFlowMain from "./_components/ReactFlowMain";

export default function Home() {
  return (
    <div className=" flex grow bg-[#10273b] ">
      <div className="grow">
        <ReactFlowMain />
      </div>
      <div>
        <NodesPanel />
      </div>
    </div>
  );
}
