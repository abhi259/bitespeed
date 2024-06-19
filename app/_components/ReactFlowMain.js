import React, { useCallback, useRef, useState } from "react";
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  addEdge,
  useEdgesState,
  useNodesState,
} from "reactflow";
import "reactflow/dist/style.css";
import { nodeTypes } from "../utils/nodeTypes";
import shortUUID from "short-uuid";
import useZustandStore from "@/zustand_store/reactflow_store";

const initialNodes = [
  {
    id: "1",
    position: { x: 0, y: 0 },
    type: "messageNode",
    data: { label: "1" },
  },
];

const initialEdges = [];

const ReactFlowMain = () => {
  const { selectedNode, setSelectedNode } = useZustandStore();
  const reactFlowWrapper = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();
      const type = event.dataTransfer.getData("application/reactflow");

      const position = reactFlowInstance.screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });

      setNodes((nds) => {
        return nds.concat({
          id: shortUUID.generate(),
          type,
          position: position,
          data: { label: `${type} node` },
        });
      });
    },
    [reactFlowInstance, setNodes]
  );

  const onNodeClick = (event, node) => {
    setSelectedNode(node.id);
    console.log("selectedNode", selectedNode);
  };

  const onPaneClick = () => {
    setSelectedNode(null);
  };

  return (
    <div className="flex grow w-full h-full " ref={reactFlowWrapper}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onDrop={onDrop}
        onDragOver={onDragOver}
        nodeTypes={nodeTypes}
        onInit={setReactFlowInstance}
        onNodeClick={onNodeClick}
        onPaneClick={onPaneClick}
        fitView
      >
        <Controls />
        <MiniMap zoomable pannable />
        <Background variant="dots" gap={12} size={1} />
      </ReactFlow>
    </div>
  );
};

export default ReactFlowMain;
