import React, { useCallback, useRef, useState } from "react";
import ReactFlow, { Background, Controls, MiniMap } from "reactflow";
import "reactflow/dist/style.css";
import { nodeTypes } from "../utils/nodeTypes";
import shortUUID from "short-uuid";
import useReactFlowStore from "@/app/zustand_store/reactflow_store";
import { useShallow } from "zustand/react/shallow";

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
  setNodes: state.setNodes,
  setEdges: state.setEdges,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
  onConnect: state.onConnect,
  setSelectedNode: state.setSelectedNode,
});

const ReactFlowMain = () => {
  const reactFlowWrapper = useRef(null);

  const {
    nodes,
    edges,
    setNodes,
    onNodesChange,
    onEdgesChange,
    onConnect,
    setSelectedNode,
  } = useReactFlowStore(useShallow(selector));

  // reactFlowInstance is needed to get the drag position from the refrence of the reactflow origin instead of component origin refrence
  const [reactFlowInstance, setReactFlowInstance] = useState(null);

  // this I did not understand this but apparently onDragOver is required to allow drag and drop without which onDrop does not work
  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      // here we get the type of the node from drag and drop from  nodesPannel component
      const type = event.dataTransfer.getData("application/reactflow");

      const position = reactFlowInstance.screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });

      const newNode = {
        id: shortUUID.generate(),
        type: type,
        position: position,
        data: { label: `${type} node`, message: null },
      };
      const updatedNodes = [...nodes, newNode];
      setNodes(updatedNodes);
    },
    [reactFlowInstance, setNodes, nodes]
  );

  const onNodeClick = (event, node) => {
    // gives us the selected node in the states zustand store to be used in other components
    setSelectedNode(node);
  };

  const onPaneClick = () => {
    // Reset selected node
    setSelectedNode(null);
  };

  const isValidConnection = (connection) => {
    const { source, sourceHandle } = connection;
    // Get all edges
    const edges = reactFlowInstance.getEdges();

    // Check if there's already an edge from this source handle
    const existingEdge = edges.find(
      (edge) => edge.source === source && edge.sourceHandle === sourceHandle
    );
    // showWarningToast("Can only have one edge originating from a source handle");
    // Return false if an edge already exists, true otherwise
    return !existingEdge;
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
        isValidConnection={isValidConnection}
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
