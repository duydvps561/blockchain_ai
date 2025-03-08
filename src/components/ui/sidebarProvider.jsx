import { createContext, useContext } from "react";

const SidebarContext = createContext();

export function SidebarProvider({ children }) {
  return (
    <SidebarContext.Provider value={{}}>{children}</SidebarContext.Provider>
  );
}

export function useSidebar() {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
}
