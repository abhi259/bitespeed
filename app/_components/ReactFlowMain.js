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
import useReactFlowStore from "@/zustand_store/reactflow_store";
import { useShallow } from "zustand/react/shallow";

// const initialNodes = [
//   {
//     id: "1",
//     position: { x: 0, y: 0 },
//     type: "messageNode",
//     data: { label: "1" },
//   },
// ];

// const initialEdges = [];

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
  setNodes: state.setNodes,
  setEdges: state.setEdges,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
  onConnect: state.onConnect,
});

const ReactFlowMain = () => {
  const { selectedNode, setSelectedNode } = useZustandStore();
  const reactFlowWrapper = useRef(null);
  // const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  // const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const {
    nodes,
    edges,
    setNodes,
    setEdges,
    onNodesChange,
    onEdgesChange,
    onConnect,
  } = useReactFlowStore(useShallow(selector));

  const [reactFlowInstance, setReactFlowInstance] = useState(null);

  // const onConnect = useCallback(
  //   (params) => setEdges((eds) => addEdge(params, eds)),
  //   [setEdges]
  // );

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

      const newNode = {
        id: shortUUID.generate(),
        type: type,
        position: position,
        data: { label: `${type} node` },
      };

      const updatedNodes = [...nodes, newNode];

      setNodes(updatedNodes);
    },
    [reactFlowInstance, setNodes, nodes]
  );

  const onNodeClick = (event, node) => {
    setSelectedNode(node);
    console.log(node);
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
