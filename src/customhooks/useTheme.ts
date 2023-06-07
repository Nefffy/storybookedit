import { useEffect, useState } from 'react';
import { setToLS, getFromLS } from '../App';
import { DesignSystemBase } from "../stories/themes/theme_V1";

export const useTheme = () => {
  // add theme-data-schema or just type for demo:

  const themes = getFromLS('default');
  //adapt to our data structure:
  const [theme, setTheme] = useState(themes);
  const [themeLoaded, setThemeLoaded] = useState(false);


  //update to localStorage and theme-state
  const setMode = (mode:DesignSystemBase) => {
    setToLS('theme', mode);
    setTheme(mode);
  };


  useEffect(() =>{
    const localTheme = getFromLS('theme');
    localTheme ? setTheme(localTheme) : setTheme(themes);
    setThemeLoaded(true);
  }, []);

  return { theme, themeLoaded, setMode };
};