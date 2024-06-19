import { create } from 'zustand';

const useCountStore = create((set) => ({
  count: null,
  updateCount: (amount) => set((state) => ({ count: state.count + amount })),
}))

export default useCountStore;

