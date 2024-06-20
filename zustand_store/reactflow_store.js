// import { create } from "zustand";

// const useZustandStore = create((set) => ({
//   selectedNode: null,
//   setSelectedNode: (prop) => set((state) => ({ selectedNode: prop })),
// }));

// export default useZustandStore;

const initialNodes = [
  {
    id: "1",
    position: { x: 0, y: 0 },
    type: "messageNode",
    data: { label: "1" },
  },
];

const initialEdges = [];

import { create } from "zustand";
import { addEdge, applyNodeChanges, applyEdgeChanges } from "reactflow";
// import initialNodes from "./nodes";
// import initialEdges from "./edges";

const useReactFlowStore = create((set, get) => ({
  nodes: initialNodes,
  edges: initialEdges,
  onNodesChange: (changes) => {
    set({
      nodes: applyNodeChanges(changes, get().nodes),
    });
  },
  onEdgesChange: (changes) => {
    set({
      edges: applyEdgeChanges(changes, get().edges),
    });
  },
  onConnect: (connection) => {
    set({
      edges: addEdge(connection, get().edges),
    });
  },
  setNodes: (nodes) => {
    set({ nodes });
  },
  setEdges: (edges) => {
    set({ edges });
  },
}));

export default useReactFlowStore;
