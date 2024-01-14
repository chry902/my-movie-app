import { create } from "zustand";

const useStore = create((set) => ({
  userData: '',
  setUserData: (newUserData) => set({ userData: newUserData }),
  isAuthenticated: false,
  setAuthenticated: (authStatus) => set({ isAuthenticated: authStatus }),
}));
export default useStore;
