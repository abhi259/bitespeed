import { create } from "zustand";

const useZustandStore = create((set) => ({
  selectedNode: null,
  setSelectedNode: (prop) => set((state) => ({ selectedNode: prop })),
}));

export default useZustandStore;
