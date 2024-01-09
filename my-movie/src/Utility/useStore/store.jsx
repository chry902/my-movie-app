import { create } from "zustand";

const useStore = create((set) => ({
  logInData: {
    email: "",
    password: "",
  },
  isAuthenticated: false,
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  decrementAllBears: () => set((state) => ({ bears: state.bears - 1 })),
  setAuthenticated: (authStatus) => set({ isAuthenticated: authStatus }),
  setLogInData: (newLogInData) => set({ logInData: newLogInData }),
}));
export default useStore;
