import { create } from 'zustand';


const useCountStore = create((set) => ({
  count: 2,
  updateCount: (amount) => set((state) => ({ count: state.count + amount })),
}))

export default useCountStore;

