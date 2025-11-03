"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface CursorContextType {
  isCustomCursorActive: boolean;
  setIsCustomCursorActive: (active: boolean) => void;
}

const CursorContext = createContext<CursorContextType | undefined>(undefined);

export const CursorProvider = ({ children }: { children: ReactNode }) => {
  const [isCustomCursorActive, setIsCustomCursorActive] = useState(true);

  return (
    <CursorContext.Provider value={{ isCustomCursorActive, setIsCustomCursorActive }}>
      {children}
    </CursorContext.Provider>
  );
};

export const useCursor = () => {
  const context = useContext(CursorContext);
  if (!context) {
    throw new Error("useCursor must be used within a CursorProvider");
  }
  return context;
};
