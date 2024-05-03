import { createContext, useContext } from "react"

export const AppContext = createContext({
  isAuthenticated: false,
  userHasAuthenticated: useAppContext,
});

export function useAppContext() {
  return useContext(AppContext);
}
