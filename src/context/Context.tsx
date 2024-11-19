import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

interface AppContextType {
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
    isToken: string;
    setIsToken: (token: string) => void;
    logout: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isToken, setIsToken] = useState<string>("");

    useEffect(() => {
      const token = localStorage.getItem('auth_token');
      if (token) {
        setIsToken(token);
      }
    }, []);

    const logout = () => {
      localStorage.removeItem('auth_token');
      setIsToken("");
    };

    return (
        <AppContext.Provider value={{ isOpen, setIsOpen, isToken, setIsToken, logout }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
