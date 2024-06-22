"use client";

import React from "react";

import "reactflow/dist/style.css";
import NodesPanel from "./_components/nodePannel/NodesPanel";
import ReactFlowMain from "./_components/ReactFlowMain";
import useZustandStore from "@/zustand_store/reactflow_store";
import SettingsPannel from "./_components/nodePannel/SettingsPannel";

export default function Home() {
  const { selectedNode, setSelectedNode } = useZustandStore();

  return (
    <div className=" flex grow bg-[#10273b] ">
      {/* our main react flow container */}
      <div className="grow">
        <ReactFlowMain />
      </div>
      {/* if a node is selected shows the settings pannel else shows the nodes pannel */}
      <div className="w-[300px] border-l-2">
        {selectedNode == null ? <NodesPanel /> : <SettingsPannel />}
      </div>
    </div>
  );
}
