import React, { useEffect } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import useReactFlowStore from "@/app/zustand_store/reactflow_store";
import { useShallow } from "zustand/react/shallow";

const SettingsPannel = () => {
  // selector helps in optimizing the zustand statemanagement
  const selector = (state) => ({
    nodes: state.nodes,
    edges: state.edges,
    selectedNode: state.selectedNode,
    setNodes: state.setNodes,
    setEdges: state.setEdges,
    setSelectedNode: state.setSelectedNode,
    updateNodeData: state.updateNodeData,
  });

  const { selectedNode, updateNodeData } = useReactFlowStore(
    useShallow(selector)
  );

  const [text, setText] = React.useState("");

  const handleTextUpdate = (event) => {
    const updatedText = event.target.value;
    setText(updatedText);
    updateNodeData({ nodeId: selectedNode.id, message: updatedText });
  };

  //this useEffect here handles the text update based on the selected node in this settings pannel
  useEffect(() => {
    setText(selectedNode.data.message);
  }, [selectedNode.data.message]);

  return (
    <div className="flex flex-col ">
      <div className="flex justify-between p-4">
        <ArrowBackIcon />
        <h1>Message</h1>
        <div></div>
      </div>
      <hr />
      <div className="p-4">
        <textarea
          id="textAreaLabel"
          placeholder="Type your message here"
          className="w-full rounded-sm p-2 text-black"
          rows={4}
          onChange={handleTextUpdate}
          value={text || ""}
        />
      </div>
    </div>
  );
};

export default SettingsPannel;
