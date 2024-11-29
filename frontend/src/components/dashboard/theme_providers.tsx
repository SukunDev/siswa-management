"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { User } from "@/types/user";

interface DataWeb {
  sidebar: boolean;
  user: User;
}

interface ThemeContextType {
  data: DataWeb;
  handleDataChange: (e: Partial<DataWeb>) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeContextProviderProps {
  children: ReactNode;
  user: User;
}

export const ThemeContextProvider = ({
  children,
  user,
}: ThemeContextProviderProps) => {
  const [data, setData] = useState<DataWeb>({
    sidebar: true,
    user: user,
  });

  const handleDataChange = (e: Partial<DataWeb>) => {
    setData((prevState) => ({
      ...prevState,
      ...e,
    }));
  };

  return (
    <ThemeContext.Provider value={{ data, handleDataChange }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error(
      "useThemeContext must be used within a ThemeContextProvider"
    );
  }
  return context;
};
