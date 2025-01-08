import React, { createContext, useContext, useState, ReactNode } from 'react';
import stylesLight from '../styles/light.module.css';
import stylesDark from '../styles/dark.module.css';

interface ThemeContextType {
  styles: { [key: string]: string };
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  const styles = isDarkMode ? stylesDark : stylesLight;
  return (
    <ThemeContext.Provider value={{ styles, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
