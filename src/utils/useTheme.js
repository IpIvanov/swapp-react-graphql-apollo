import { useState, useEffect } from 'react';

const useTheme = (theme) => {
  const [currentTheme, setCurrentTheme] = useState(theme);
  const setTheme = (newTheme) => {
    setCurrentTheme(newTheme);
  };

  useEffect(() => {
    setTheme();
  }, [currentTheme]);

  return { currentTheme, setTheme };
};

export default useTheme;
